const quiz = [
  {
    "question": "You need to deploy a virtual machine (VM) to Azure. Which of the following options should you use to ensure that the VM is highly available?",
    "options": [
      "Deploy the VM to a single availability zone.",
      "Deploy the VM to a single resource group.",
      "Deploy the VM to a scale set.",
      "Deploy the VM to multiple regions."
    ],
    "answerIndex": 2,
    "explanation": "Deploying a VM to a scale set ensures high availability by automatically distributing the VMs across multiple fault domains and update domains within a single region."
  },
  {
    "question": "Which Azure service provides a platform for creating workflows that integrate apps, data, services, and systems?",
    "options": [
      "Azure Logic Apps",
      "Azure Functions",
      "Azure App Service",
      "Azure DevOps"
    ],
    "answerIndex": 0,
    "explanation": "Azure Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks, business processes, and workflows."
  },
  {
    "question": "What is the primary purpose of Azure Active Directory (Azure AD)?",
    "options": [
      "To manage virtual machines",
      "To provide identity and access management",
      "To monitor application performance",
      "To store data"
    ],
    "answerIndex": 1,
    "explanation": "Azure Active Directory (Azure AD) is a cloud-based identity and access management service."
  },
  {
    "question": "Which Azure service is used to manage and scale containerized applications?",
    "options": [
      "Azure Kubernetes Service (AKS)",
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Functions"
    ],
    "answerIndex": 0,
    "explanation": "Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure."
  },
  {
    "question": "What is the benefit of using Azure Reserved Instances?",
    "options": [
      "Lower costs compared to pay-as-you-go pricing",
      "Automatic scaling of resources",
      "Enhanced security features",
      "Improved application performance"
    ],
    "answerIndex": 0,
    "explanation": "Azure Reserved Instances offer significant cost savings compared to pay-as-you-go pricing."
  },
  {
    "question": "Which Azure service provides a fully managed relational database with built-in high availability and scalability?",
    "options": [
      "Azure SQL Database",
      "Azure Blob Storage",
      "Azure Cosmos DB",
      "Azure Data Lake"
    ],
    "answerIndex": 0,
    "explanation": "Azure SQL Database is a fully managed relational database service with built-in high availability and scalability."
  },
  {
    "question": "What is the purpose of Azure DevOps?",
    "options": [
      "To provide a set of development tools for planning, developing, delivering, and maintaining software",
      "To manage virtual machines",
      "To monitor application performance",
      "To store data"
    ],
    "answerIndex": 0,
    "explanation": "Azure DevOps provides developer services for support teams to plan work, collaborate on code development, and build and deploy applications."
  },
  {
    "question": "Which Azure service should you use to build, deploy, and scale web apps?",
    "options": [
      "Azure App Service",
      "Azure Functions",
      "Azure Logic Apps",
      "Azure DevOps"
    ],
    "answerIndex": 0,
    "explanation": "Azure App Service is a fully managed platform for building, deploying, and scaling web apps."
  },
  {
    "question": "What is the primary benefit of using Azure Virtual Network?",
    "options": [
      "To create a private network in the cloud",
      "To manage virtual machines",
      "To store data",
      "To monitor application performance"
    ],
    "answerIndex": 0,
    "explanation": "Azure Virtual Network enables you to create a private network in the cloud."
  },
  {
    "question": "Which Azure service provides a scalable and secure way to manage secrets, keys, and certificates?",
    "options": [
      "Azure Key Vault",
      "Azure Security Center",
      "Azure Active Directory",
      "Azure Policy"
    ],
    "answerIndex": 0,
    "explanation": "Azure Key Vault helps safeguard cryptographic keys and secrets used by cloud applications and services."
  },
  {
    "question": "You need to deploy a virtual machine (VM) to Azure. Which of the following options should you use to ensure that the VM is highly available?",
    "options": [
      "Deploy the VM to a single availability zone.",
      "Deploy the VM to a single resource group.",
      "Deploy the VM to a scale set.",
      "Deploy the VM to multiple regions."
    ],
    "answerIndex": 2,
    "explanation": "Deploying a VM to a scale set ensures high availability by automatically distributing the VMs across multiple fault domains and update domains within a single region."
  },
  {
    "question": "Which Azure service should you use to manage and control access to your resources?",
    "options": [
      "Azure Policy",
      "Azure Active Directory",
      "Azure Monitor",
      "Azure Security Center"
    ],
    "answerIndex": 1,
    "explanation": "Azure Active Directory (Azure AD) is a cloud-based identity and access management service that helps your employees sign in and access resources."
  },
  {
    "question": "What is the primary benefit of using Azure SQL Database?",
    "options": [
      "It provides a fully managed relational database service.",
      "It allows you to run SQL Server on virtual machines.",
      "It offers a NoSQL database solution.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure SQL Database is a fully managed relational database service that provides built-in high availability, scalability, and security."
  },
  {
    "question": "Which Azure service can you use to build, deploy, and manage containerized applications?",
    "options": [
      "Azure Functions",
      "Azure Kubernetes Service",
      "Azure App Service",
      "Azure Logic Apps"
    ],
    "answerIndex": 1,
    "explanation": "Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure, handling critical tasks like health monitoring and maintenance."
  },
  {
    "question": "What is the purpose of Azure Resource Manager?",
    "options": [
      "To manage Azure subscriptions and billing.",
      "To deploy and manage resources in Azure.",
      "To monitor and diagnose application issues.",
      "To provide identity and access management."
    ],
    "answerIndex": 1,
    "explanation": "Azure Resource Manager provides a management layer that enables you to create, update, and delete resources in your Azure account."
  },
  {
    "question": "Which Azure service should you use to create a virtual network?",
    "options": [
      "Azure Virtual Network",
      "Azure VPN Gateway",
      "Azure ExpressRoute",
      "Azure Traffic Manager"
    ],
    "answerIndex": 0,
    "explanation": "Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure."
  },
  {
    "question": "What is the main advantage of using Azure Blob Storage?",
    "options": [
      "It provides a scalable and cost-effective way to store unstructured data.",
      "It allows you to run virtual machines.",
      "It offers a managed relational database service.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure Blob Storage is designed to store large amounts of unstructured data, such as text or binary data."
  },
  {
    "question": "Which Azure service should you use to automate the deployment of resources?",
    "options": [
      "Azure Automation",
      "Azure DevOps",
      "Azure Resource Manager",
      "Azure Blueprints"
    ],
    "answerIndex": 0,
    "explanation": "Azure Automation provides a way to automate the creation, deployment, monitoring, and maintenance of resources in your Azure environment."
  },
  {
    "question": "What is the purpose of Azure Traffic Manager?",
    "options": [
      "To manage network traffic across multiple regions.",
      "To provide a secure connection between on-premises networks and Azure.",
      "To monitor and diagnose application issues.",
      "To manage identity and access."
    ],
    "answerIndex": 0,
    "explanation": "Azure Traffic Manager uses DNS to direct client requests to the most appropriate endpoint based on a traffic-routing method."
  },
  {
    "question": "Which Azure service should you use to monitor the performance and health of your applications?",
    "options": [
      "Azure Monitor",
      "Azure Security Center",
      "Azure Policy",
      "Azure Active Directory"
    ],
    "answerIndex": 0,
    "explanation": "Azure Monitor helps you maximize the availability and performance of your applications by delivering a comprehensive solution for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments."
  },
  {
    "question": "Which Azure service should you use to create and manage a set of identical, load-balanced VMs?",
    "options": [
      "Azure Virtual Machine Scale Sets",
      "Azure Load Balancer",
      "Azure Traffic Manager",
      "Azure App Service"
    ],
    "answerIndex": 0,
    "explanation": "Azure Virtual Machine Scale Sets allow you to create and manage a group of load-balanced VMs that automatically increase or decrease in number based on demand."
  },
  {
    "question": "What is the primary purpose of Azure Key Vault?",
    "options": [
      "To store and manage secrets, keys, and certificates.",
      "To monitor and diagnose application issues.",
      "To provide a scalable and cost-effective way to store unstructured data.",
      "To manage network traffic across multiple regions."
    ],
    "answerIndex": 0,
    "explanation": "Azure Key Vault helps safeguard cryptographic keys and secrets used by cloud applications and services."
  },
  {
    "question": "Which Azure service should you use to implement a serverless architecture?",
    "options": [
      "Azure Functions",
      "Azure Virtual Machines",
      "Azure Kubernetes Service",
      "Azure App Service"
    ],
    "answerIndex": 0,
    "explanation": "Azure Functions is a serverless compute service that enables you to run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "question": "What is the main benefit of using Azure DevOps?",
    "options": [
      "It provides a set of development tools for planning, developing, delivering, and maintaining software.",
      "It offers a fully managed relational database service.",
      "It allows you to run SQL Server on virtual machines.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure DevOps provides developer services for support teams to plan work, collaborate on code development, and build and deploy applications."
  },
  {
    "question": "Which Azure service should you use to create a hybrid cloud environment?",
    "options": [
      "Azure Arc",
      "Azure Virtual Network",
      "Azure ExpressRoute",
      "Azure Traffic Manager"
    ],
    "answerIndex": 0,
    "explanation": "Azure Arc enables you to manage and govern on-premises, multi-cloud, and edge environments from a single control plane."
  },
  {
    "question": "What is the purpose of Azure Policy?",
    "options": [
      "To enforce organizational standards and assess compliance at scale.",
      "To manage identity and access.",
      "To monitor and diagnose application issues.",
      "To provide a scalable and cost-effective way to store unstructured data."
    ],
    "answerIndex": 0,
    "explanation": "Azure Policy helps you enforce organizational standards and assess compliance at scale by creating, assigning, and managing policies."
  },
  {
    "question": "Which Azure service should you use to connect your on-premises network to an Azure virtual network?",
    "options": [
      "Azure VPN Gateway",
      "Azure Virtual Network",
      "Azure ExpressRoute",
      "Azure Traffic Manager"
    ],
    "answerIndex": 0,
    "explanation": "Azure VPN Gateway provides a secure connection between your on-premises network and your Azure virtual network."
  },
  {
    "question": "What is the main advantage of using Azure Logic Apps?",
    "options": [
      "It allows you to automate workflows and integrate apps, data, and services.",
      "It provides a fully managed relational database service.",
      "It offers a NoSQL database solution.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure Logic Apps helps you automate workflows and integrate apps, data, and services across organizations."
  },
  {
    "question": "Which Azure service should you use to manage and deploy infrastructure as code?",
    "options": [
      "Azure Resource Manager",
      "Azure DevOps",
      "Azure Automation",
      "Azure Blueprints"
    ],
    "answerIndex": 3,
    "explanation": "Azure Blueprints enables you to define a repeatable set of Azure resources that implements and adheres to an organization's standards, patterns, and requirements."
  },
  {
    "question": "What is the primary benefit of using Azure Cosmos DB?",
    "options": [
      "It provides a globally distributed, multi-model database service.",
      "It allows you to run SQL Server on virtual machines.",
      "It offers a managed relational database service.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure Cosmos DB is a globally distributed, multi-model database service designed to provide high availability and low latency."
  },
  {
    "question": "Which Azure service should you use to create a data warehouse solution?",
    "options": [
      "Azure SQL Database",
      "Azure Synapse Analytics",
      "Azure Cosmos DB",
      "Azure Data Lake Storage"
    ],
    "answerIndex": 1,
    "explanation": "Azure Synapse Analytics is an analytics service that brings together big data and data warehousing."
  },
  {
    "question": "What is the primary benefit of using Azure Multi-Factor Authentication (MFA)?",
    "options": [
      "It provides a scalable and cost-effective way to store unstructured data.",
      "It enhances security by requiring two or more verification methods.",
      "It allows you to run virtual machines.",
      "It offers a managed relational database service."
    ],
    "answerIndex": 1,
    "explanation": "Azure Multi-Factor Authentication (MFA) enhances security by requiring two or more verification methods."
  },
  {
    "question": "Which Azure service should you use to manage and analyze large datasets in real-time?",
    "options": [
      "Azure Stream Analytics",
      "Azure Data Factory",
      "Azure Synapse Analytics",
      "Azure Machine Learning"
    ],
    "answerIndex": 0,
    "explanation": "Azure Stream Analytics is a real-time analytics service designed to analyze and process high volumes of fast streaming data from multiple sources simultaneously."
  },
  {
    "question": "What is the purpose of Azure Advisor?",
    "options": [
      "To provide personalized best practices recommendations.",
      "To manage identity and access.",
      "To monitor and diagnose application issues.",
      "To provide a scalable and cost-effective way to store unstructured data."
    ],
    "answerIndex": 0,
    "explanation": "Azure Advisor provides personalized best practices recommendations to help you optimize your Azure deployments."
  },
  {
    "question": "Which Azure service should you use to deploy and manage virtual machines?",
    "options": [
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Functions",
      "Azure Kubernetes Service"
    ],
    "answerIndex": 0,
    "explanation": "Azure Virtual Machines (VMs) allow you to deploy and manage virtual machines in the cloud."
  },
  {
    "question": "What is the main advantage of using Azure Cognitive Services?",
    "options": [
      "It provides a set of APIs for adding AI capabilities to applications.",
      "It offers a managed relational database service.",
      "It allows you to run SQL Server on virtual machines.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure Cognitive Services provides a set of APIs for adding AI capabilities to applications, such as vision, speech, language, and decision-making."
  },
  {
    "question": "Which Azure service should you use to create and manage a distributed, globally available database?",
    "options": [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Synapse Analytics",
      "Azure Data Lake Storage"
    ],
    "answerIndex": 1,
    "explanation": "Azure Cosmos DB is a globally distributed, multi-model database service designed to provide high availability and low latency."
  },
  {
    "question": "What is the primary benefit of using Azure Load Balancer?",
    "options": [
      "It distributes incoming network traffic across multiple servers.",
      "It provides a scalable and cost-effective way to store unstructured data.",
      "It offers a managed relational database service.",
      "It allows you to run virtual machines."
    ],
    "answerIndex": 0,
    "explanation": "Azure Load Balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed."
  },
  {
    "question": "Which Azure service should you use to create a secure, dedicated network connection between your on-premises network and Azure?",
    "options": [
      "Azure VPN Gateway",
      "Azure Virtual Network",
      "Azure ExpressRoute",
      "Azure Traffic Manager"
    ],
    "answerIndex": 2,
    "explanation": "Azure ExpressRoute provides a secure, dedicated network connection between your on-premises network and Azure."
  },
  {
    "question": "What is the purpose of Azure Security Center?",
    "options": [
      "To provide unified security management and advanced threat protection.",
      "To manage identity and access.",
      "To monitor and diagnose application issues.",
      "To provide a scalable and cost-effective way to store unstructured data."
    ],
    "answerIndex": 0,
    "explanation": "Azure Security Center provides unified security management and advanced threat protection across hybrid cloud workloads."
  },
  {
    "question": "Which Azure service should you use to create and manage a set of identical, load-balanced VMs?",
    "options": [
      "Azure Virtual Machine Scale Sets",
      "Azure Load Balancer",
      "Azure Traffic Manager",
      "Azure App Service"
    ],
    "answerIndex": 0,
    "explanation": "Azure Virtual Machine Scale Sets allow you to create and manage a group of load-balanced VMs that automatically increase or decrease in number based on demand."
  },
  {
    "question": "What is the primary purpose of Azure Key Vault?",
    "options": [
      "To store and manage secrets, keys, and certificates.",
      "To monitor and diagnose application issues.",
      "To provide a scalable and cost-effective way to store unstructured data.",
      "To manage network traffic across multiple regions."
    ],
    "answerIndex": 0,
    "explanation": "Azure Key Vault helps safeguard cryptographic keys and secrets used by cloud applications and services."
  },
  {
    "question": "Which Azure service should you use to implement a serverless architecture?",
    "options": [
      "Azure Functions",
      "Azure Virtual Machines",
      "Azure Kubernetes Service",
      "Azure App Service"
    ],
    "answerIndex": 0,
    "explanation": "Azure Functions is a serverless compute service that enables you to run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "question": "What is the main benefit of using Azure DevOps?",
    "options": [
      "It provides a set of development tools for planning, developing, delivering, and maintaining software.",
      "It offers a fully managed relational database service.",
      "It allows you to run SQL Server on virtual machines.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure DevOps provides developer services for support teams to plan work, collaborate on code development, and build and deploy applications."
  },
  {
    "question": "Which Azure service should you use to create a hybrid cloud environment?",
    "options": [
      "Azure Arc",
      "Azure Virtual Network",
      "Azure ExpressRoute",
      "Azure Traffic Manager"
    ],
    "answerIndex": 0,
    "explanation": "Azure Arc enables you to manage and govern on-premises, multi-cloud, and edge environments from a single control plane."
  },
  {
    "question": "What is the purpose of Azure Policy?",
    "options": [
      "To enforce organizational standards and assess compliance at scale.",
      "To manage identity and access.",
      "To monitor and diagnose application issues.",
      "To provide a scalable and cost-effective way to store unstructured data."
    ],
    "answerIndex": 0,
    "explanation": "Azure Policy helps you enforce organizational standards and assess compliance at scale by creating, assigning, and managing policies."
  },
  {
    "question": "Which Azure service should you use to connect your on-premises network to an Azure virtual network?",
    "options": [
      "Azure VPN Gateway",
      "Azure Virtual Network",
      "Azure ExpressRoute",
      "Azure Traffic Manager"
    ],
    "answerIndex": 0,
    "explanation": "Azure VPN Gateway provides a secure connection between your on-premises network and your Azure virtual network."
  },
  {
    "question": "What is the main advantage of using Azure Logic Apps?",
    "options": [
      "It allows you to automate workflows and integrate apps, data, and services.",
      "It provides a fully managed relational database service.",
      "It offers a NoSQL database solution.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure Logic Apps helps you automate workflows and integrate apps, data, and services across organizations."
  },
  {
    "question": "Which Azure service should you use to manage and deploy infrastructure as code?",
    "options": [
      "Azure Resource Manager",
      "Azure DevOps",
      "Azure Automation",
      "Azure Blueprints"
    ],
    "answerIndex": 3,
    "explanation": "Azure Blueprints enables you to define a repeatable set of Azure resources that implements and adheres to an organization's standards, patterns, and requirements."
  },
  {
    "question": "What is the primary benefit of using Azure Cosmos DB?",
    "options": [
      "It provides a globally distributed, multi-model database service.",
      "It allows you to run SQL Server on virtual machines.",
      "It offers a managed relational database service.",
      "It provides a platform for big data analytics."
    ],
    "answerIndex": 0,
    "explanation": "Azure Cosmos DB is a globally distributed, multi-model database service designed to provide high availability and low latency."
  }
]



export default quiz;