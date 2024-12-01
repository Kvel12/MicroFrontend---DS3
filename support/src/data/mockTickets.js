export const mockTickets = [
    {
      id: "TK-001",
      projectId: 1,
      projectName: "E-commerce Platform",
      title: "Payment Gateway Integration Issue",
      description: "Unable to process payments through the new payment gateway.",
      status: "Open",
      priority: "High",
      createdAt: "2024-11-25",
      updatedAt: "2024-11-26",
      assignedTo: "John Doe",
      client: "TechCorp Inc.",
      comments: [
        {
          id: 1,
          author: "John Doe",
          text: "Investigating the integration logs.",
          timestamp: "2024-11-26 10:30"
        }
      ]
    },
    {
      id: "TK-002",
      projectId: 2,
      projectName: "Mobile Banking App",
      title: "Login Authentication Error",
      description: "Users reporting intermittent login failures.",
      status: "In Progress",
      priority: "Critical",
      createdAt: "2024-11-24",
      updatedAt: "2024-11-26",
      assignedTo: "Alice Johnson",
      client: "FinBank Solutions",
      comments: [
        {
          id: 1,
          author: "Alice Johnson",
          text: "Found potential cause in auth service.",
          timestamp: "2024-11-25 15:20"
        },
        {
          id: 2,
          author: "Bob Wilson",
          text: "Deploying hotfix to staging.",
          timestamp: "2024-11-26 09:45"
        }
      ]
    },
    {
      id: "TK-003",
      projectId: 3,
      projectName: "CRM System",
      title: "Report Generation Bug",
      description: "Monthly reports showing incorrect totals.",
      status: "Resolved",
      priority: "Medium",
      createdAt: "2024-11-23",
      updatedAt: "2024-11-25",
      assignedTo: "Sarah Brown",
      client: "Global Services Ltd",
      comments: [
        {
          id: 1,
          author: "Sarah Brown",
          text: "Fixed calculation error in reporting module.",
          timestamp: "2024-11-24 14:15"
        },
        {
          id: 2,
          author: "Mike Davis",
          text: "Confirmed fix in production.",
          timestamp: "2024-11-25 16:30"
        }
      ]
    }
  ];