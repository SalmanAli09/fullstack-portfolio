import { Experience, Education, Project, SkillCategory, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: "Muhammad Salman Ali",
  role: "FullStack Engineer | JavaScript Developer",
  email: "msalmanali7890@gmail.com",
  phone: "03099876366",
  location: "Karachi, Pakistan",
  linkedin: "https://linkedin.com/in/salman-ali-37279b22a",
  github: "https://github.com/SalmanAli09",
  portfolio: "https://salman-ali.netlify.app",
  summary: "A meticulous web developer who has been studying frontend for over a year, is passionate about designing flexible websites, and firmly believes in the mobile-first strategy. I'm an enthusiastic learner who is constantly eager to experiment with new technologies and work in various fields."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Frontend Engineer",
    company: "Avialdo Solutions",
    period: "12/2024 - Present",
    location: "Karachi, Pakistan",
    description: [
      "Working on product that is built on Next.js.",
      "Adding features and updating the User Interface to ensure seamless user experience."
    ]
  },
  {
    id: "exp2",
    role: "Frontend Developer",
    company: "A Tech Sight LLC",
    period: "08/2023 - 11/2024",
    location: "Karachi, Pakistan",
    description: [
      "Worked on real-world projects using cutting-edge technologies.",
      "specialized in React.js and Next.js development."
    ]
  },
  {
    id: "exp3",
    role: "ReactJs Developer",
    company: "Khas Technologies",
    period: "01/2023 - 08/2023",
    location: "England, United Kingdom (Remote)",
    description: [
      "Worked on client projects using Next.js and Tailwind CSS.",
      "Created comprehensive dashboards and worked on core product features."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Science in Computer Science",
    institution: "Virtual University",
    period: "04/2024 - Present",
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
    skills: ["React.js", "Next.js", "React Native", "Redux Toolkit", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend & DB",
    skills: ["Node.js", "Express.js", "NestJS", "MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Rest APIs"]
  }
];

// Inferred projects based on experience description
export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "SaaS Analytics Dashboard",
    description: "A comprehensive dashboard for monitoring business metrics, built for Khas Technologies clients. Features real-time data visualization and user management.",
    technologies: ["Next.js", "Tailwind CSS", "Recharts", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "proj2",
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution with cart functionality, payment gateway integration, and inventory management.",
    technologies: ["React.js", "Redux Toolkit", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: "proj3",
    title: "Corporate Landing Page",
    description: "A high-performance, mobile-first landing page designed to increase conversion rates for A Tech Sight LLC clients.",
    technologies: ["Next.js", "GSAP", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: "proj4",
    title: "Real Estate Portal",
    description: "A property listing application with advanced filtering, map integration, and virtual tour capabilities.",
    technologies: ["Next.js", "Leaflet", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
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
    answer: "I specialize in the JavaScript ecosystem, primarily working with React, Next.js, TypeScript, and Tailwind CSS. For backend, I use Node.js and Express."
  },
  {
    question: "Are you available for freelance work?",
    answer: "Yes, I am currently open to new projects and freelance opportunities. I love taking on challenging problems and building sleek user interfaces."
  },
  {
    question: "Do you handle UI/UX Design?",
    answer: "While my main focus is FullStack Engineering, I have a strong eye for design and can create clean, mobile-first interfaces. I often collaborate with designers to bring complex visions to life."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by project scope. A standard landing page might take 3-5 days, while complex web applications can take several weeks. I prioritize quality and clear communication throughout the process."
  }
];