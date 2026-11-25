export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: string[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  blurb: string;
  highlights: string[];
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export const site = {
  name: "Abdul Muqeet",
  firstName: "Abdul",
  url: "https://muqeet-portfolio-alpha.vercel.app/",
  quote: { text: "", author: "" },
  profileImages: ["/dp_2.jpg"],
  bannerImage: "/images/cover.jpg",
  socialBannerImage: "/social-banner.png",
  initials: "AM",
  role: "Full Stack Engineer",
  location: "Bangalore, India",
  timezone: "Asia/Kolkata",
  email: "abdul00muqeet@gmail.com",
  greeting: "Hey, I'm Abdul",
  tagline:
    "I'm a full stack engineer in Bangalore. I build web and mobile tools for people running shops, preparing for placements, and trading on Solana.",
  about: [
    "I'm Abdul, a full stack engineer in Bangalore studying computer science at HKBK College of Engineering.",
    "At Twinnie, I automated part of the 3D garment creation process and built voice guidance that helps people adjust their pose during a mobile body scan. At SoulWallet, I worked with designers and backend engineers on the wallet screens people use to trade on Solana.",
    "I built Dukanpe for shopkeepers who need to see which invoices are still unpaid, and Student OS for students and placement teams preparing for campus recruitment.",
  ],
  tldr: [
    "Led the first-place team at Technovate-2K25",
    "Published an IEEE conference paper on Student OS",
    "Built a bookkeeping assistant in Hindi and English",
    "Cut 3D garment production from a day to about 30 minutes",
  ] as string[],
  status: {
    available: true,
    availableText: "Open to internships and collaborative projects",
    nowLearning: "System Design & Advanced AI Architectures",
    nowBuilding: "3D garment creation tools",
    nowListening: "",
  },
  socials: {
    github: "https://github.com/muqeet1001",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/abdul-muqeet-601242280/",
    email: "mailto:abdul00muqeet@gmail.com",
    resume: "/Abdul_Muqeet_Resume.pdf",
    discord: "",
    medium: "",
  },
  experience: [
    {
      company: "Twinnie",
      role: "Software Engineer",
      period: "Oct 2026 – Dec 2026 (expected)",
      location: "Remote · US startup",
      blurb: "I automated 3D garment creation, bringing production costs down from $150–$300 to $15–$30 per garment and cutting production time from one day to about 30 minutes.",
      highlights: [
        "I built real-time voice guidance for mobile body scans so users could adjust their pose or step back into frame during capture.",
        "Twinnie hired me as a software engineer after a 14-day freelance contract.",
      ],
    },
    {
      company: "SoulWallet",
      role: "Frontend Developer",
      period: "Feb 2026 – Aug 2026",
      location: "Bangalore, India",
      blurb: "I designed and built responsive wallet screens for a Solana trading platform, focusing on layout and navigation.",
      highlights: [
        "I worked with designers and backend engineers to connect those screens to application data through APIs.",
      ],
    },
  ] as Job[],
  achievements: [
    "Led the team that won first place at Technovate-2K25, the IEEE National Level Technical Symposium.",
    "Won the Smart India Hackathon (SIH) internal hackathon as a full stack developer.",
    "Won first place in the IEEE Day Frontend/UI-UX Competition as a frontend developer.",
    "Selected as a developer for an official internal college project.",
  ],
  education: [
    {
      institution: "HKBK College of Engineering",
      qualification: "B.Tech in Computer Science and Engineering",
      result: "SGPA 7.8/10",
      location: "Bangalore, India",
      period: "Aug 2023 – Present",
    },
    {
      institution: "Huda National College",
      qualification: "Secondary Education (Science)",
      result: "83%",
      location: "Bangalore, India",
      period: "Jan 2020 – Jul 2023",
    },
  ],
  certifications: [
    {
      course: "DevOps, AI, and Full Stack Bootcamp",
      provider: "100xSchool",
      topics: "MERN stack, AI integration, DevOps, TypeScript, and system design",
    },
    {
      course: "Complete React and Next.js Course with AI Projects",
      provider: "Udemy",
      topics: "React, Next.js, full stack development, and AI integration",
    },
  ],
  projects: [
    {
      title: "Dukanpe",
      blurb:
        "A mobile bookkeeping assistant for Indian retailers. Shopkeepers turn confirmed WhatsApp orders into invoices and track what each customer owes.",
      story:
        "When a shopkeeper confirms a payment, Dukanpe matches it to the invoice and updates the customer’s balance once. A Hindi and English assistant answers questions about orders and balances and links each answer to the underlying records.",
      stack: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB", "Groq"],
      year: "2026",
      links: { source: "https://github.com/muqeet1001/dukanpe" },
      categories: ["Mobile"],
    },
    {
      title: "Student OS",
      blurb:
        "A placement platform that helps engineering students assess their readiness across five areas and build a four-week preparation plan.",
      story:
        "Placement teams match students to company requirements and track candidates from shortlisting and interviews through offers and joining. Students can ask mentors to review their résumés and projects, then follow up in the same conversation. I published an IEEE conference paper on Student OS.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      year: "2026",
      links: { source: "https://github.com/muqeet1001/Student_OS" },
      categories: ["Web"],
    },
  ] as Project[],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "REST APIs",
    "WebSockets",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "OpenAI API",
    "RAG",
    "Vector Databases",
    "Git",
    "Docker",
    "CI/CD",
    "Jest",
    "Cypress",
  ],
  writing: [] as Post[],
  github: { username: "muqeet1001", contributionsLastYear: "" },
  footerNote: "Built with React + TypeScript + AI",
} as const;

export type Site = typeof site;
