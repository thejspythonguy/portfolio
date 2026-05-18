export const NAV = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "skills", label: "Tech Skills", icon: "⚡" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "achievements", label: "Achievements", icon: "🏆" },
  { id: "certifications", label: "Certs", icon: "🎖️" },
  { id: "background", label: "Background", icon: "🎓" },
  { id: "blogs", label: "Blogs", icon: "✍️" },
];

export const SKILLS = [
  {
    cat: "Front-End",
    icon: "🖥️",
    color: "#e65c00",
    items: ["Angular (NgRx)", "React (Redux)", "TypeScript", "JavaScript", "HTML5/CSS3", "Bootstrap"],
  },
  {
    cat: "Back-End",
    icon: "⚙️",
    color: "#1a6b3c",
    items: ["Node.js (Express)", "Python (FastAPI)", "Spring Boot", "Java", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    cat: "Database & Tools",
    icon: "🗄️",
    color: "#1565c0",
    items: ["MongoDB", "Oracle", "MySQL", "Redis", "Jest", "Selenium", "Splunk", "Git", "Jira"],
  },
  {
    cat: "Domain Expertise",
    icon: "🏦",
    color: "#6a1b9a",
    items: ["FinTech", "Credit Decisioning (FICO)", "AML/KYC", "ML Predictive Models", "Fraud Detection", "Digital Onboarding"],
  },
];

export const EXPERIENCE = [
  {
    role: "Assistant Consultant",
    company: "Tata Consultancy Services",
    location: "Jacksonville, USA",
    period: "Nov 2017 – Present",
    sub: "Embedded at CitiBank NA · Lead Engineer, Digital Account Opening & Credit Decisioning",
    color: "#e65c00",
    points: [
      { bold: "AI credit engine:", rest: "Built FICO Decision Modeler integrations with ML predictive models — 15% better risk accuracy, 30% faster approval cycles." },
      { bold: "Microservices migration:", rest: "Modernised 5+ legacy monoliths into MEAN/Spring Boot services — cut P95 latency 25%, saved ~$40K/month on cloud." },
      { bold: "BDD automation:", rest: "99% test coverage framework eliminated 80%+ production defects, saving ~120 QA hours per sprint." },
      { bold: "Global delivery:", rest: "On-site collaboration with Saudi Aramco teams; zero missed SLAs across USA, India & Saudi Arabia over 6+ years." },
    ],
  },
  {
    role: "Senior Software Consultant",
    company: "Fusion Indus Tecsol Pvt. Ltd.",
    location: "Gurugram, India",
    period: "Nov 2016 – Oct 2017",
    sub: "Onshore-Offshore Transition Lead · NCR Corporation",
    color: "#1565c0",
    points: [
      { bold: "Transition leadership:", rest: "Seamless knowledge transfer for 12 engineers over 6 months with 100% delivery continuity." },
      { bold: "Revenue impact:", rest: "Responsive Angular apps drove 30% revenue boost for the client within 8 months." },
      { bold: "Market expansion:", rest: "Sales enablement tools adopted across 4 regional markets." },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Amagesoft Technologies",
    location: "Chandigarh, India",
    period: "Feb 2013 – Oct 2016",
    sub: null,
    color: "#1a6b3c",
    points: [
      { bold: "Scale:", rest: "Built 3 client platforms (CodeIgniter / Zend) serving 20K+ daily active users, 40% efficiency gains." },
      { bold: "Mobile:", rest: "Ionic Android app with real-time data sync capabilities." },
      { bold: "Performance:", rest: "Custom WordPress themes / plugins for 8+ clients — 35% page-load improvement." },
    ],
  },
];

export const ACHIEVEMENTS = [
  { icon: "🛡️", metric: "99%", label: "Test Coverage", desc: "Eliminated 80%+ of production defects across CitiBank systems." },
  { icon: "⚡", metric: "25%", label: "Latency Reduction", desc: "P95 improvement via microservices modernisation." },
  { icon: "📈", metric: "20%", label: "Digital Acquisition", desc: "UX-optimised onboarding flows boosted customer acquisition." },
  { icon: "💰", metric: "$40K", label: "Monthly Savings", desc: "Cloud infrastructure optimisation per month." },
  { icon: "🌍", metric: "0", label: "Missed SLAs", desc: "Cross-timezone delivery: USA, India & Saudi Arabia over 6+ years." },
  { icon: "🤝", metric: "12", label: "Engineers Led", desc: "Full onshore-offshore transition with zero continuity breaks." },
];

export const CERTS = [
  {
    icon: "⚙️",
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    level: "Associate",
    accentColor: "#FF9900",
    tags: ["DynamoDB", "API Gateway", "IAM", "CI/CD", "SDK"],
  },
  {
    icon: "🍃",
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    level: "Associate",
    accentColor: "#00ED64",
    tags: ["Atlas", "Aggregation", "Indexing", "Schema Design", "Compass"],
  },
];

export const COURSE_CERTS = [
  {
    name: "AI for Work and Life",
    issuer: "University of North Florida",
    date: "Nov 14, 2025",
    hours: "1 CEU",
    image: "/certificates/1763328692380.jpeg",
  },
  {
    name: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02",
    issuer: "Udemy",
    date: "Aug 12, 2024",
    hours: "15 total hours",
    image: "/certificates/1770172499345.jpeg",
  },
  {
    name: "Standard 9.2 - Part 1 Foundation Enterprise Architect Course",
    issuer: "Udemy",
    date: "March 29, 2026",
    hours: "2.5 total hours",
    image: "/certificates/1774752042273.jpeg",
  },
  {
    name: "The EU AI Act Compliance Masterclass 2026",
    issuer: "Udemy",
    date: "April 11, 2026",
    hours: "2 total hours",
    image: "/certificates/1776390534555.jpeg",
  },
  {
    name: "Financial Crime: Processes & Technology - Masterclass",
    issuer: "Udemy",
    date: "April 26, 2026",
    hours: "10 total hours",
    image: "/certificates/1777155947348.jpeg",
  },
  {
    name: "Fraud Detection in Python",
    issuer: "Udemy",
    date: "May 4, 2026",
    hours: "2 total hours",
    image: "/certificates/1777858798003.jpeg",
  },
];

export const BLOGS = [
  {
    title: "Mastering Angular Signals: A Beginner's Guide to Reactive State Management",
    date: "April 30, 2026",
    tags: ["Angular", "Signals", "State Management"],
    excerpt: "Dive into Angular Signals — the new reactive primitive that simplifies state management. This beginner-friendly guide covers how signals work, why they outperform traditional change detection, and practical examples to build more predictable Angular apps.",
    url: "https://medium.com/@thejspythonguy/mastering-angular-signals-a-beginners-guide-to-reactive-state-management-8c946dbf626c",
    readTime: "8 min read",
    color: "#e65c00",
  },
  {
    title: "The Full Stack Paradox: Jack of All Trades, Master of None?",
    date: "May 3, 2026",
    tags: ["Career", "Full Stack", "Leadership"],
    excerpt: "Full-stack engineers are valuable, but expecting them to be experts in every layer is unrealistic. Specialists exist for a reason. This post explores the balance between depth and breadth in modern engineering teams.",
    url: "https://medium.com/@thejspythonguy/the-full-stack-paradox-jack-of-all-trades-master-of-none-94845e1064da",
    readTime: "3 min read",
    color: "#1565c0",
  },
  ,
  {
    title: "From Signals to AI: How Angular Quietly Became Cool Again (v16 to v21)",
    date: "May 3, 2026",
    tags: ["Career", "Full Stack", "Leadership"],
    excerpt: "I will be honest there was a stretch where Angular felt like it was losing the plot. While React is winning hearts with their simplicity and Claude (Claude AI responses are in react.), Angular was still making you set up NgModules just to sneeze. It felt heavy. Ceremonial. Like framework bureaucracy.",
    url: "https://medium.com/@thejspythonguy/from-signals-to-ai-how-angular-quietly-became-cool-again-v16-to-v21-7a23733df734",
    readTime: "4 min read",
    color: "#1565c0",
  },
];

export const INTERESTS = [
  "AI in Financial Services",
  "Intelligent Automation",
  "Distributed Systems",
  "LLM Applications in Credit Risk",
  "Open Source",
  "Technical Mentorship",
];
