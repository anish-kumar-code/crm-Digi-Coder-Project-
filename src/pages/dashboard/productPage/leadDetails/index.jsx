import { Link, useParams } from 'react-router-dom'
import { CircleUserIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import HistoryCont from './components/HistoryCont'
import { Textarea } from '@/components/ui/textarea'
import ReminderToggle from './components/ReminderToggler'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Label } from '@/components/ui/label'
import FileUpload from './components/FileUpload'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AddFollowUps from './components/AddFollowUps'
import AddReference from './components/AddReference'
import FollowUpsHistory from './components/FollowUpsHistory'
import OptimizedImage from '@/components/shared/OptimizedImage'
import { referenceUploaded } from './data/reference'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import DetailsTab from './components/DetailsTab'
import Whatsapp from '@/assets/image/whatsapp.svg'
import Gmail from '@/assets/image/gmail.svg'
import Phone from '@/assets/image/phone.svg'

function LeadDetails() {
  const { id } = useParams()

  const onSubmit = data => {
    console.log(data)
    // Handle form submission, e.g., send data to the server
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
            <BreadcrumbLink href='/dashboard/leads'>Leads</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage href='/dashboard/leads'>
              Lead Details
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center justify-center gap-3'>
          <CircleUserIcon className='w-8 h-10 text-blue-900' />
          <div>
            <p className='text-xs text-gray-600'>Account</p>
            <p className='text-2xl font-medium'>Krishna Negi</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <Link to={'tel:+1234567890'}>
            <OptimizedImage
              src={Phone}
              width={26}
              height={26}
              alt={Phone}></OptimizedImage>
          </Link>
          <Link to={'whatsapp://send?abid=phonenumber&text=Hello%2C%20World!'}>
            <OptimizedImage
              src={Whatsapp}
              width={32}
              height={32}
              alt={Whatsapp}></OptimizedImage>
          </Link>
          <Link to={'Email:adc@gmail.com'}>
            <OptimizedImage
              src={Gmail}
              width={32}
              height={32}
              alt={Gmail}></OptimizedImage>
          </Link>
        </div>
      </div>
      <div>
        <Tabs defaultValue='details' className='w-full'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='details'>Details</TabsTrigger>
            <TabsTrigger value='followUps'>Follow Ups</TabsTrigger>
            <TabsTrigger value='reference'>References</TabsTrigger>
            <TabsTrigger value='history'>History</TabsTrigger>
          </TabsList>

          <TabsContent value='details' className='px-6 mt-5'>
            <DetailsTab onSubmit={onSubmit} />
          </TabsContent>

          <TabsContent value='followUps' className='mt-3'>
            <div>
              <AddFollowUps className='flex ml-auto'></AddFollowUps>
            </div>
            <>
              <div className='flex flex-col w-full gap-1 mt-3'>
                <FollowUpsHistory
                  title='Call Him'
                  date='2 days ago'
                  message='call him he is interested in web dev course'
                  tags={[{ label: 'meeting', variant: 'default' }]}
                />
                <FollowUpsHistory
                  title='Not Interested'
                  date='9 months ago'
                  message='wants to do Android but after the exam , call him after the exam '
                  tags={[{ label: 'call him', variant: 'destructive' }]}
                />
              </div>
            </>
          </TabsContent>

          <TabsContent value='reference'>
            <div className='my-2'>
              <AddReference className='flex ml-auto'></AddReference>
            </div>
            <div className='grid grid-cols-4 gap-4'>
              {referenceUploaded.map((reference, index) => (
                <div key={index} className='overflow-hidden'>
                  <OptimizedImage
                    src={reference.src}
                    alt={reference.name}
                    width={1280}
                    height={1114}
                    className={cn(
                      'h-auto w-auto object-cover transition-all hover:scale-105 rounded-md hover:ease-in ease-out',
                      AspectRatio === 'portrait'
                        ? 'aspect-[3/4]'
                        : 'aspect-square',
                    )}
                  />
                  <p className='mt-2'>{reference.name}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='notes' className='px-6 mt-5'>
            <div className='flex items-center justify-between'>
              <Label>Notes</Label>
              <FileUpload />
            </div>
            <div className='mt-4'>
              <HistoryCont title='asd' name='asd' dateAndTime='asdasd' />
            </div>
          </TabsContent>

          <TabsContent value='history' className='px-6 mt-5'>
            <HistoryCont
              title='edited by'
              name='Babu Roy'
              dateAndTime='07/31/2024, 07:33'
            />
            <Separator className='my-4' />
            <HistoryCont
              title='created by'
              name='Shivam Roy'
              dateAndTime='07/31/2024, 07:33'
            />
          </TabsContent>

          <TabsContent value='reminders' className='px-6 mt-5'>
            <ReminderToggle />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default LeadDetails
