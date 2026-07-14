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
    resumeUrl: "#" // Link to your resume PDF if desired
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

  projects: [
    {
      id: 1,
      title: "AI SOC Copilot for CrowdStrike",
      description: "An innovative project integrating LLMs with the CrowdStrike Falcon Platform via FalconPy to automate security workflows. Features natural language querying of endpoints, automated event triage, AI-assisted IOC analysis, and SOC report generation.",
      image: "./assets/project-lumina.png", // Will use AI-themed graphic
      tags: ["Python", "LLMs / RAG", "CrowdStrike API", "FalconPy"],
      category: "ai",
      github: "https://github.com",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    },
    {
      id: 2,
      title: "CrowdStrike API Operations Suite",
      description: "Engineered a programmatic cybersecurity operations tool using the CrowdStrike API and Python falconpy SDK. Replaces manual audits by tracking prevention policy drift, Reduced Functionality Mode detection, and RBAC governance logging.",
      image: "./assets/project-devflow.png", // Will use dev dashboard graphic
      tags: ["Python", "FalconPy", "Pandas", "OAuth2 API"],
      category: "security",
      github: "https://github.com",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    },
    {
      id: 3,
      title: "Device Control & Prevention Policy Testing",
      description: "Designed and executed controlled testing and validation of CrowdStrike Falcon Device Control and Prevention Policies. Evaluated USB peripheral blocking, malware containment, and ransomware prevention across Windows endpoints.",
      image: "./assets/project-gitguard.png", // Will use security CLI graphic
      tags: ["EDR Testing", "Device Control", "Prevention Policies", "Win Security"],
      category: "security",
      github: "https://github.com",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    },
    {
      id: 4,
      title: "Forensic Assessment of Drinking Water Quality",
      description: "A multidisciplinary environmental forensic investigation evaluating heavy metal (Chromium, Nickel) contamination and physicochemical profiles in drinking water at Bilaspur Station using Atomic Absorption Spectroscopy (AAS) and spectrophotometry.",
      image: "./assets/project-zenith.png", // Will use analysis graphic
      tags: ["Forensics", "Atomic Spectroscopy", "Toxicology", "APHA Standards"],
      category: "forensics",
      github: "https://github.com",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    },
    {
      id: 5,
      title: "Automatic Malware Detection with LSTM",
      description: "A research project analyzing deep learning (LSTM) and machine learning models for detecting polymorphic malware. Explores dataset limitations, adversarial evasion, and Explainable AI (XAI) models in cyber defense.",
      image: "./assets/project-gitguard.png", 
      tags: ["Machine Learning", "Deep Learning", "LSTM Networks", "Malware Analysis"],
      category: "ai",
      github: "https://github.com",
      live: "https://in.linkedin.com/in/aditya-ranjan-mohapatra"
    }
  ],

  timeline: [
    {
      period: "May 2026 - Present",
      title: "Security Engineer L1",
      company: "ITPeopleNetwork (ITPN Consulting)",
      description: "Specializing in endpoint security engineering. Primary focus on deploying, configuring, and managing CrowdStrike Falcon sensors across enterprise environments. Configuring policy rules, onboarding assets, and analyzing endpoint protection status."
    },
    {
      period: "Jan 2026 - Present",
      title: "Content Developer & Founding Board Member",
      company: "Sure Clue Scientific Solutions",
      description: "Preparing academic content, study materials, and technical presentations in Forensic Science. Driving scientific research initiatives and forensic training consulting."
    },
    {
      period: "Feb 2026 - Apr 2026",
      title: "Trainee Security Engineer",
      company: "ITPeopleNetwork",
      description: "Trained in endpoint security administration, sensor installation, configuration, prevention policies tuning, and endpoint troubleshooting workflows."
    },
    {
      period: "Jan 2026 - Feb 2026",
      title: "Certified SOC Analyst Intern",
      company: "CFSS Cyber & Forensics Security Solutions",
      description: "Participated in security operations training, event log analysis, and incident correlation. Refined skills in identifying and responding to digital threat events."
    },
    {
      period: "Jun 2025 - Jun 2025",
      title: "Forensic Intern",
      company: "Regional Forensic Science Laboratory Bilaspur",
      description: "Assisted Scientific Officers in the Toxicology and Biology divisions. Handled documentation and examination of physical, biological, and chemical evidence, maintaining strict chain of custody."
    },
    {
      period: "Jun 2024 - Mar 2025",
      title: "SOC Trainee & Intern",
      company: "Cache Digital Solutions Pvt. Ltd.",
      description: "Trained in Security Information and Event Management (SIEM) operations, log analytics, real-time threat monitoring, event correlation, and cybersecurity Incident Response (IR) protocols."
    },
    {
      period: "2024 - 2026",
      title: "M.Sc. in Forensic Science",
      company: "Guru Ghasidas Vishwavidyalaya, Bilaspur",
      description: "Master of Science postgraduation focusing on forensic toxicology, biology, questioned document analysis, and crime scene investigation. Qualified UGC NET (June 2025) in Forensic Sciences."
    },
    {
      period: "2020 - 2023",
      title: "B.Sc. in Forensic Science",
      company: "Centurion University of Technology and Management",
      description: "Bachelor of Science degree covering criminology, forensics chemistry, ballistics, and investigative biology. Active member in crime scene reconstruction and sports (Kabaddi)."
    }
  ]
};

// Export for ES modules or attach to global object
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
