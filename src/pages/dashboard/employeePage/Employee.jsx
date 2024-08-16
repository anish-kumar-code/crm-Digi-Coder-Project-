import { useState, useEffect, useRef } from 'react'
import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import {
  DEFAULT_OPTIONS,
  getTheme,
} from '@table-library/react-table-library/material-ui'
import { usePagination } from '@table-library/react-table-library/pagination'
import { Stack, TablePagination } from '@mui/material'
import { nodes } from './data/data'
import COLUMNS from './components/Columns'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import TableSearch from '../../../components/shared/Table-search'
import PdfButton from '../../../components/shared/PdfButton'
import CsvButton from '../../../components/shared/CsvButton'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
const Employee = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState({ nodes })
  const printRef = useRef()

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
  const theme = useTheme(materialTheme, {
    Table: `
      --data-table-library_grid-template-columns:  25% 25% 25% 25% minmax(150px, 1fr);
    `,
  })

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

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/dashboard'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Employee</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className=''>
        <CardHeader className='pb-3.5'>
          <CardTitle>Employee</CardTitle>
          <CardDescription>Manage your Employee details.</CardDescription>
        </CardHeader>
        <CardHeader className='pt-0 pb-3'>
          <div className='flex items-center gap-2'>
            <TableSearch handleSearch={handleSearch} search={search} />
            <PdfButton printRef={printRef}></PdfButton>
            <CsvButton filteredData={filteredData}></CsvButton>
            <Link to='/dashboard/employee/addEmployee' className='ms-auto'>
              <Button size='sm' className='gap-1 ms-auto h-7'>
                <PlusCircle className='h-3.5 w-3.5' />
                Add Employee
              </Button>
            </Link>
          </div>
        </CardHeader>
        {/* employee Table */}
        <CardContent ref={printRef}>
          <CompactTable
            columns={COLUMNS}
            data={filteredData}
            theme={theme}
            pagination={pagination}
          />
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

export default Employee
