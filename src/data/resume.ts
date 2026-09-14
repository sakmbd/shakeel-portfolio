/**
 * Direct, faithful transcription of docs/shakeel_portfolio_source_of_truth.md.
 * This is the single in-code source of truth for resume-derived content —
 * components must read from here, never hardcode resume facts inline.
 *
 * Do not alter wording, qualifiers ("10+ years", "50K–100K+", "approximately
 * 100–200", etc.), scope, or figures without updating the source markdown first.
 */
import type { ResumeData } from '@/types/resume';

export const resume: ResumeData = {
  identity: {
    name: 'Shakeel Ahamed',
    title: 'Senior Software Engineer | Full Stack | Node.js | React.js | Vue.js | Microservices',
    location: 'India',
    relocation: 'Open to relocate',
    availability: 'Immediate Joiner',
    phone: '+91-9555909770',
    email: 'sakmbd@gmail.com',
    linkedin: 'https://linkedin.com/in/sakmbd',
    github: 'https://github.com/sakmbd',
  },

  summary: [
    'Senior Software Engineer with 10+ years of experience building scalable web applications and enterprise solutions across e-commerce, healthcare, SEO platforms, and network automation.',
    'Strong expertise in Node.js, React.js, Vue.js, TypeScript, REST APIs, GraphQL, MongoDB, MySQL, and microservices, with experience in AWS and Redis and exposure to Docker, Kubernetes, and GCP.',
    'Experienced in full-stack development, API architecture, performance optimization, production troubleshooting, and Agile delivery.',
    'Immediate joiner and open to relocation to Dubai, UAE.',
  ],

  // The exact technologies named in summary[1] ("Strong expertise in ...").
  coreStack: [
    'Node.js',
    'React.js',
    'Vue.js',
    'TypeScript',
    'REST APIs',
    'GraphQL',
    'MongoDB',
    'MySQL',
    'Microservices',
    'AWS',
    'Redis',
  ],

  skills: [
    {
      category: 'Programming Languages',
      items: ['JavaScript (ES6+)', 'TypeScript'],
    },
    {
      category: 'Backend & APIs',
      items: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'Microservices',
        'Socket.io',
        'Itential Automation',
      ],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'Vue.js', 'Nuxt.js'],
    },
    {
      category: 'State Management',
      items: ['Redux Toolkit', 'React Query', 'Pinia', 'Vuex', 'Context API', 'Custom Hooks'],
    },
    {
      category: 'Databases & Caching',
      items: ['MongoDB', 'MySQL', 'Redis'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'AWS Lambda', 'GCP', 'Docker', 'Kubernetes'],
    },
    {
      category: 'Architecture & API Tools',
      items: ['Microservices', 'Swagger/OpenAPI'],
    },
    {
      category: 'Testing & Development Tools',
      items: ['Newman', 'Vitest'],
    },
    {
      category: 'UI & CSS',
      items: ['Tailwind CSS', 'Bootstrap', 'Material UI', 'Quasar', 'Vuetify'],
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    },
    {
      category: 'AI & Emerging Technologies',
      items: ['LangChain', 'RAG', 'LLM Integration', 'Vector DB', 'Supabase'],
    },
  ],

  // Curated scannable facts — each derived from an achievement bullet below,
  // not a new claim. Qualifiers ("50K–100K+", "approximately 100–200", "30+")
  // are preserved exactly as written in the source of truth.
  highlights: [
    {
      stat: '50K–100K+ SEO records processed',
      description:
        'Admin dashboard for city- and state-level SEO datasets, streamed to MongoDB via a Redis-backed backend pipeline.',
      employer: 'Encora Inc.',
      icon: 'storage',
    },
    {
      stat: 'GCP Kubernetes deployments',
      description:
        'Shipped features to GCP Kubernetes and used Datadog logs for production monitoring and troubleshooting.',
      employer: 'Encora Inc.',
      icon: 'cloud_done',
    },
    {
      stat: 'A/B testing via Salesforce',
      description:
        'Rendered layout and button variants from Salesforce control/variant data and tracked interactions back for analysis.',
      employer: 'Encora Inc.',
      icon: 'science',
    },
    {
      stat: '100–200 doctors & staff supported',
      description:
        'SOAP notes module for a telehealth EHR system, supporting approximately 50–100 virtual patient consultations daily.',
      employer: 'Chetu India Pvt. Ltd.',
      icon: 'local_hospital',
    },
    {
      stat: 'Real-time appointment booking',
      description: 'Live patient-queue booking system built with Vue.js, Node.js, and Socket.io.',
      employer: 'Chetu India Pvt. Ltd.',
      icon: 'event_available',
    },
    {
      stat: '30+ AWS Lambda functions migrated',
      description: 'Modernized a retail Store Management/POS backend to Node.js with a team of 3.',
      employer: 'Chetu India Pvt. Ltd.',
      icon: 'sync_alt',
    },
  ],

  // Each `highlights` bullet below is a verbatim substring of the matching
  // employer's `achievements` above; each `technologies` entry is a subset
  // of that employer's `technologies` above. Keep both in sync with the
  // source arrays if wording or tech lists ever change.
  featuredExperience: [
    {
      slug: 'localpages',
      title: 'Localpages',
      domain: 'SEO Platform · E-commerce',
      employer: 'Encora Inc.',
      duration: 'Dec 2021 – Apr 2026',
      highlights: [
        'Spent 2+ years on Localpages, a Node.js, React, and MongoDB SEO platform that synchronized real product data from Salesforce, the core e-commerce platform, and multiple backend microservices to support fast search-engine-facing pages.',
        'Built A/B testing capabilities using Salesforce control/variant data, dynamically rendering layout and button variants and tracking user interactions back to Salesforce for analysis.',
        'Built an admin dashboard for uploading city- and state-level SEO CSV datasets containing 50K–100K+ records; implemented frontend chunk streaming and backend Redis-based processing/loading into MongoDB.',
        'Handled development deployments on GCP Kubernetes for assigned features and used Datadog logs for production monitoring and troubleshooting.',
      ],
      technologies: ['Node.js', 'React.js', 'MongoDB', 'Redis', 'Kubernetes', 'GCP', 'Datadog'],
      featured: true,
    },
    {
      slug: 'itential-automation',
      title: 'Itential Automation',
      domain: 'Network Automation',
      employer: 'Lumen Technologies Ltd.',
      duration: 'Apr 2020 – Dec 2021',
      highlights: [
        'Developed workflow modules and reusable global functions for Itential Automation, including a retry-with-count mechanism that improved workflow reliability and error handling.',
        'Built adapter functions from Swagger API specifications, creating reusable integration building blocks for workflows communicating with external systems.',
        'Contributed to a React-based dashboard for the Itential platform to view, manage, and track workflow deployments, improving validation and day-to-day workflow management.',
      ],
      technologies: ['Node.js', 'React.js', 'Itential Automation', 'MongoDB', 'Swagger API'],
    },
    {
      slug: 'telehealth-ehr',
      title: 'Telehealth EHR',
      domain: 'Healthcare / Telehealth',
      employer: 'Chetu India Pvt. Ltd.',
      duration: 'Jul 2017 – Apr 2020',
      highlights: [
        'Created a SOAP (Subjective, Objective, Assessment, Plan) notes generation module for a telehealth EHR system using Laravel, Vue.js, and MySQL, supporting approximately 100–200 doctors and staff and 50–100 virtual patient consultations daily.',
        'Engineered a real-time patient appointment booking system using Vue.js, Node.js, and Socket.io, enabling doctors to select patients from a live queue while Laravel powered core backend APIs.',
      ],
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Node.js', 'Socket.io'],
    },
    {
      slug: 'retail-pos',
      title: 'Retail POS',
      domain: 'Retail / POS',
      employer: 'Chetu India Pvt. Ltd.',
      duration: 'Jul 2017 – Apr 2020',
      highlights: [
        'Migrated 30+ AWS Lambda functions to Node.js for a large-scale retail Store Management/POS system, collaborating with a team of 3 to modernize backend architecture.',
        'Delivered a Vue.js-based admin dashboard for store operations and configuration management.',
      ],
      technologies: ['AWS Lambda', 'Node.js', 'Vue.js'],
    },
  ],

  experience: [
    {
      employer: 'Encora Inc.',
      role: 'Senior Software Engineer',
      duration: 'Dec 2021 – Apr 2026',
      technologies: [
        'React.js',
        'Next.js',
        'Vue.js',
        'Node.js',
        'GraphQL',
        'REST APIs',
        'Redux Toolkit',
        'Pinia',
        'MongoDB',
        'Redis',
        'Kubernetes',
        'GCP',
        'Datadog',
      ],
      achievements: [
        'Spent 2+ years on Localpages, a Node.js, React, and MongoDB SEO platform that synchronized real product data from Salesforce, the core e-commerce platform, and multiple backend microservices to support fast search-engine-facing pages.',
        'Built A/B testing capabilities using Salesforce control/variant data, dynamically rendering layout and button variants and tracking user interactions back to Salesforce for analysis.',
        'Built an admin dashboard for uploading city- and state-level SEO CSV datasets containing 50K–100K+ records; implemented frontend chunk streaming and backend Redis-based processing/loading into MongoDB.',
        'Handled development deployments on GCP Kubernetes for assigned features and used Datadog logs for production monitoring and troubleshooting.',
        'Designed and maintained Swagger/OpenAPI documentation for Node.js APIs, standardizing endpoint references and improving onboarding and cross-team integration.',
        "Implemented an end-to-end API testing flow using Newman (Postman's CLI) as an npm package to automate API test execution before production releases.",
        'Implemented a geo-location feature for an eSIM and physical SIM e-commerce platform using React.js, allowing users to pin their exact location during checkout; added Vitest test coverage.',
        'Supported and maintained a Vue.js application running in Docker for 6 months, resolving defects and improving application stability.',
        'Participated in peer code reviews, client meetings, retrospectives, and sprint discussions across global Agile development teams.',
      ],
    },
    {
      employer: 'Lumen Technologies Ltd.',
      role: 'Software Development Consultant I',
      duration: 'Apr 2020 – Dec 2021',
      technologies: ['Node.js', 'React.js', 'Itential Automation', 'MongoDB', 'Swagger API'],
      achievements: [
        'Developed workflow modules and reusable global functions for Itential Automation, including a retry-with-count mechanism that improved workflow reliability and error handling.',
        'Built adapter functions from Swagger API specifications, creating reusable integration building blocks for workflows communicating with external systems.',
        'Contributed to a React-based dashboard for the Itential platform to view, manage, and track workflow deployments, improving validation and day-to-day workflow management.',
      ],
    },
    {
      employer: 'Chetu India Pvt. Ltd.',
      role: 'Sr. Software Engineer',
      duration: 'Jul 2017 – Apr 2020',
      technologies: [
        'Node.js',
        'Vue.js',
        'Socket.io',
        'Laravel',
        'MySQL',
        'MongoDB',
        'AWS Lambda',
        'React.js',
      ],
      achievements: [
        'Created a SOAP (Subjective, Objective, Assessment, Plan) notes generation module for a telehealth EHR system using Laravel, Vue.js, and MySQL, supporting approximately 100–200 doctors and staff and 50–100 virtual patient consultations daily.',
        'Engineered a real-time patient appointment booking system using Vue.js, Node.js, and Socket.io, enabling doctors to select patients from a live queue while Laravel powered core backend APIs.',
        'Migrated 30+ AWS Lambda functions to Node.js for a large-scale retail Store Management/POS system, collaborating with a team of 3 to modernize backend architecture.',
        'Delivered a Vue.js-based admin dashboard for store operations and configuration management.',
        'Worked in Scrum-based Agile teams to deliver iterative enhancements across healthcare and retail systems.',
      ],
    },
    {
      employer: 'NetCreativeMind Pvt. Ltd.',
      role: 'PHP Developer',
      duration: 'Feb 2016 – Jan 2017',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Ajax', 'PHP', 'MySQL'],
      achievements: [
        'Collaborated on-site with government clients to deliver multiple government website projects aligned with Indian Government Web Guidelines (GIGW), supporting accessibility, compliance, and standardization.',
        'Improved frontend performance and reduced page-load times across government websites.',
        'Gathered requirements from government stakeholders, translated business needs into technical specifications, and delivered project features.',
      ],
    },
    {
      employer: 'Cyclonewebz Pvt. Ltd.',
      role: 'PHP Developer',
      duration: 'Feb 2015 – Feb 2016',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Ajax', 'PHP', 'MySQL'],
      achievements: [
        'Built backend APIs using PHP and MySQL for an Android-based cab booking application, covering booking management, driver coordination, and ride status updates.',
        'Optimized APIs for booking management and real-time ride status updates with focus on scalability and performance.',
        'Collaborated with frontend and mobile teams to integrate APIs and improve application stability through bug fixing and performance tuning.',
      ],
    },
  ],

  education: [
    {
      name: 'AMIETE — Equivalent to B.E./B.Tech. (CS&E)',
      description: "4-Year's Degree in Computer Science & Engineering — IETE, New Delhi, 2014",
    },
    {
      name: '12th',
      description: 'BD Inter College, Sarai Tareen, Sambhal, U.P. Board, 2007',
    },
    {
      name: '10th',
      description: 'BD Inter College, Sarai Tareen, Sambhal, U.P. Board, 2004',
    },
  ],
};
