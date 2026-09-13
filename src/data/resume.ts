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
    relocation: 'Open to relocate to Dubai, UAE',
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

  experience: [
    {
      employer: 'Encora Digital India Pvt Ltd',
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
      role: 'Full Stack Developer',
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
      role: 'Full Stack Developer',
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
      role: 'Full Stack Developer',
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
      role: 'Junior PHP Developer',
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
      name: 'AMIETE',
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
