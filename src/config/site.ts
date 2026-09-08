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
  categories?: ("Data" | "Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
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
  url: "",
  quote: { text: "", author: "" },
  profileImages: ["/dp_2.jpg"],
  bannerImage: "/images/cover.jpg",
  socialBannerImage: "/social-banner.png",
  initials: "AM",
  role: "Full Stack Engineer | AI Developer",
  location: "Bangalore, India",
  timezone: "Asia/Kolkata",
  email: "abdul00muqeet@gmail.com",
  greeting: "Hey, I'm Abdul",
  tagline:
    "I build scalable full-stack applications with AI integration, specializing in MERN stack and modern AI technologies.",
  about: [
    "I am a final-year BTech Computer Science student at HKBK College of Engineering, Bangalore, with a SGPA of 7.8/10. I specialize in Full Stack Development and AI integration, building scalable web applications that leverage modern technologies.",
    "My expertise spans the complete MERN stack, AI/LLM integration with RAG pipelines and vector databases, real-time systems using WebSockets, and edge computing with Cloudflare Workers. I'm passionate about creating efficient, scalable solutions that solve real-world problems.",
    "I'm a proven winner with achievements including 1st place at IEEE Technovate-2K25 (Team Lead), Smart India Hackathon winner (Full Stack Developer), and IEEE Day Competition winner (Frontend Developer). I'm currently seeking internships and collaborative projects to further expand my skills.",
  ],
  tldr: [
    "Winner at IEEE Technovate-2K25",
    "Full Stack MERN + AI Integration Specialist",
    "Built AI agents with RAG & Vector Databases",
    "Real-time systems with WebSockets",
    "Edge computing with Cloudflare Workers",
    "Strong in DSA & Problem Solving",
  ] as string[],
  status: {
    available: true,
    availableText: "Open to internships and collaborative projects",
    nowLearning: "System Design & Advanced AI Architectures",
    nowBuilding: "AI-powered trading platform",
    nowListening: "",
  },
  socials: {
    github: "https://github.com/muqeet1001",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/abdul-muqeet-601242280/",
    email: "mailto:abdul00muqeet@gmail.com",
    resume:
      "https://drive.google.com/file/d/your-resume-id/view",
    discord: "",
    medium: "",
  },
  experience: [] as Job[],
  projects: [
    {
      title: "AI Trading Platform",
      blurb:
        "Full-stack MERN trading platform with real-time buy/sell functionality, portfolio tracking, secure authentication, and WebSocket integration for live market updates.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "REST APIs"],
      year: "2024",
      links: { source: "https://github.com/muqeet1001/ai-trading-platform" },
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      status: "Live",
      categories: ["Fullstack"],
      featured: true,
    },
    {
      title: "AI Agent Framework",
      blurb:
        "Autonomous AI system with memory, reasoning, and tool integration. Features RAG pipeline, vector database, and context-aware responses with modular architecture for scalable AI workflows.",
      stack: ["OpenAI API", "Node.js", "Vector DB", "RAG", "JavaScript", "LLM"],
      year: "2024",
      links: { source: "https://github.com/muqeet1001/ai-agent-framework" },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      status: "Live",
      categories: ["Backend", "Fullstack"],
      featured: true,
    },
    {
      title: "Cloudflare Workers Edge Backend",
      blurb:
        "Serverless APIs deployed on edge for low-latency execution. Implements routing, caching, and secure request handling for scalable backend services.",
      stack: ["Cloudflare Workers", "JavaScript", "REST APIs", "Edge Computing"],
      year: "2024",
      links: { source: "https://github.com/muqeet1001/cloudflare-workers" },
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
      status: "Live",
      categories: ["Backend"],
    },
  ] as Project[],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "WebSockets",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "OpenAI API",
    "LLM Integration",
    "RAG",
    "Vector Databases",
    "AI Agents",
    "Git",
    "GitHub",
    "Docker",
    "CI/CD",
    "Linux",
    "Bash",
    "Jest",
    "Cypress",
    "Postman",
    "Cloudflare Workers",
  ],
  writing: [] as Post[],
  github: { username: "muqeet1001", contributionsLastYear: "" },
  footerNote: "Built with React + TypeScript + AI",
} as const;

export type Site = typeof site;
