import { Experience, Education, Project, SkillCategory, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: "Muhammad Salman Ali",
  role: "Full Stack Engineer | React, Next.js, TypeScript, Automation & AI Workflows",
  email: "msalmanali7890@gmail.com",
  phone: "+92 309 9876366",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/salmanali09/",
  github: "https://github.com/SalmanAli09",
  portfolio: "https://salmanali09.vercel.app/",
  resume: "/Muhammad_Salman_Ali_FullStack_Engineer.pdf",
  summary: "Full Stack Engineer with 3+ years of experience shipping scalable, performance-focused web applications with React, Next.js, and TypeScript, backed by Django/FastAPI services. Increasingly focused on automation and AI-driven workflows that eliminate manual work and turn product ideas into live, revenue-ready systems."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "Avialdo Solutions",
    period: "Dec 2024 - Present",
    location: "Karachi, Pakistan (On-site)",
    description: [
      "Ship scalable frontend features in React, Next.js, and TypeScript for production applications serving live users.",
      "Designed and integrated RESTful APIs with Django and FastAPI, reducing redundant network calls and improving perceived page-load performance by about 90%.",
      "Built reusable, typed UI components adopted across the product to reduce duplicate code and accelerate feature delivery.",
      "Automated repetitive workflows with Python scripts, n8n/Zapier pipelines, and AI agent integrations, cutting recurring manual work from 12-13 hours to 1-2 hours per week."
    ]
  },
  {
    id: "exp2",
    role: "Frontend Developer",
    company: "A Tech Sight LLC",
    period: "Aug 2023 - Nov 2024",
    location: "Karachi, Pakistan",
    description: [
      "Delivered responsive, cross-browser UIs in React.js and Next.js across 31 production client projects.",
      "Built everything from marketing websites to data-heavy dashboards while coordinating with backend engineers, designers, and PMs across time zones.",
      "Optimized rendering, asset delivery, code-splitting, memoization, and image handling to improve load times and Core Web Vitals."
    ]
  },
  {
    id: "exp3",
    role: "Next.js Developer",
    company: "Khas Technologies",
    period: "Jan 2023 - Aug 2023",
    location: "Remote",
    description: [
      "Built the core user-facing UI for a matrimonial matching platform in Next.js, including profile creation, search, and match workflows.",
      "Established reusable page layouts and form patterns that shortened build time for subsequent screens."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Science in Computer Science",
    institution: "Virtual University",
    period: "2024 - Present",
    location: "Karachi, Pakistan"
  },
  {
    id: "edu2",
    degree: "Intermediate (HSSC)",
    institution: "Government Degree Science And Commerce College",
    period: "10/2018 - 12/2021",
    location: "Karachi, Pakistan"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Core",
    skills: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"]
  },
  {
    category: "Frameworks & Libs",
    skills: ["React.js", "Next.js", "React Query", "Redux Toolkit", "Tailwind CSS", "GSAP"]
  },
  {
    category: "Backend & DB",
    skills: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "PostgreSQL", "MySQL"]
  },
  {
    category: "Automation & AI",
    skills: ["Playwright", "Selenium", "n8n", "Zapier", "Make", "AI Agents", "LLM APIs", "Bash Scripting"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "REST APIs", "Cursor", "Claude", "Debugging", "Performance Profiling"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "WonderTailor",
    description: "Custom web app and business automation product for teams that need polished digital workflows, client-facing UX, and practical operational tooling.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Automation"],
    link: "https://wondertailor.com/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "proj2",
    title: "Benji the Bear",
    description: "Interactive gifting and messaging platform with Honey Drop wallet flows, public profiles, leaderboard rewards, digital messages, and physical gift delivery experiences.",
    technologies: ["React", "Next.js", "Payments", "User Profiles", "Responsive UI"],
    link: "https://benjithebear.com/",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "proj3",
    title: "CallForge AI Outbound",
    description: "AI outbound call center concept that dials, qualifies, books, transfers, summarizes, and tracks campaign performance from one operator dashboard.",
    technologies: ["Next.js", "AI Workflows", "Dashboard UI", "Campaign Analytics", "Automation"],
    link: "https://ai-outbound-call-center.vercel.app/",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: "proj4",
    title: "Fit Ops",
    description: "Gym management SaaS for Pakistani gyms covering members, billing, attendance, inventory, asset maintenance, reports, ledger, and role-based access.",
    technologies: ["Next.js", "SaaS", "Admin Dashboard", "Billing", "Reports"],
    link: "https://fit-ops.vercel.app/",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "proj5",
    title: "Onyx Saloon Tools",
    description: "Salon operations toolkit for managing appointment-heavy workflows, service coordination, and daily business activity in a clean web interface.",
    technologies: ["React", "Next.js", "Operations UI", "Scheduling", "Business Tools"],
    link: "https://onyx-saloon-tools.vercel.app/",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "proj6",
    title: "Learnity App",
    description: "Learning platform experience for student data, credentials, learning ability screeners, progress visibility, and parent/teacher guidance workflows.",
    technologies: ["Next.js", "EdTech", "Role-Based UX", "Data Upload", "Learning Tools"],
    link: "https://learnity-app.vercel.app/",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop"
  }
];

// Placeholder testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Obaid Sabir",
    role: "Project Head",
    company: "Avialdo Solutions",
    text: "I’m excited to give a shout-out to Salman Ali, a true Avialdo Trailblazer. In such a short time, I’ve watched him take on every challenge head-on. He never hesitates to step up, whether it’s leading juniors or tackling a tough task. No matter what comes his way, Salman is ready to jump in and make things happen. What really stands out is his positive attitude and the way he supports the team. It’s inspiring to everyone around him, including me. Proud to have him on the team and looking forward to seeing all the great things he’ll accomplish next. 👏🚀"
  },
  {
    id: "t2",
    name: "Syed Ibrahim",
    role: "Software Engineer",
    company: "Avialdo Solutions",
    text: "Its always a pleasure working with you, as you are extremely professional and always ready to lend a helping hand. Heavy Developer :')"
  },
  {
    id: "t3",
    name: "Martin Jhon",
    role: "CTO",
    company: "Upwork",
    text: "Second time hired Salman. Communication was easy. Actively suggested his vision and ideas for better overall success. We managed to apply some his good ideas in the project and i love it. Answering quickly and definitely open conversation on his side"
  }
];

export const FAQS = [
  {
    question: "What is your primary tech stack?",
    answer: "I specialize in React, Next.js, TypeScript, and Tailwind CSS on the frontend, with Node.js, Django, FastAPI, PostgreSQL, and MySQL on the backend."
  },
  {
    question: "Are you available for freelance work?",
    answer: "Yes. I am open to product builds, automation-heavy workflows, dashboard work, and ongoing frontend/full-stack engineering support."
  },
  {
    question: "Can you build automation and AI workflows?",
    answer: "Yes. I build Python/Bash scripts, browser automation with Playwright and Selenium, n8n/Zapier/Make workflows, and LLM API integrations for repetitive business processes."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines depend on scope. Focused landing pages and prototypes can move quickly, while dashboards, SaaS products, and automation systems usually need phased delivery with clear milestones."
  }
];
