const nodes = [
  {
    id: '1',
    firstName: 'Krishna',
    lastName: 'Doe',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    lastContacted: '05/01/2024',
    assignedTo: 'Alice Smith',
    source: 'Website',
    dateCreated: '01/01/2024',
    status: 'Active',
    followUps: [
      {
        taskName: 'Follow-up Call',
        details: 'Call to discuss the project details',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-25T10:00:00',
        },
      },
    ],
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '234-567-8901',
    email: 'jane.smith@example.com',
    lastContacted: '05/03/2024',
    assignedTo: 'Bob Johnson',
    source: 'Referral',
    dateCreated: '01/03/2024',
    status: 'Inactive',
    followUps: [
      {
        taskName: 'Send Proposal',
        details: 'Email the proposal for the new project',
        status: 'Completed',
        reminder: {
          dateTime: '2024-07-20T15:00:00',
        },
      },
    ],
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Brown',
    phoneNumber: '345-678-9012',
    email: 'michael.brown@example.com',
    lastContacted: '05/05/2024',
    assignedTo: 'Carol White',
    source: 'Advertisement',
    dateCreated: '01/05/2024',
    status: 'Pending',
    followUps: [
      {
        taskName: 'Meeting',
        details: 'Schedule a meeting to discuss project progress',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-28T14:00:00',
        },
      },
    ],
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    phoneNumber: '456-789-0123',
    email: 'emily.davis@example.com',
    lastContacted: '05/07/2024',
    assignedTo: 'David Green',
    source: 'Event',
    dateCreated: '01/07/2024',
    status: 'Active',
    followUps: [
      {
        taskName: 'Review Contract',
        details: 'Review the contract and provide feedback',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-30T11:00:00',
        },
      },
    ],
  },
  {
    id: '5',
    firstName: 'Chris',
    lastName: 'Wilson',
    phoneNumber: '567-890-1234',
    email: 'chris.wilson@example.com',
    lastContacted: '05/09/2024',
    assignedTo: 'Eva Black',
    source: 'Social Media',
    dateCreated: '01/09/2024',
    status: 'Inactive',
    followUps: [
      {
        taskName: 'Send Invoice',
        details: 'Email the invoice for the completed work',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-25T09:00:00',
        },
      },
    ],
  },
  {
    id: '6',
    firstName: 'Jessica',
    lastName: 'Taylor',
    phoneNumber: '678-901-2345',
    email: 'jessica.taylor@example.com',
    lastContacted: '05/11/2024',
    assignedTo: 'Frank Blue',
    source: 'Cold Call',
    dateCreated: '01/11/2024',
    status: 'Pending',
    followUps: [
      {
        taskName: 'Follow-up Email',
        details: 'Send follow-up email about the project status',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-26T13:00:00',
        },
      },
    ],
  },
  {
    id: '7',
    firstName: 'Daniel',
    lastName: 'Anderson',
    phoneNumber: '789-012-3456',
    email: 'daniel.anderson@example.com',
    lastContacted: '05/13/2024',
    assignedTo: 'Grace Red',
    source: 'Website',
    dateCreated: '01/13/2024',
    status: 'Active',
    followUps: [
      {
        taskName: 'Prepare Report',
        details: 'Prepare the project report for the meeting',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-29T10:00:00',
        },
      },
    ],
  },
  {
    id: '8',
    firstName: 'Karen',
    lastName: 'Martinez',
    phoneNumber: '890-123-4567',
    email: 'karen.martinez@example.com',
    lastContacted: '05/15/2024',
    assignedTo: 'Henry Yellow',
    source: 'Referral',
    dateCreated: '01/15/2024',
    status: 'Inactive',
    followUps: [
      {
        taskName: 'Client Feedback',
        details: 'Request feedback from the client',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-27T16:00:00',
        },
      },
    ],
  },
  {
    id: '9',
    firstName: 'Paul',
    lastName: 'Harris',
    phoneNumber: '901-234-5678',
    email: 'paul.harris@example.com',
    lastContacted: '05/17/2024',
    assignedTo: 'Ivy Pink',
    source: 'Event',
    dateCreated: '01/17/2024',
    status: 'Pending',
    followUps: [
      {
        taskName: 'Project Update',
        details: 'Update the project status in the system',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-28T12:00:00',
        },
      },
    ],
  },
  {
    id: '10',
    firstName: 'Laura',
    lastName: 'Clark',
    phoneNumber: '012-345-6789',
    email: 'laura.clark@example.com',
    lastContacted: '05/19/2024',
    assignedTo: 'Jack Purple',
    source: 'Social Media',
    dateCreated: '01/19/2024',
    status: 'Active',
    followUps: [
      {
        taskName: 'Budget Review',
        details: 'Review the project budget with the team',
        status: 'Pending',
        reminder: {
          dateTime: '2024-07-29T15:00:00',
        },
      },
    ],
  },
]

const updatedNodes = nodes.map(node => ({
  id: node.id,
  firstName: node.firstName,
  lastName: node.lastName,
  phoneNumber: node.phoneNumber,
  email: node.email,
  lastContacted: node.lastContacted,
  assignedTo: node.assignedTo,
  city: node.city,
  source: node.source,
  dateCreated: node.dateCreated,
  status: node.status,
  followUps: node.followUps,
}))

export default updatedNodes
