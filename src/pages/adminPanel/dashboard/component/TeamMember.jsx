import { useState } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const TeamMember = ({ name, email, src, fallback, role, className }) => {
  const [selectedRole, setSelectedRole] = useState(role)

  const roles = [
    {
      name: 'Lead Viewer',
      description: 'Can view.',
    },
    {
      name: 'Lead Manager',
      description: 'Can view, edit, and assign leads.',
    },
    {
      name: 'Admin',
      description: 'Full access to manage leads and system settings.',
    },
  ]

  return (
    <div className={`flex items-center justify-between space-x-4`}>
      <div className='flex items-center space-x-4'>
        <Avatar>
          <AvatarImage src={src} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div>
          <p className='text-sm font-medium leading-none'>{name}</p>
          <p className='text-sm text-muted-foreground'>{email}</p>
        </div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' className='ml-auto'>
            {selectedRole}{' '}
            <ChevronDownIcon className='w-4 h-4 ml-2 text-muted-foreground' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0' align='end'>
          <Command>
            <CommandInput placeholder='Select new role...' />
            <CommandList>
              <CommandEmpty>No roles found.</CommandEmpty>
              <CommandGroup>
                {roles.map(role => (
                  <CommandItem
                    key={role.name}
                    className='flex flex-col items-start px-4 py-2 space-y-1'
                    onSelect={() => setSelectedRole(role.name)}>
                    <p>{role.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {role.description}
                    </p>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function TeamMembers({ className }) {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Manage level of permissions for each team member.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        <TeamMember
          name='Krishna Davis'
          email='m@example.com'
          src='/avatars/01.png'
          fallback='OM'
          role='Owner'
        />
        <TeamMember
          name='Krishna Lee'
          email='p@example.com'
          src='/avatars/02.png'
          fallback='JL'
          role='Member'
        />
        <TeamMember
          name='BatKhan Lee'
          email='p@example.com'
          src='/avatars/02.png'
          fallback='JL'
          role='Member'
        />
        <TeamMember
          name='Krishna Pool'
          email='p@example.com'
          src='/avatars/02.png'
          fallback='JL'
          role='Member'
        />
      </CardContent>
    </Card>
  )
}
