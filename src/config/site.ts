export type Project = {
  title: string;
  blurb: string;
  story?: string;
  caseStudy?: {
    title: string;
    screenshot: { src: string; alt: string; caption: string; width: number; height: number };
    steps: { label: string; detail: string }[];
    sources: { label: string; href: string }[];
    publication?: { title: string; href: string; citation: string; doi: string };
  };
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  imageAlt?: string;
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
    "Co-authored an IEEE conference paper on AI in education and recruitment",
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
      image: "/project-images/dukanpe-banner.webp",
      imageAlt: "Dukanpe’s mobile bookkeeping dashboard beside its blue app icon.",
      blurb:
        "A mobile bookkeeping assistant for Indian retailers. It turns WhatsApp orders into invoices and answers questions about customer balances in Hindi and English.",
      story:
        "Customers can send a payment screenshot more than once. I made the shopkeeper’s confirmation the point where the invoice is settled. Here’s what the payment test checks for a ₹120 rice order.",
      caseStudy: {
        title: "How one payment becomes one receipt",
        screenshot: {
          src: "/project-images/dukanpe-payment-review.webp",
          alt: "Dukanpe shows ₹120 under review with the invoice amount, merchant UPI ID, and payment success text found in the screenshot.",
          caption: "The test invoice still shows ₹120 due at this stage.",
          width: 644,
          height: 492,
        },
        steps: [
          { label: "Screenshot", detail: "The first submission opens a review. Resending it leaves ₹120 due." },
          { label: "Confirmation", detail: "The shopkeeper checks the transfer and confirms receipt. The balance falls to ₹0." },
          { label: "Repeat confirmation", detail: "The balance stays at ₹0, and the ledger still contains one receipt." },
        ],
        sources: [
          { label: "Read the payment test", href: "https://github.com/muqeet1001/dukanpe/blob/a3e5e7d1858ecc3cde2620e70f96ec774a67d55b/server/test/payments.test.js#L50-L66" },
        ],
      },
      stack: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB", "Groq"],
      year: "2026",
      links: { source: "https://github.com/muqeet1001/dukanpe" },
      categories: ["Mobile"],
    },
    {
      title: "Student OS",
      // The sign-in artwork uses Media Hopper Studio's campus film (Pixabay 256696).
      image: "/project-images/student-os-banner.webp",
      imageAlt: "Students walking toward a library behind the Student OS motto, “Learn. Build. Become.”",
      blurb:
        "A campus placement platform. Students get a four-week preparation plan and mentor feedback. Placement teams match candidates to jobs and track them through interviews and offers.",
      story:
        "I used the gaps behind the readiness score to choose practice tasks. A test profile targeting software engineering scores 35/100 across five areas. Its results shape the four weeks below.",
      caseStudy: {
        title: "What comes after a score of 35/100?",
        screenshot: {
          src: "/project-images/student-os-readiness.webp",
          alt: "Student OS readiness score of 35/100, with skills at 17%, coding at 20%, résumé at 40%, interview at 70%, and projects at 40%.",
          caption: "The Student OS dashboard with its public test profile.",
          width: 660,
          height: 428,
        },
        steps: [
          { label: "Week 1", detail: "Take the object-oriented programming assessment. It’s the first missing skill for the target role." },
          { label: "Week 2", detail: "Aim for 34 solved problems. The plan uses the 100-problem gap between 20 solved and the role’s target of 120." },
          { label: "Week 3", detail: "Add a second project to the profile and quantify a result." },
          { label: "Week 4", detail: "Complete a mock interview and reach 70%. This profile already meets the score target." },
        ],
        sources: [
          { label: "See the test profile", href: "https://github.com/muqeet1001/Student_OS/blob/ea4b7db08ba6d10d983dfb08859c34c9ce7dc81c/server/tests/readiness.test.js#L6-L32" },
          { label: "Read the plan logic", href: "https://github.com/muqeet1001/Student_OS/blob/ea4b7db08ba6d10d983dfb08859c34c9ce7dc81c/server/src/services/roadmap.service.js#L25-L154" },
        ],
        publication: {
          title: "AI-Driven Systems for Education and Recruitment: Technologies, Applications, and Emerging Trends",
          href: "https://ieeexplore.ieee.org/document/11708130",
          citation: "Co-author · AIKIIE 2026 · pp. 1–7",
          doi: "10.1109/AIKIIE69997.2026.11708130",
        },
      },
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
