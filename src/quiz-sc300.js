const quiz = [
  {
      "question": "What is the primary purpose of Microsoft Entra ID?",
      "options": [
          "To manage Azure resources",
          "To provide identity and access management",
          "To monitor Azure services",
          "To deploy virtual machines"
      ],
      "answerIndex": 1,
      "explanation": "Microsoft Entra ID provides identity and access management for users and applications."
  },
  {
      "question": "How can you configure Conditional Access policies in Microsoft Entra ID?",
      "options": [
          "Using Azure Portal",
          "Using Azure CLI",
          "Using PowerShell",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Conditional Access policies can be configured using the Azure Portal, Azure CLI, or PowerShell."
  },
  {
      "question": "What is the purpose of Multi-Factor Authentication (MFA) in Microsoft Entra ID?",
      "options": [
          "To enhance security by requiring multiple forms of verification",
          "To simplify user login processes",
          "To manage user roles",
          "To monitor application performance"
      ],
      "answerIndex": 0,
      "explanation": "MFA enhances security by requiring users to provide multiple forms of verification."
  },
  {
      "question": "How do you implement self-service password reset (SSPR) in Microsoft Entra ID?",
      "options": [
          "Enable SSPR in the Azure Portal",
          "Configure authentication methods",
          "Set up user notifications",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Implementing SSPR involves enabling it in the Azure Portal, configuring authentication methods, and setting up user notifications."
  },
  {
      "question": "What are the benefits of using Microsoft Entra ID Protection?",
      "options": [
          "Detecting and responding to identity-based threats",
          "Providing detailed audit logs",
          "Managing user roles",
          "Deploying virtual machines"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Protection helps detect and respond to identity-based threats."
  },
  {
      "question": "How can you manage external identities in Microsoft Entra ID?",
      "options": [
          "Using B2B collaboration",
          "Using B2C collaboration",
          "Using Conditional Access policies",
          "Using Multi-Factor Authentication"
      ],
      "answerIndex": 0,
      "explanation": "External identities can be managed using B2B collaboration in Microsoft Entra ID."
  },
  {
      "question": "What is the purpose of Privileged Identity Management (PIM) in Microsoft Entra ID?",
      "options": [
          "To manage and monitor privileged accounts",
          "To deploy applications",
          "To configure network settings",
          "To monitor application performance"
      ],
      "answerIndex": 0,
      "explanation": "PIM helps manage and monitor privileged accounts in Microsoft Entra ID."
  },
  {
      "question": "How do you configure access reviews in Microsoft Entra ID?",
      "options": [
          "Create an access review",
          "Define the review scope",
          "Set up review recurrence",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring access reviews involves creating the review, defining the scope, and setting up recurrence."
  },
  {
      "question": "What are the key features of Microsoft Entra ID Governance?",
      "options": [
          "Access reviews",
          "Entitlement management",
          "Privileged Identity Management",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID Governance includes features like access reviews, entitlement management, and Privileged Identity Management."
  },
  {
      "question": "How can you implement Conditional Access policies for specific applications in Microsoft Entra ID?",
      "options": [
          "Select the application in the Azure Portal",
          "Configure the policy settings",
          "Assign the policy to the application",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Implementing Conditional Access policies for specific applications involves selecting the application, configuring the policy settings, and assigning the policy."
  },
  {
      "question": "What is the role of Microsoft Entra ID Connect in a hybrid identity environment?",
      "options": [
          "To synchronize on-premises directories with Microsoft Entra ID",
          "To deploy virtual machines",
          "To monitor Azure services",
          "To manage user roles"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Connect synchronizes on-premises directories with Microsoft Entra ID in a hybrid identity environment."
  },
  {
      "question": "How do you configure user risk policies in Microsoft Entra ID Protection?",
      "options": [
          "Define risk levels",
          "Set up risk-based Conditional Access policies",
          "Monitor risk events",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring user risk policies involves defining risk levels, setting up risk-based Conditional Access policies, and monitoring risk events."
  },
  {
      "question": "What are the benefits of using Microsoft Entra ID B2C?",
      "options": [
          "Customizable user experiences",
          "Support for multiple identity providers",
          "Scalability",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID B2C offers customizable user experiences, support for multiple identity providers, and scalability."
  },
  {
      "question": "How can you implement Just-In-Time (JIT) access in Microsoft Entra ID?",
      "options": [
          "Using Privileged Identity Management",
          "Using Conditional Access policies",
          "Using Multi-Factor Authentication",
          "Using self-service password reset"
      ],
      "answerIndex": 0,
      "explanation": "JIT access can be implemented using Privileged Identity Management in Microsoft Entra ID."
  },
  {
      "question": "What is the purpose of entitlement management in Microsoft Entra ID?",
      "options": [
          "To manage access to resources",
          "To deploy applications",
          "To monitor Azure services",
          "To configure network settings"
      ],
      "answerIndex": 0,
      "explanation": "Entitlement management helps manage access to resources in Microsoft Entra ID."
  },
  {
      "question": "How do you configure application registrations in Microsoft Entra ID?",
      "options": [
          "Create a new application registration",
          "Configure application settings",
          "Assign permissions",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring application registrations involves creating a new registration, configuring settings, and assigning permissions."
  },
  {
      "question": "What are the key components of Microsoft Entra ID Conditional Access?",
      "options": [
          "Policies",
          "Conditions",
          "Controls",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Key components of Conditional Access include policies, conditions, and controls."
  },
  {
      "question": "How can you monitor identity-related activities in Microsoft Entra ID?",
      "options": [
          "Using audit logs",
          "Using sign-in logs",
          "Using risk reports",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Identity-related activities can be monitored using audit logs, sign-in logs, and risk reports."
  },
  {
      "question": "What is the purpose of Microsoft Entra ID Identity Protection?",
      "options": [
          "To detect and respond to identity-based threats",
          "To deploy virtual machines",
          "To manage user roles",
          "To monitor application performance"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Identity Protection helps detect and respond to identity-based threats."
  },
  {
      "question": "How do you configure Conditional Access policies for guest users in Microsoft Entra ID?",
      "options": [
          "Select the guest user in the Azure Portal",
          "Configure the policy settings",
          "Assign the policy to the guest user",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring Conditional Access policies for guest users involves selecting the guest user, configuring the policy settings, and assigning the policy."
  },
  {
      "question": "What is the purpose of Microsoft Entra ID Connect Health?",
      "options": [
          "To monitor the health of on-premises identity infrastructure",
          "To deploy applications",
          "To manage user roles",
          "To configure network settings"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Connect Health monitors the health of on-premises identity infrastructure."
  },
  {
      "question": "How can you implement passwordless authentication in Microsoft Entra ID?",
      "options": [
          "Using Windows Hello for Business",
          "Using FIDO2 security keys",
          "Using Microsoft Authenticator app",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Passwordless authentication can be implemented using Windows Hello for Business, FIDO2 security keys, and the Microsoft Authenticator app."
  },
  {
      "question": "What are the benefits of using Microsoft Entra ID Identity Governance?",
      "options": [
          "Automating access management",
          "Ensuring compliance",
          "Reducing risk",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID Identity Governance helps automate access management, ensure compliance, and reduce risk."
  },
  {
      "question": "How do you configure risk-based Conditional Access policies in Microsoft Entra ID?",
      "options": [
          "Define risk levels",
          "Set up risk-based policies",
          "Monitor risk events",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring risk-based Conditional Access policies involves defining risk levels, setting up policies, and monitoring risk events."
  },
  {
      "question": "What is the role of Microsoft Entra ID Application Proxy?",
      "options": [
          "To provide secure remote access to on-premises applications",
          "To deploy virtual machines",
          "To manage user roles",
          "To monitor Azure services"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Application Proxy provides secure remote access to on-premises applications."
  },
  {
      "question": "How can you implement Just-In-Time (JIT) access for Azure resources?",
      "options": [
          "Using Privileged Identity Management",
          "Using Conditional Access policies",
          "Using Multi-Factor Authentication",
          "Using self-service password reset"
      ],
      "answerIndex": 0,
      "explanation": "JIT access for Azure resources can be implemented using Privileged Identity Management."
  },
  {
      "question": "What are the key features of Microsoft Entra ID Identity Protection?",
      "options": [
          "Risk detection",
          "Automated response",
          "Risk-based Conditional Access",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID Identity Protection includes risk detection, automated response, and risk-based Conditional Access."
  },
  {
      "question": "How do you configure user provisioning in Microsoft Entra ID?",
      "options": [
          "Set up provisioning connectors",
          "Configure attribute mappings",
          "Enable provisioning",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring user provisioning involves setting up connectors, configuring attribute mappings, and enabling provisioning."
  },
  {
      "question": "What is the purpose of Microsoft Entra ID Access Reviews?",
      "options": [
          "To review and manage user access to resources",
          "To deploy applications",
          "To monitor Azure services",
          "To configure network settings"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Access Reviews help review and manage user access to resources."
  },
  {
      "question": "How can you secure access to Microsoft Entra ID applications?",
      "options": [
          "Using Conditional Access policies",
          "Using Multi-Factor Authentication",
          "Using Identity Protection",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Securing access to Microsoft Entra ID applications can be achieved using Conditional Access policies, Multi-Factor Authentication, and Identity Protection."
  },
  {
      "question": "What are the benefits of using Microsoft Entra ID B2B collaboration?",
      "options": [
          "Securely share resources with external users",
          "Simplify user management",
          "Enhance collaboration",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID B2B collaboration allows you to securely share resources with external users, simplify user management, and enhance collaboration."
  },
  {
      "question": "How do you configure Microsoft Entra ID Identity Protection policies?",
      "options": [
          "Define risk levels",
          "Set up risk-based policies",
          "Monitor risk events",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring Identity Protection policies involves defining risk levels, setting up policies, and monitoring risk events."
  },
  {
      "question": "What is the role of Microsoft Entra ID Privileged Access Management?",
      "options": [
          "To manage and monitor privileged accounts",
          "To deploy applications",
          "To configure network settings",
          "To monitor Azure services"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Privileged Access Management helps manage and monitor privileged accounts."
  },
  {
      "question": "How can you implement access reviews for guest users in Microsoft Entra ID?",
      "options": [
          "Create an access review",
          "Define the review scope",
          "Set up review recurrence",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Implementing access reviews for guest users involves creating the review, defining the scope, and setting up recurrence."
  },
  {
      "question": "What are the key components of Microsoft Entra ID Governance?",
      "options": [
          "Access reviews",
          "Entitlement management",
          "Privileged Identity Management",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Key components of Microsoft Entra ID Governance include access reviews, entitlement management, and Privileged Identity Management."
  },
  {
      "question": "How do you configure Conditional Access policies for specific users in Microsoft Entra ID?",
      "options": [
          "Select the user in the Azure Portal",
          "Configure the policy settings",
          "Assign the policy to the user",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring Conditional Access policies for specific users involves selecting the user, configuring the policy settings, and assigning the policy."
  },
  {
      "question": "What is the purpose of Microsoft Entra ID Identity Governance?",
      "options": [
          "To manage access to resources",
          "To ensure compliance",
          "To reduce risk",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID Identity Governance helps manage access to resources, ensure compliance, and reduce risk."
  },
  {
      "question": "How can you monitor identity-related activities in Microsoft Entra ID?",
      "options": [
          "Using audit logs",
          "Using sign-in logs",
          "Using risk reports",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Identity-related activities can be monitored using audit logs, sign-in logs, and risk reports."
  },
  {
      "question": "What are the benefits of using Microsoft Entra ID B2C?",
      "options": [
          "Customizable user experiences",
          "Support for multiple identity providers",
          "Scalability",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID B2C offers customizable user experiences, support for multiple identity providers, and scalability."
  },
  {
      "question": "How do you configure Conditional Access policies for guest users in Microsoft Entra ID?",
      "options": [
          "Select the guest user in the Azure Portal",
          "Configure the policy settings",
          "Assign the policy to the guest user",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring Conditional Access policies for guest users involves selecting the guest user, configuring the policy settings, and assigning the policy."
  },
  {
      "question": "What is the purpose of Microsoft Entra ID Identity Secure Score?",
      "options": [
          "To measure the security posture of your identity infrastructure",
          "To deploy applications",
          "To manage user roles",
          "To configure network settings"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Identity Secure Score measures the security posture of your identity infrastructure and provides recommendations for improvement."
  },
  {
      "question": "How can you implement access packages in Microsoft Entra ID?",
      "options": [
          "Create an access package",
          "Define the resources and policies",
          "Assign the package to users",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Implementing access packages involves creating the package, defining the resources and policies, and assigning it to users."
  },
  {
      "question": "What are the benefits of using Microsoft Entra ID Identity Protection risk policies?",
      "options": [
          "Automated risk detection",
          "Automated risk response",
          "Improved security posture",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID Identity Protection risk policies provide automated risk detection and response, improving the overall security posture."
  },
  {
      "question": "How do you configure user consent settings in Microsoft Entra ID?",
      "options": [
          "Enable user consent in the Azure Portal",
          "Define consent policies",
          "Monitor consent activities",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring user consent settings involves enabling user consent, defining consent policies, and monitoring consent activities."
  },
  {
      "question": "What is the role of Microsoft Entra ID Identity Governance in managing access lifecycle?",
      "options": [
          "To automate access provisioning and deprovisioning",
          "To deploy applications",
          "To monitor Azure services",
          "To configure network settings"
      ],
      "answerIndex": 0,
      "explanation": "Microsoft Entra ID Identity Governance helps automate access provisioning and deprovisioning, managing the access lifecycle."
  },
  {
      "question": "How can you implement identity protection for privileged accounts in Microsoft Entra ID?",
      "options": [
          "Using Privileged Identity Management",
          "Using Conditional Access policies",
          "Using Multi-Factor Authentication",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Identity protection for privileged accounts can be implemented using Privileged Identity Management, Conditional Access policies, and Multi-Factor Authentication."
  },
  {
      "question": "What are the key components of Microsoft Entra ID Identity Secure Score?",
      "options": [
          "Recommendations",
          "Score metrics",
          "Improvement actions",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Key components of Microsoft Entra ID Identity Secure Score include recommendations, score metrics, and improvement actions."
  },
  {
      "question": "How do you configure application access policies in Microsoft Entra ID?",
      "options": [
          "Define the policy scope",
          "Set up policy conditions",
          "Assign the policy to applications",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Configuring application access policies involves defining the policy scope, setting up conditions, and assigning the policy to applications."
  },
  {
      "question": "What is the purpose of Microsoft Entra ID Identity Governance entitlement management?",
      "options": [
          "To manage access to resources",
          "To ensure compliance",
          "To automate access provisioning",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Microsoft Entra ID Identity Governance entitlement management helps manage access to resources, ensure compliance, and automate access provisioning."
  },
  {
      "question": "How can you monitor and respond to identity-based threats in Microsoft Entra ID?",
      "options": [
          "Using Identity Protection",
          "Using audit logs",
          "Using risk reports",
          "All of the above"
      ],
      "answerIndex": 3,
      "explanation": "Monitoring and responding to identity-based threats can be achieved using Identity Protection, audit logs, and risk reports."
  }
];

export default quiz;
