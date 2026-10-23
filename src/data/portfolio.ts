export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  subtitle?: string;
  issuer: string;
  year: string;
  image?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Amged Badawy",
    fullName: "Amged Ibrahim Mohamed Badawy",
    role: "Junior Frontend Developer",
    location: "Nasr City, Cairo, Egypt",
    email: "amgedbadawy04@gmail.com",
    phone: "+20 114 464 9776",
    whatsappUrl: "https://wa.me/201144649776",
    linkedinUrl: "https://www.linkedin.com/in/amged-badawy-7a48b1177/",
    githubUrl: "https://github.com/AmgadBadawy",
    cvUrl: "/AmgedBadawy-CV.pdf",
    availability: "Available for Junior Frontend Roles",
    summary:
      "Junior Frontend Developer and Computer Science graduate focused on building responsive web interfaces with React, Next.js, and TypeScript. Passionate about crafting reusable UI components, clear user flows, Arabic right-to-left (RTL) layouts, and maintainable, accessible code.",
  },

  skillCategories: [
    {
      category: "Frameworks & Styling",
      skills: [
        "React.js",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5 & CSS3",
      ],
    },
    {
      category: "UI & Frontend Architecture",
      skills: [
        "Component-Based Architecture",
        "Responsive & Mobile-First UI",
        "Arabic RTL Layouts",
        "Reusable Components",
        "React Hooks & State",
        "Repository / Data Abstraction",
        "Accessibility (a11y)",
        "SEO Metadata & Sitemaps",
      ],
    },
    {
      category: "Data & Tools",
      skills: [
        "REST APIs & Fetch",
        "Supabase",
        "PostgreSQL Fundamentals",
        "Git & GitHub",
        "Vercel Deployment",
        "Vitest",
        "ESLint",
        "Browser DevTools",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      title: "Masar",
      subtitle: "Government Services Guide",
      badge: "Featured Project",
      description:
        "An Arabic-first RTL platform explaining government service requirements, step-by-step procedures, responsible authorities, and official sources.",
      highlights: [
        "Implemented instant service search, category browsing, and dedicated service pages in a fully responsive RTL layout.",
        "Organized data through a clean repository abstraction layer with comprehensive loading, error, and not-found states.",
        "Optimized page metadata, semantic structure, and visual hierarchy for seamless citizen navigation.",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "RTL Design",
      ],
      liveUrl: "https://masar-frontend-ten.vercel.app/",
      githubUrl: "https://github.com/AmgadBadawy",
      image: "/projects/masar.png",
    },
    {
      title: "FlowDesk",
      subtitle: "Workflow Productivity Interface",
      badge: "Frontend UI",
      description:
        "A responsive web interface designed for a modern workflow-productivity platform with clear content hierarchy and intuitive navigation.",
      highlights: [
        "Crafted a clean, distraction-free layout using semantic HTML5 and modern CSS Grid/Flexbox techniques.",
        "Engineered smooth interactive UI states and responsive navigation across desktop and mobile viewports.",
      ],
      techStack: [
        "HTML5",
        "Modern CSS3",
        "JavaScript",
        "Responsive Design",
        "UI/UX",
      ],
      liveUrl: "https://flow-desk-rho-ten.vercel.app/",
      githubUrl: "https://github.com/AmgadBadawy",
      image: "/projects/flowdesk.png",
    },
    {
      title: "Budgetly",
      subtitle: "Smart Home Budget Management System",
      badge: "Graduation Project",
      description:
        "An AI-assisted personal finance and household budgeting system featuring income tracking, automated expense categorization, bill reminders, and personalized dietary recommendations tailored to food budgets.",
      highlights: [
        "Contributed to Frontend & ML modules, integrating smart dietary recommendations based on user income and food preferences.",
        "Designed intuitive user flows for monthly budget limits, savings goals, and visual expense analytics.",
      ],
      techStack: [
        "Frontend & ML",
        "System Architecture",
        "User Flows",
        "Python & Data Analysis",
      ],
      image: "/projects/budgety.png",
    },
  ] as Project[],

  education: {
    degree: "Bachelor's Degree in Computer Science",
    institution:
      "Faculty of Computers and Information Sciences, Mansoura University",
    year: "2024",
  },

  certifications: [
    {
      title: "Frontend Engineering with React",
      subtitle: "Professional Frontend Track",
      issuer: "Manara",
      year: "2025",
      image: "/certificates/manara.png",
    },
    {
      title: "Front End Web Development",
      subtitle: "HTML5, CSS3, JavaScript, Bootstrap, ReactJS",
      issuer: "CCIC — Faculty of Computers & Information, Mansoura University",
      year: "2023",
      image: "/certificates/ccic.png",
    },
    {
      title: "Comprehensive English Language — Phase 2",
      subtitle: "Advanced Language & Communication Track",
      issuer: "COURSSAT.com (The UK)",
      year: "2024",
      image: "/certificates/english-course2.png",
    },
    {
      title: "Comprehensive English Language — Phase 1",
      subtitle: "Foundational Language Track",
      issuer: "COURSSAT.com (The UK)",
      year: "2024",
      image: "/certificates/english-course1.png",
    },
  ] as Certification[],
};
