import { useState, useEffect, useRef } from 'react'
import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import {
  DEFAULT_OPTIONS,
  getTheme,
} from '@table-library/react-table-library/material-ui'
import { usePagination } from '@table-library/react-table-library/pagination'
import { Stack, TablePagination } from '@mui/material'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import TableSearch from '@/components/shared/Table-search'
import PdfButton from '@/components/shared/PdfButton'
import CsvButton from '@/components/shared/CsvButton'
import nodes from './data/data'
import COLUMNS from './components/Columns'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'lucide-react'
import { Button } from '@//components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useRowSelect } from '@table-library/react-table-library/select'
import { EmployeeAssignComboBox } from './components/EmployeeAssignComboBox'
import { useToast } from '@/components/ui/use-toast'

const AdminLeads = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState({ nodes })
  const printRef = useRef()
  const [selectedEmployee, setSelectedEmployee] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    setFilteredData({
      nodes: nodes.filter(
        item =>
          item.firstName.toLowerCase().includes(search.toLowerCase()) ||
          item.lastName.toLowerCase().includes(search.toLowerCase()),
      ),
    })
  }, [search])

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const materialTheme = getTheme(DEFAULT_OPTIONS)
  const theme = useTheme([
    materialTheme,
    {
      Table: `
        --data-table-library_grid-template-columns: 44px repeat(8,minmax(auto,1fr))
      `,
    },
  ])

  const select = useRowSelect(filteredData, {
    onChange: onSelectChange,
  })

  function onSelectChange(action, state) {
    console.log(action, state)
  }
  const pagination = usePagination(filteredData, {
    state: {
      page: 0,
      size: 5,
    },
    onChange: onPaginationChange,
  })

  function onPaginationChange(action, state) {
    console.log(action, state)
  }

  //gets called when user clicks assign button
  const handleAssign = employee => {
    if (!employee) return

    setSelectedEmployee(employee)
    const selectedLeads = select.state.ids

    // Implement the logic to assign selected leads to the selected employee
    console.log(`Assigning leads: ${selectedLeads} to employee: ${employee}`)
    toast({
      description: `Assigned leads: ${selectedLeads} to employee: ${employee}`,
    })

    // Add your API call or other logic to perform the assignment here

    // Reset selections and selected employee after assignment
    select.fns.onToggleAll(false)
    setSelectedEmployee('')
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/dashboard'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Leads</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader className='pb-3.5'>
          <CardTitle>Leads</CardTitle>
          <CardDescription>Manage your Leads details.</CardDescription>
        </CardHeader>
        <CardHeader className='pt-0 pb-3'>
          <div className='flex items-center gap-2'>
            <TableSearch handleSearch={handleSearch} search={search} />
            <PdfButton printRef={printRef}></PdfButton>
            <CsvButton filteredData={filteredData}></CsvButton>
            <Link to='/dashboard/leads/addLead' className='ms-auto'>
              <Button size='sm' className='gap-1 ms-auto h-7'>
                <PlusCircle className='h-3.5 w-3.5' />
                Add Leads
              </Button>
            </Link>
            <EmployeeAssignComboBox onAssign={handleAssign} select={select} />
          </div>
        </CardHeader>
        <CardContent className='overflow-x-auto'>
          <div className='min-w-full'>
            <CompactTable
              columns={COLUMNS}
              data={filteredData}
              theme={theme}
              pagination={pagination}
              layout={{ custom: true, horizontalScroll: true }}
              select={select}
            />
          </div>
        </CardContent>
        <Stack spacing={10}>
          <TablePagination
            count={filteredData.nodes.length}
            page={pagination.state.page}
            rowsPerPage={pagination.state.size}
            rowsPerPageOptions={[5, 10, 15]}
            onRowsPerPageChange={event =>
              pagination.fns.onSetSize(parseInt(event.target.value, 10))
            }
            onPageChange={(event, page) => pagination.fns.onSetPage(page)}
          />
        </Stack>
      </Card>
    </>
  )
}

export default AdminLeads
