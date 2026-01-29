export const mockData = {
  hero: {
    name: "Roopha Rajagopal",
    title: "Product Manager",
    subtitle: "Turning data into strategy and strategy into results",
    tagline: "Transforming business challenges into data-driven solutions through agile leadership and enterprise systems expertise",
    email: "rroopha@gmail.com",
    phone: "+1 (602) 565-9001",
    linkedin: "https://www.linkedin.com/in/roopha-rajagopal",
    github: "https://github.com/roopha"
  },
  whyPM: {
    title: "Why Product Management?",
    pillars: [
      {
        icon: "heart",
        title: "Empathy First",
        description: "Understanding user needs deeply to build solutions that truly matter. I start every project by listening - to customers, stakeholders, and data.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHRlYW13b3JrfGVufDB8fHx8MTc2OTY1ODM2OHww&ixlib=rb-4.1.0&q=85"
      },
      {
        icon: "lightbulb",
        title: "Problem Solver",
        description: "I thrive on complex challenges. Whether it's migrating 200K+ loan records or improving user activation rates, I break down problems systematically and find elegant solutions.",
        image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc2OTY1ODM3M3ww&ixlib=rb-4.1.0&q=85"
      },
      {
        icon: "target",
        title: "Execution Focus",
        description: "Ideas mean nothing without execution. I deliver results through agile methodologies, clear prioritization, and relentless follow-through.",
        image: "https://images.pexels.com/photos/7691694/pexels-photo-7691694.jpeg"
      },
      {
        icon: "users",
        title: "Cross-functional",
        description: "I bridge business, engineering, and design. My superpower is translating technical constraints into business opportunities and vice versa.",
        image: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg"
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "AI-Enabled Loan Migration Platform",
      company: "Vero Technologies",
      role: "Product Owner - AI/ML Business Systems Strategy",
      duration: "3 months (Jul - Oct 2025)",
      category: "Platform Migration",
      tags: ["AI/ML", "MongoDB", "Azure DevOps", "Agile", "Risk Management"],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwzfHxwcm9kdWN0JTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwwfHx8fDE3Njk2NTgzMDB8MA&ixlib=rb-4.1.0&q=85",
      summary: "Led migration of 200K+ active loan records to AI-enabled MongoDB platform with 99.97% accuracy and zero downtime.",
      challenge: "Migrate legacy lending platform to modern, AI-enabled infrastructure supporting $500M+ in loans with zero tolerance for data loss and no downtime.",
      solution: "Designed phased migration strategy with MongoDB architecture, automated CI/CD pipelines, and comprehensive risk mitigation through 5 dress rehearsals.",
      impact: [
        "200K+ loan records migrated with 99.97% accuracy",
        "87-minute total migration time (under 90-min target)",
        "50% reduction in release cycles (8hrs → 4hrs)",
        "Zero compliance violations",
        "99% dealer satisfaction during migration",
        "Foundation for $2M+ ML revenue potential"
      ],
      keyDecisions: [
        "Big Bang vs. Phased Migration: Chose big bang with extensive testing to avoid 10 weeks of dual-system overhead",
        "MongoDB Schema Design: Implemented hybrid approach balancing operational speed with ML training needs",
        "Data Completeness: Migrated with nulls for non-critical fields, maintained timeline while ensuring 92% backfill within 45 days"
      ],
      metrics: {
        before: {
          "API Response Time": "850ms",
          "Release Cycle": "8 hours",
          "Deployment Failures": "22%",
          "ML Model Updates": "Monthly"
        },
        after: {
          "API Response Time": "510ms (-40%)",
          "Release Cycle": "4 hours (-50%)",
          "Deployment Failures": "3% (-86%)",
          "ML Model Updates": "Weekly (4x)"
        }
      }
    },
    {
      id: 2,
      title: "B2B E-Commerce Customer Retention Engine",
      company: "AMBC Inc.",
      role: "Product Manager",
      duration: "6 months",
      category: "Retention & Growth",
      tags: ["ML Prediction", "B2B", "Churn Analysis", "Automation", "CRM"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHw0fHxwcm9kdWN0JTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwwfHx8fDE3Njk2NTgzMDB8MA&ixlib=rb-4.1.0&q=85",
      summary: "Built predictive ML system that reduced B2B churn from 18% to 13%, retaining $1.5M+ annual revenue through automated interventions.",
      challenge: "18% annual churn rate costing $3M+ in lost revenue with no early warning system. Customers silently stopped ordering, discovered only after 90+ days of inactivity.",
      solution: "Built ML-powered predictive scoring engine (78% accuracy) identifying at-risk customers, automated intervention campaigns, and account manager dashboard with recommended actions.",
      impact: [
        "$1.5M+ incremental revenue retained in first 12 months",
        "Churn rate reduced from 18% to 13% (28% reduction)",
        "Customer lifetime value increased by $6,800 average",
        "Win-back rate improved from 12% to 31%",
        "Account manager productivity +35% (proactive vs reactive)",
        "52% of flagged customers successfully retained"
      ],
      keyDecisions: [
        "Build vs Buy: Built in-house for IP ownership and B2B customization despite higher upfront cost ($120K vs $80K annually)",
        "Explainable AI: Added 'top 3 contributing factors' to risk scores, driving 2x better intervention effectiveness",
        "Segmented Intervention Timing: High-value (24hr), Mid-market (7-day), Small business (14-day) reduced false positives by 60%"
      ],
      metrics: {
        before: {
          "Annual Churn Rate": "18%",
          "Win-back Success": "12%",
          "Account Manager Time": "60% reactive",
          "Intervention Success": "N/A"
        },
        after: {
          "Annual Churn Rate": "13% (-28%)",
          "Win-back Success": "31% (+158%)",
          "Account Manager Time": "60% proactive",
          "Intervention Success": "52%"
        }
      }
    },
    {
      id: 3,
      title: "SaaS Onboarding Redesign",
      company: "Case Study",
      role: "Product Manager",
      duration: "3 weeks",
      category: "User Experience",
      tags: ["UX Design", "Conversion Optimization", "B2B SaaS", "User Research"],
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbnxlbnwwfHx8fDE3Njk2NTgzNTV8MA&ixlib=rb-4.1.0&q=85",
      summary: "Redesigned B2B SaaS onboarding flow to reduce time-to-value by 40% and increase activation rates by 35%.",
      challenge: "Most B2B SaaS products lose 40-60% of new users during onboarding. Only 23% of signups became active users, representing millions in lost revenue.",
      solution: "Applied 'Value Before Work' principle with progressive 3-stage onboarding: Instant Value (2 min) → Simplified Setup (3 min) → Optional Team Growth.",
      impact: [
        "40% reduction in time-to-first-value (18min → 11min)",
        "35% increase in activation rate (23% → 31%)",
        "Estimated $800K additional ARR for 10K monthly signups",
        "67% of users experienced 'aha moment' in first session"
      ],
      research: [
        "User Interviews: 15 participants, 67% abandoned during complex account setup",
        "Behavioral Data: Drop-off spike at Step 3 (52% abandonment)",
        "Key Finding: Users asked to invest effort before experiencing value"
      ],
      principles: [
        "Progressive Disclosure: Show complexity gradually",
        "Jobs-to-be-Done: Users hire products to solve problems, not configure settings",
        "Friction Mapping: Every input field is a conversion killer"
      ]
    },
    {
      id: 4,
      title: "Enterprise Feature Adoption Strategy",
      company: "Arizona State University",
      role: "Product Manager",
      duration: "6 months",
      category: "Change Management",
      tags: ["Canvas LMS", "User Adoption", "Training", "Analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHw0fHxwcm9kdWN0JTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwwfHx8fDE3Njk2NTgzMDB8MA&ixlib=rb-4.1.0&q=85",
      summary: "Increased Canvas LMS collaboration feature adoption from 12% to 67% across 100K+ users through systematic change management.",
      challenge: "Only 12% of instructors used collaboration tools in Canvas LMS serving 100K+ users, underutilizing $2M+ platform investment.",
      solution: "Three-phase strategy: Remove Friction (template creation, 6-min setup) → Enable Success (90-sec videos, champions) → Build Momentum (social proof, in-app prompts).",
      impact: [
        "Feature adoption: 12% → 67% (458% increase)",
        "Active courses: 300 → 1,675",
        "Student engagement: +35% in participating courses",
        "Instructor NPS: +28 points",
        "Support tickets: -42%"
      ],
      phases: [
        {
          phase: "Remove Friction (Months 1-2)",
          actions: "Created 5 pre-configured templates, reduced setup from 23 min to 6 min",
          result: "74% reduction in setup time"
        },
        {
          phase: "Enable Success (Months 2-4)",
          actions: "90-second video tutorials, trained 50 faculty champions",
          result: "67% video completion, champions influenced 800+ colleagues"
        },
        {
          phase: "Build Momentum (Months 4-6)",
          actions: "Success metrics in newsletter, community forum, in-app prompts",
          result: "34% of resistant segment began experimenting"
        }
      ]
    },
    {
      id: 5,
      title: "Oracle EPM Cloud Optimization",
      company: "Oracle",
      role: "Product Manager",
      duration: "8 months",
      category: "Enterprise Platform",
      tags: ["EPM", "Performance", "Templates", "Fortune 500", "Financial Planning"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHw1fHxlbnRlcnByaXNlJTIwc29mdHdhcmV8ZW58MHx8fHwxNzY5NjU4NDAwfDA&ixlib=rb-4.1.0&q=85",
      summary: "Transformed Oracle EPM Cloud implementation speed and performance, improving NPS from 28 to 52 and saving $12M+ in at-risk renewals.",
      challenge: "Enterprise clients paying $500K-$2M annually threatened non-renewal due to 10-month implementations, slow performance (8+ min reports), and 43% user adoption.",
      solution: "Three-pillar strategy: Performance optimization (query caching, 87% faster), industry templates (5 verticals), and low-code rule builder enabling self-service.",
      impact: [
        "Implementation time: 10.5 months → 5.8 months (45% reduction)",
        "Report load times: 8.2 min → 1.1 min (87% improvement)",
        "User adoption: 43% → 71% monthly active rate",
        "Customer NPS: 28 → 52 (86% improvement)",
        "Renewal rate: 78% → 91% (saved $12M+ ARR)",
        "Competitive win rate: +18% vs Anaplan"
      ],
      keyDecisions: [
        "Performance First: Paused new features for 2 quarters to fix critical blockers, saved 14 of 15 at-risk clients ($7M ARR)",
        "Templates Over Custom: Reduced services revenue 18% but increased product revenue 31% through faster implementations",
        "Low-Code Priority: Empowered 60% of clients to self-configure vs 10% previously, reduced consultant dependency"
      ]
    },
    {
      id: 6,
      title: "AI Support Automation - ROI Framework",
      company: "AMBC Inc.",
      role: "Product Manager",
      duration: "Implementation Study",
      category: "AI/Automation",
      tags: ["AI Chatbot", "ROI Analysis", "Customer Support", "Cost Optimization"],
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc2OTY1ODMwNHww&ixlib=rb-4.1.0&q=85",
      summary: "Built AI chatbot implementation that deflected 45% of support tickets, achieving 3.5-month payback period and $156K annual savings.",
      challenge: "Companies struggle to justify AI chatbot investments. Created systematic ROI methodology for build vs. buy decisions.",
      solution: "Developed repeatable framework calculating direct cost savings, customer experience impact, and payback periods with industry benchmarks.",
      impact: [
        "45% ticket deflection (1,080 tickets/month)",
        "$156K annual cost savings",
        "3.5-month payback period",
        "CSAT improvement: 3.8 → 4.2 (5-point scale)",
        "20 support hours/week freed up"
      ],
      framework: [
        "Input Variables: Ticket volume, handle time, agent costs, AI implementation costs",
        "Output Calculations: Direct savings, CX impact, payback period",
        "Industry Benchmarks: SaaS (40-55%), E-commerce (35-50%), FinTech (30-45%)"
      ],
      roiBreakdown: {
        "Implementation Cost (Licensed)": "$45K",
        "Annual Cost Savings": "$156K",
        "Payback Period": "3.5 months",
        "3-Year NPV": "$312K"
      }
    }
  ],
  about: {
    summary: "I bridge the gap between \"what customers need\" and \"what engineering can build\" then make sure it actually gets used. I ask \"why\" until I understand the real problem, test ideas fast, and treat every product decision like a hypothesis worth validating. I'm an ocean person learning to love hiking, excited about new experiences and discovering what I'm capable of.",
    photo: "https://customer-assets.emergentagent.com/job_roopha-portfolio/artifacts/cvkjcwev_ROOPA.jpeg",
    highlights: [
      "6+ years in IT and Product Management",
      "Led enterprise solutions for Fortune 500 clients",
      "Proven track record in CPQ, ServiceNow, and Business Systems",
      "Expert in Agile/SAFe methodologies and stakeholder management"
    ]
  },
  skills: {
    projectManagement: [
      "Agile & Scrum",
      "SAFe",
      "Portfolio Management",
      "Technical Project Management",
      "Release Management",
      "Risk Management",
      "Operational Excellence"
    ],
    technical: [
      "SQL",
      "Python",
      "Tableau",
      "Power BI",
      "Salesforce CRM",
      "ServiceNow",
      "SAP CPQ",
      "Oracle EPM Cloud",
      "Azure DevOps",
      "Jira",
      "Confluence"
    ],
    businessAnalysis: [
      "Requirements Gathering",
      "System Configuration",
      "Business Process Analysis",
      "UAT & Testing",
      "API Integrations",
      "Gap Analysis",
      "Process Improvement"
    ],
    platforms: [
      "ServiceNow ITSM",
      "Workflow Automation",
      "ITIL Best Practices",
      "Asset Management",
      "Order Management Systems",
      "Revenue Operations"
    ]
  },
  experience: [
    {
      id: 1,
      role: "Product Owner – AI/ML Business Systems Strategy",
      company: "Vero Technologies (Subfloor Dealer Lending)",
      location: "Illinois, USA",
      period: "Jul 2025 – Oct 2025",
      type: "Professional",
      achievements: [
        "Owned product strategy and delivery for an AI-enabled subfloor lending loan migration platform, supporting dealer–lender financing workflows and the migration of 200K+ active loan records with strict accuracy, compliance, and uptime requirements",
        "Acted as the bridge between business, risk, and engineering teams to design a MongoDB-backed data model and API integration roadmap, translating lending policies, dealer needs, and product objectives into epics, user stories, and delivery milestones",
        "Applied a customer-first, business-focused analytics approach to validate data quality, monitor migration outcomes, and ensure ML-driven decisioning supported dealer experience, portfolio health, and operational KPIs",
        "Led Agile execution and Azure DevOps CI/CD pipelines for ML deployment, reducing release cycles by ~50% and improving platform reliability, scalability, and readiness for dealer adoption"
      ]
    },
    {
      id: 2,
      role: "Product Owner - Business Systems & SaaS Platform Strategy",
      company: "Edplus @ Arizona State University",
      location: "Arizona, USA",
      period: "Jan 2024 – Feb 2025",
      type: "Professional",
      achievements: [
        "Configured and customized Canvas LMS serving 100K+ users, including user permissions, workflows, and API integrations; authored 100+ test cases and led quality assurance activities with 95% success rate and zero post-launch escalations",
        "Partnered with marketing leaders to translate business objectives into GTM measurement frameworks, value tracking, and adoption targets; operationalized weekly revenue operations governance to improve ROAS 18% and generate $1.5M incremental revenue",
        "Drove digital product roadmap and OKR tracking for retirement savings platform serving 100K+ users, achieving 35% engagement growth and delivered measurable story outcomes aligned with business strategy",
        "Led agile ceremonies including daily scrums, sprint planning, sprint reviews, and retrospectives while managing portfolio prioritization and integrated roadmaps for transformation initiatives",
        "Conducted business intelligence (BI) and data analytics using hands-on SQL and Python analysis with Tableau and Power BI data visualization achieving 35% engagement growth, 15% conversion improvement, and $1.5M incremental revenue"
      ]
    },
    {
      id: 3,
      role: "Product Owner - Enterprise Business Systems Analyst",
      company: "Deloitte",
      location: "Tennessee, USA",
      period: "Feb 2022 – Aug 2023",
      type: "Professional",
      achievements: [
        "Led SAFe agile portfolio management and delivery for SAP CPQ (Configure, Price, Quote) order management solution architecture across 3 Fortune 500 financial services clients, delivering business outcomes of 65% quote error reduction, 50% sales cycle efficiency improvement, and 30% release cycle time reduction",
        "Managed support operations and troubleshooting for production ITSM in ServiceNow, logging and prioritizing 300+ incidents using ITIL-aligned processes, achieving 99% SLA adherence and reducing MTTR by 25%",
        "Served as primary liaison between Product, Development, UX, and business partners across Finance, IT, Legal, and Compliance functions, leading 30+ working sessions to refine scope and validate solutions"
      ]
    },
    {
      id: 4,
      role: "Product Analyst - Business Systems Implementation",
      company: "Oracle",
      location: "Bengaluru, India",
      period: "Aug 2021 – Feb 2022",
      type: "Professional",
      achievements: [
        "Led end-to-end Oracle EPM Cloud implementations for 3 Fortune 500 financial services clients, managing project delivery through discovery, design, and release phases on $500K+ projects serving 500+ users",
        "Achieved 98% UAT success and zero post-launch escalations while establishing knowledge management framework and delivering comprehensive end-user training"
      ]
    },
    {
      id: 5,
      role: "Business Technology Analyst – Customer Success & Growth",
      company: "AMBC Inc.",
      location: "Illinois, USA",
      period: "Nov 2016 – Aug 2021",
      type: "Professional",
      achievements: [
        "Drove end-to-end customer lifecycle for 20+ B2B eCommerce clients from demand generation and sales conversion through post-sale support",
        "Executed SEO/SEM campaigns using Google Analytics and SEMrush, optimizing 50+ keywords that increased organic traffic by 40%, generated 200+ qualified leads, and improved conversion rates by 25%",
        "Configured HubSpot integrations and marketing automation workflows achieving 40% improvement in customer satisfaction, 25% increase in client retention, and 99.7% system uptime"
      ]
    },
    {
      id: 6,
      role: "Research Assistant",
      company: "Arizona State University",
      location: "Arizona, USA",
      period: "Jul 2024 - Mar 2025",
      type: "Volunteering",
      achievements: [
        "Assisted in data collection process during pilot and formal studies, gathering data online to assess the impact of generative AI (ChatGPT) on engineering problem-solving",
        "Supported cutting-edge research study focusing on AI, engineering education, and educational technology. Contributed to data analysis and derived insights that supported the research objectives",
        "Worked closely with research team to ensure accuracy and reliability of collected data, actively participating in team meetings to discuss progress and findings"
      ]
    },
    {
      id: 7,
      role: "Research Assistant",
      company: "Arizona State University",
      location: "Arizona, USA",
      period: "Jan 2024 - May 2024",
      type: "Volunteering",
      achievements: [
        "Assisted in designing a research project, investigating teamwork dynamics in complex environments using a UAV simulator",
        "Analyzed data using statistical methods to identify trends and relationships between uncertainty, teammate interdependency, and teamwork performance",
        "Contributed to developing research reports and presentations summarizing findings and their implications"
      ]
    },
    {
      id: 8,
      role: "Student Volunteer",
      company: "Peace Corps",
      location: "Remote",
      period: "Feb 2024 - Mar 2025",
      type: "Volunteering",
      achievements: [
        "Contributed to poverty alleviation initiatives and community development programs"
      ]
    },
    {
      id: 9,
      role: "Project Management Intern",
      company: "Mesa Public Schools",
      location: "Arizona, USA",
      period: "Jun 2025 - Jul 2025",
      type: "Volunteering",
      achievements: [
        "Supported project management activities in educational technology implementation"
      ]
    }
  ],
  certifications: [
    "Certified Scrum Product Owner (CSPO)",
    "Google Analytics Certified",
    "Design Thinking",
    "ML for Product Managers",
    "Google Cybersecurity Professional Certificate",
    "Project Management Professional (In Progress)"
  ],
  education: [
    {
      degree: "MS in Technology Management",
      institution: "Arizona State University",
      location: "Arizona, USA"
    },
    {
      degree: "B.Tech in Electronics and Communication",
      institution: "Anna University",
      location: "Chennai, India"
    }
  ]
};