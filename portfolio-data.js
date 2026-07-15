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
  ],  certifications: [
    // CrowdStrike (Falcon Platform & ITSEC)
    {
      name: "FALCON 100: Falcon Platform Architecture Overview",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648037",
      category: "crowdstrike",
      icon: "fa-solid fa-network-wired",
      url: "https://university.crowdstrike.com/learn/courses/489/falcon-100-falcon-platform-architecture-overview",
      media: "./assets/certs/489_3_629099_1783596344_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "FALCON 101: Falcon Platform Essentials",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648053",
      category: "crowdstrike",
      icon: "fa-solid fa-sliders",
      url: "https://university.crowdstrike.com/learn/courses/468/falcon-101-falcon-platform-technical-fundamentals",
      media: "./assets/certs/468_3_629099_1783597843_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "FALCON 102: Falcon Platform Onboarding Configuration",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648136",
      category: "crowdstrike",
      icon: "fa-solid fa-laptop-code",
      url: "https://university.crowdstrike.com/learn/courses/472/falcon-102-falcon-platform-onboarding-configuration",
      media: "./assets/certs/472_3_629099_1783603391_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "FALCON 104: Getting Started with Endpoint Security",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648160",
      category: "crowdstrike",
      icon: "fa-solid fa-desktop",
      url: "https://university.crowdstrike.com/learn/courses/469/falcon-104-getting-started-with-the-endpoint-security-module",
      media: "./assets/certs/469_3_629099_1783604595_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "FALCON 105: Sensor Installation, Configuration and Troubleshooting",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648202",
      category: "crowdstrike",
      icon: "fa-solid fa-screwdriver-wrench",
      url: "https://university.crowdstrike.com/learn/courses/469/falcon-104-getting-started-with-the-endpoint-security-module",
      media: "./assets/certs/469_3_629099_1783604595_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "FALCON 106: Customizing Dashboards in Falcon",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648253",
      category: "crowdstrike",
      icon: "fa-solid fa-chart-pie",
      url: "https://university.crowdstrike.com/learn/courses/541/falcon-106-customizable-dashboards",
      media: "./assets/certs/541_3_629099_1783608637_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "Falcon 107: Falcon Firewall management Fundamentals",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648266",
      category: "crowdstrike",
      icon: "fa-solid fa-shield-halved",
      url: "https://university.crowdstrike.com/learn/courses/533/falcon-107-falcon-firewall-management-fundamentals",
      media: "./assets/certs/533_3_629099_1783609224_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "FALCON 160: Falcon for Mobile",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648289",
      category: "crowdstrike",
      icon: "fa-solid fa-mobile-screen",
      url: "https://university.crowdstrike.com/learn/courses/531/falcon-160-falcon-for-mobile",
      media: "./assets/certs/531_3_629099_1783610766_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "ITSEC 121: Vulnerability Management Fundamentals",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648351",
      category: "crowdstrike",
      icon: "fa-solid fa-bug",
      url: "https://university.crowdstrike.com/learn/courses/456/itsec-121-vulnerability-management-fundamentals",
      media: "./assets/certs/456_3_629099_1783613730_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "ITSEC 122: Asset Management Fundamentals",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C648358",
      category: "crowdstrike",
      icon: "fa-solid fa-box-archive",
      url: "https://university.crowdstrike.com/learn/courses/457/itsec-122-asset-management-fundamentals",
      media: "./assets/certs/457_3_629099_1783614324_CrowdStrike University Course Certificate.pdf"
    },
    {
      name: "FALCON 141: Charlotte AI Fundamentals",
      authority: "CrowdStrike University",
      period: "Jul 2026",
      license: "C654160",
      category: "crowdstrike",
      icon: "fa-solid fa-robot",
      url: "https://university.crowdstrike.com/lms/index.php?r=myActivities/downloadCertificate&course_id=1513&id_user=629099",
      media: "./assets/certs/1513_3_629099_1784114165_CrowdStrike University Course Certificate.pdf"
    },
    
    // Cybersecurity & IT
    {
      name: "ISC2 Candidate",
      authority: "ISC2",
      period: "Mar 2026",
      validUpto: "Mar 2027",
      license: "ISC2-Candidate",
      category: "cyber",
      icon: "fa-solid fa-user-shield",
      url: "https://www.credly.com/badges/03e1fe13-b643-4f0b-9055-829cb9d2b323/linked_in_profile",
      media: null
    },
    {
      name: "Introduction to Cybersecurity (Badge)",
      authority: "Cisco",
      period: "Jul 2026",
      license: null,
      category: "cyber",
      icon: "fa-solid fa-circle-nodes",
      url: "https://www.credly.com/badges/1f16be58-63e3-4a39-b3ba-d9c1acec6db7/linked_in_profile",
      media: null
    },
    {
      name: "Introduction to Cybersecurity",
      authority: "Cisco Networking Academy",
      period: "Jul 2026",
      license: "e0fd0b51-600f-48ce-9571-38fe960c5909",
      category: "cyber",
      icon: "fa-solid fa-circle-nodes",
      url: "https://www.netacad.com/profile?tab=badges",
      media: "./assets/certs/introduction-to-cybersecurity.png"
    },
    {
      name: "AI in Cybersecurity: Vulnerability, Intelligence, Security, and Ethics",
      authority: "Alison",
      period: "Jul 2026",
      license: "7359-42402669",
      category: "cyber",
      icon: "fa-solid fa-robot",
      url: "https://alison.com/verify/dbeec0e9c3",
      media: "./assets/certs/AI in Cybersecurity - Vulnerability, Intelligence, Security, and Ethics - Learner-Verification-7359-42402669.pdf"
    },
    {
      name: "Introduction to the Threat Landscape 3.0",
      authority: "Fortinet",
      period: "Jul 2026",
      license: "2513140417AR",
      category: "cyber",
      icon: "fa-solid fa-network-wired",
      url: "https://training.fortinet.com/local/staticpage/view.php?page=library_introduction-to-the-threat-landscape",
      media: "./assets/certs/introduction-to-the-threat-landscape-3-0.png"
    },
    {
      name: "Getting Started in Cybersecurity 3.0",
      authority: "Fortinet",
      period: "Jul 2026",
      license: "9894372477AR",
      category: "cyber",
      icon: "fa-solid fa-circle-nodes",
      url: "https://training.fortinet.com/local/staticpage/view.php?page=library_getting-started-in-cybersecurity",
      media: "./assets/certs/getting-started-in-cybersecurity-3-0.png"
    },
    {
      name: "Fortinet Certified Fundamentals",
      authority: "Fortinet",
      period: "Jul 2026",
      validUpto: "Jul 2028",
      license: "6944259184AR",
      category: "cyber",
      icon: "fa-solid fa-shield-halved",
      url: "https://training.fortinet.com/local/cert/my/view.php?cert=FCF",
      media: "./assets/certs/fortinet-certified-fundamentals-cybersecurity.png"
    },
    {
      name: "Technical Introduction to Cybersecurity 3.0",
      authority: "Fortinet",
      period: "Jul 2026",
      validUpto: "28-Jul",
      license: "0549709797AR",
      category: "cyber",
      icon: "fa-solid fa-circle-nodes",
      url: "https://training.fortinet.com/course/view.php?id=73071",
      media: "./assets/certs/technical-introduction-to-cybersecurity-3-0.png"
    },
    {
      name: "NSE 1 - Getting Started in cybersecurity 3.0 (Badge)",
      authority: "Fortinet",
      period: "Jul 2026",
      license: "d92aa30c-d4d5-4c38-ac18-5f1d6f8cda7f",
      category: "cyber",
      icon: "fa-solid fa-circle-nodes",
      url: "https://www.credly.com/badges/d92aa30c-d4d5-4c38-ac18-5f1d6f8cda7f/linked_in_profile",
      media: null
    },
    {
      name: "NSE 1 - Introduction to Threat Landscape  3.0 (Badge)",
      authority: "Fortinet",
      period: "Jul 2026",
      license: "05c288af-628d-4671-9fda-a7066f940670",
      category: "cyber",
      icon: "fa-solid fa-network-wired",
      url: "https://www.credly.com/badges/05c288af-628d-4671-9fda-a7066f940670/linked_in_profile",
      media: null
    },
    {
      name: "Fortinet Certified Fundamentals Cybersecurity (Badge)",
      authority: "Fortinet",
      period: "Jul 2026",
      validUpto: "28-Jul",
      license: "0ab05db5-cd88-45fd-b35b-595b378cd5f3",
      category: "cyber",
      icon: "fa-solid fa-shield-halved",
      url: "https://www.credly.com/badges/0ab05db5-cd88-45fd-b35b-595b378cd5f3/linked_in_profile",
      media: null
    },
    {
      name: "NSE 2 - Technical Introduction to Cybersecurity 3.0 (Badge)",
      authority: "Fortinet",
      period: "Jul 2026",
      license: "7924593e-ba58-4f45-a6f3-e58d427e71e9",
      category: "cyber",
      icon: "fa-solid fa-circle-nodes",
      url: "https://www.credly.com/badges/7924593e-ba58-4f45-a6f3-e58d427e71e9/linked_in_profile",
      media: null
    },
    {
      name: "Internship Common Aptitude Test",
      authority: "Internship Studio",
      period: "Jan 2026",
      license: "CIT-P-2812367",
      category: "cyber",
      icon: "fa-solid fa-clipboard-question",
      url: "#",
      media: null
    },

    // Forensic Science & Safety
    {
      name: "Diploma in Digital Forensic Investigation",
      authority: "Alison",
      period: "Jul 2026",
      license: "4795-42402669",
      category: "forensics",
      icon: "fa-solid fa-fingerprint",
      url: "https://alison.com/verify/a265527ee9",
      media: "./assets/certs/Diploma in Digital Forensics - Learner-Verification-4795-42402669.pdf"
    },
    {
      name: "Four - Legged detectives: The Mastery of Cadaver Dogs",
      authority: "C.A.S.E. 23 OFFICIAL",
      period: "Sep 2024",
      license: "CASE/GL-12/08",
      category: "forensics",
      icon: "fa-solid fa-dog",
      url: "#",
      media: null
    },
    {
      name: "Diploma in Fire Safety",
      authority: "Alison",
      period: "Jan 2026",
      license: "6071-42402669",
      category: "forensics",
      icon: "fa-solid fa-fire-extinguisher",
      url: "https://alison.com/verify/e9d0b0669c",
      media: "./assets/certs/Fire Safety - Learner-Verification-6071-42402669.pdf"
    },
    {
      name: "EHS Guidelines - Environment, Health and Safety",
      authority: "Alison",
      period: "Jan 2026",
      license: "5382-42402669",
      category: "forensics",
      icon: "fa-solid fa-helmet-safety",
      url: "https://alison.com/verify/b27544e219",
      media: "./assets/certs/EHS Guidelines - Environment, Health and Safety - Learner-Verification-5382-42402669.pdf"
    },
    {
      name: "Food Safety and Hygiene in the Catering Industry",
      authority: "Alison",
      period: "Jan 2026",
      license: "1363-42402669",
      category: "forensics",
      icon: "fa-solid fa-utensils",
      url: "https://alison.com/verify/c7319e53ed",
      media: "./assets/certs/Food Safety and Hygiene in the Catering Industry - Learner-Verification-1363-42402669.pdf"
    }
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
