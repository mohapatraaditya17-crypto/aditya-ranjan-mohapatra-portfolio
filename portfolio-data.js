// Portfolio Website Configuration Data for Aditya Ranjan Mohapatra
const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya Ranjan Mohapatra",
    title: "Security Engineer & Forensic Scientist",
    subtitle: "Securing Endpoints | Threat Hunting | Forensic Investigation",
    bio: "I am a Security Engineer specializing in endpoint security, deployment, and configuration of CrowdStrike Falcon across enterprise environments. Alongside cybersecurity, I hold a strong foundation in Forensic Science, specializing in Forensic Medicine, Toxicology, and Crime Scene Investigation. I leverage this dual-domain expertise to approach security challenges with an analytical, investigative mindset—bridging digital forensics with physical evidence analysis.",
    avatarUrl: "./assets/avatar.png",
    email: "mohapatraaditya17@gmail.com",
    githubUrl: "https://github.com/mohapatraaditya17-crypto", 
    linkedinUrl: "https://in.linkedin.com/in/aditya-ranjan-mohapatra",
    twitterUrl: "#", 
    resumeUrl: "#" 
  },
  
  roles: [
    "Security Engineer",
    "CrowdStrike Falcon Specialist",
    "UGC NET Qualified Forensic Scientist",
    "Threat Hunter & SOC Analyst"
  ],

  skills: [
    // Languages & Scripting
    { name: "Python", category: "languages", icon: "fab fa-python" },
    { name: "PowerShell", category: "languages", icon: "fas fa-terminal" },
    { name: "REST APIs & JSON", category: "languages", icon: "fas fa-network-wired" },
    { name: "FalconPy (SDK)", category: "languages", icon: "fab fa-python" },
    
    // Endpoint Security
    { name: "CrowdStrike Falcon Platform", category: "security", icon: "fas fa-shield-halved" },
    { name: "Endpoint Detection & Response (EDR)", category: "security", icon: "fas fa-desktop" },
    { name: "Microsoft Intune (MDM)", category: "security", icon: "fas fa-laptop-medical" },
    { name: "Microsoft Entra ID (IAM)", category: "security", icon: "fas fa-id-card" },
    { name: "Threat Hunting (CTH)", category: "security", icon: "fas fa-crosshairs" },
    { name: "MITRE ATT&CK Framework", category: "security", icon: "fas fa-chess-board" },
    
    // Forensic Science
    { name: "Digital Forensics", category: "forensics", icon: "fas fa-fingerprint" },
    { name: "Forensic Medicine", category: "forensics", icon: "fas fa-user-doctor" },
    { name: "Forensic Toxicology", category: "forensics", icon: "fas fa-flask" },
    { name: "Crime Scene Investigation", category: "forensics", icon: "fas fa-magnifying-glass" },
    { name: "Evidence Collection (Chain of Custody)", category: "forensics", icon: "fas fa-box" },
    
    // Tools & SIEM
    { name: "Splunk (SIEM)", category: "tools", icon: "fas fa-chart-line" },
    { name: "Azure Sentinel", category: "tools", icon: "fas fa-cloud-shield" },
    { name: "ServiceNow (ITSM)", category: "tools", icon: "fas fa-ticket" },
    { name: "Vulnerability Management", category: "tools", icon: "fas fa-bug" },
    { name: "SOC2 & ISO Compliance", category: "tools", icon: "fas fa-clipboard-check" },
    { name: "CrowdStrike Falcon", category: "tools", icon: "fas fa-shield-halved" }
  ],

  certifications: [
    // CrowdStrike (Falcon Platform & ITSEC)
    { name: "FALCON 100: Falcon Platform Architecture Overview", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-network-wired", url: "https://www.crowdstrike.com" },
    { name: "FALCON 101: Falcon Platform Essentials", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-sliders", url: "https://www.crowdstrike.com" },
    { name: "FALCON 102: Falcon Platform Onboarding Configuration", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-laptop-code", url: "https://www.crowdstrike.com" },
    { name: "FALCON 104: Getting Started with Endpoint Security", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-desktop", url: "https://www.crowdstrike.com" },
    { name: "FALCON 105: Sensor Installation, Configuration and Troubleshooting", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-screwdriver-wrench", url: "https://www.crowdstrike.com" },
    { name: "FALCON 106: Customizing Dashboards in Falcon", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-chart-pie", url: "https://www.crowdstrike.com" },
    { name: "FALCON 107: Falcon Firewall Management Fundamentals", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-shield-halved", url: "https://www.crowdstrike.com" },
    { name: "Falcon Fusion SOAR Fundamentals (SOAR 100)", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-network-wired", url: "https://www.crowdstrike.com" },
    { name: "FALCON 160: Falcon for Mobile", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-mobile-screen", url: "https://www.crowdstrike.com" },
    { name: "ITSEC 121: Vulnerability Management Fundamentals", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-bug", url: "https://www.crowdstrike.com" },
    { name: "ITSEC 122: Asset Management Fundamentals", authority: "CrowdStrike University", period: "Jul 2026", category: "crowdstrike", icon: "fa-solid fa-box-archive", url: "https://www.crowdstrike.com" },
    
    // Cybersecurity & IT
    { name: "ISC2 Candidate", authority: "ISC2", period: "Mar 2026", category: "cyber", icon: "fa-solid fa-user-shield", url: "https://www.isc2.org" },
    { name: "Fortinet Certified Fundamentals (FCF)", authority: "Fortinet", period: "Jul 2026", category: "cyber", icon: "fa-solid fa-shield-halved", url: "https://www.fortinet.com" },
    { name: "Introduction to the Threat Landscape 3.0", authority: "Fortinet", period: "Jul 2026", category: "cyber", icon: "fa-solid fa-network-wired", url: "https://www.fortinet.com" },
    { name: "Getting Started in Cybersecurity 3.0", authority: "Fortinet", period: "Jul 2026", category: "cyber", icon: "fa-solid fa-circle-nodes", url: "https://www.fortinet.com" },
    { name: "Introduction to Cybersecurity", authority: "Cisco Networking Academy", period: "Jul 2026", category: "cyber", icon: "fa-solid fa-circle-nodes", url: "https://www.netacad.com" },
    { name: "AI in Cybersecurity: Vulnerability, Intelligence, Security, and Ethics", authority: "Alison", period: "Jul 2026", category: "cyber", icon: "fa-solid fa-robot", url: "https://alison.com" },
    { name: "Internship Common Aptitude Test", authority: "Internship Studio", period: "Jul 2026", category: "cyber", icon: "fa-solid fa-clipboard-question", url: "#" },

    // Forensic Science & Safety
    { name: "Diploma in Digital Forensic Investigation", authority: "Alison", period: "Jul 2026", category: "forensics", icon: "fa-solid fa-fingerprint", url: "https://alison.com" },
    { name: "Four-Legged Detectives: The Mastery of Cadaver Dogs", authority: "C.A.S.E. 23 OFFICIAL", period: "Jul 2026", category: "forensics", icon: "fa-solid fa-dog", url: "#" },
    { name: "Diploma in Fire Safety", authority: "Alison", period: "Jul 2026", category: "forensics", icon: "fa-solid fa-fire-extinguisher", url: "https://alison.com" },
    { name: "EHS Guidelines - Environment, Health and Safety", authority: "Alison", period: "Jul 2026", category: "forensics", icon: "fa-solid fa-helmet-safety", url: "https://alison.com" },
    { name: "Food Safety and Hygiene in the Catering Industry", authority: "Alison", period: "Jul 2026", category: "forensics", icon: "fa-solid fa-utensils", url: "https://alison.com" }
  ],

  projects: [
    {
      id: 1,
      title: "AI SOC Copilot for CrowdStrike",
      description: "An innovative project integrating LLMs with the CrowdStrike Falcon Platform via FalconPy to automate security workflows. Features natural language querying of endpoints, automated event triage, AI-assisted IOC analysis, and SOC report generation.",
      image: "./assets/project-lumina.png", 
      tags: ["Python", "LLMs / RAG", "CrowdStrike API", "FalconPy"],
      category: "ai",
      github: "https://github.com/mohapatraaditya17-crypto",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    },
    {
      id: 2,
      title: "CrowdStrike API Operations Suite",
      description: "Engineered a programmatic cybersecurity operations tool using the CrowdStrike API and Python falconpy SDK. Replaces manual audits by tracking prevention policy drift, Reduced Functionality Mode detection, and RBAC governance logging.",
      image: "./assets/project-devflow.png", 
      tags: ["Python", "FalconPy", "Pandas", "OAuth2 API"],
      category: "security",
      github: "https://github.com/mohapatraaditya17-crypto",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    },
    {
      id: 3,
      title: "Device Control & Prevention Policy Testing",
      description: "Designed and executed controlled testing and validation of CrowdStrike Falcon Device Control and Prevention Policies. Evaluated USB peripheral blocking, malware containment, and ransomware prevention across Windows endpoints.",
      image: "./assets/project-gitguard.png", 
      tags: ["EDR Testing", "Device Control", "Prevention Policies", "Win Security"],
      category: "security",
      github: "https://github.com/mohapatraaditya17-crypto",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    },
    {
      id: 4,
      title: "Forensic Assessment of Drinking Water Quality",
      description: "A multidisciplinary environmental forensic investigation evaluating heavy metal (Chromium, Nickel) contamination and physicochemical profiles in drinking water at Bilaspur Station using Atomic Absorption Spectroscopy (AAS) and spectrophotometry.",
      image: "./assets/project-zenith.png", 
      tags: ["Forensics", "Atomic Spectroscopy", "Toxicology", "APHA Standards"],
      category: "forensics",
      github: "https://github.com/mohapatraaditya17-crypto",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    },
    {
      id: 5,
      title: "Automatic Malware Detection with LSTM",
      description: "A research project analyzing deep learning (LSTM) and machine learning models for detecting polymorphic malware. Explores dataset limitations, adversarial evasion, and Explainable AI (XAI) models in cyber defense.",
      image: "./assets/project-lstm.png", 
      tags: ["Machine Learning", "Deep Learning", "LSTM Networks", "Malware Analysis"],
      category: "ai",
      github: "https://github.com/mohapatraaditya17-crypto",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    }
  ],

  timeline: [
    {
      period: "May 2026 - Present",
      title: "Security Engineer L1",
      company: "ITPeopleNetwork (ITPN Consulting)",
      description: "Specializing in enterprise endpoint security engineering. Primary responsibilities include deploying, configuring, and managing CrowdStrike Falcon sensors across corporate networks. Actively configuring security prevention policies, onboarding new assets, executing migrations to the Falcon Console and Microsoft Intune, and designing robust detection engineering rules to protect infrastructure."
    },
    {
      period: "Jan 2026 - Present",
      title: "Content Developer & Founding Board Member",
      company: "Sure Clue Scientific Solutions",
      description: "Preparing academic content, study materials, and technical presentations in Forensic Science. Researching toxicological profiles, questioned documents, and guiding forensic science educational courses."
    },
    {
      period: "Feb 2026 - Apr 2026",
      title: "Trainee Security Engineer",
      company: "ITPeopleNetwork",
      description: "Underwent rigorous hands-on training in security operations, endpoint protection, and platform essentials. Maintained sensor configurations, debugged installation issues, configured policies, and validated security rules."
    },
    {
      period: "Jan 2026 - Feb 2026",
      title: "Certified SOC Analyst Intern",
      company: "CFSS Cyber & Forensics Security Solutions",
      description: "Trained in security operations center workflows. Analyzed event logs, aligned alerts with the MITRE ATT&CK framework, correlated digital telemetry, and studied active incident mitigation strategies."
    },
    {
      period: "Jun 2025 - Jun 2025",
      title: "Forensic Intern",
      company: "Regional Forensic Science Laboratory Bilaspur",
      description: "Supported the scientific officer on-site within the Toxicology and Biology divisions. Handled forensic documentation, collected evidence, maintained strict chain of custody, and utilized laboratory methodologies to analyze toxicological samples in crime investigations."
    },
    {
      period: "Jun 2024 - Mar 2025",
      title: "SOC Trainee & Intern",
      company: "Cache Digital Solutions Pvt. Ltd.",
      description: "Trained in SIEM management, log correlation, real-time alert triage, and incident response workflows. Monitored network traffic events, created dashboards, and documented threat vectors."
    },
    {
      period: "Aug 2023 - Jan 2024",
      title: "Lecturer (Teaching Faculty)",
      company: "Indtech Educational and Technical Institute",
      description: "Educated students on occupational safety regulations, fire protection regulations, and risk assessment (NFPA, OSHA, ISO 45001, and ISO 14001 compliance). Developed case studies on industrial accident root-cause analysis and led practical workshops on hazardous material handling."
    },
    {
      period: "2024 - 2026",
      title: "M.Sc. in Forensic Science",
      company: "Guru Ghasidas Vishwavidyalaya, Bilaspur",
      description: "Postgraduate degree focusing on questioned documents, forensic biology/serology, and chemical toxicology. Conducted heavy metals atomic spectroscopy research. Qualified UGC NET (June 2025) in Forensic Sciences."
    },
    {
      period: "2020 - 2023",
      title: "B.Sc. in Forensic Science",
      company: "Centurion University of Technology and Management",
      description: "Undergraduate degree. Active in crime scene investigation simulations, forensics laboratory techniques, and sports."
    }
  ]
};

// Export for ES modules or attach to global object
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
