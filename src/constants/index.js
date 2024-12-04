import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in React.js, Material-UI, Node.js, Express.js, and MongoDB. I specialize in creating efficient, user-friendly web applications and have a strong interest in blockchain and cybersecurity. My goal is to build secure, innovative systems while contributing to impactful projects, continuously learning, and delivering high-quality solutions that meet both user and business needs.`
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Feb 2024",
    role: "Generative AI & Data Science Trainee",
    company: "IBM SkillBuild",
    description: `Explored Generative AI with a focus on prompt engineering and advanced techniques. Developed insightful data visualizations using Data Science principles and tools like R and RStudio, enhancing analytical capabilities.`,
    technologies: ["R", "RStudio", "Data Science", "Generative AI"],
  },
  {
    year: "Sep 2023 - Nov 2023",
    role: "Cybersecurity & Ethical Hacking Intern",
    company: "Rinex.ai",
    description: `Executed key cybersecurity tasks such as data gathering, vulnerability analysis, and network sniffing. Performed penetration testing using tools like NMAP, Wireshark, Zap, and Metasploit, ensuring secure coding standards. Conducted detailed vulnerability assessments and generated actionable reports using Zap.`,
    technologies: ["NMAP", "Wireshark", "Burp Suite", "Zap", "Metasploit"],
  },
  {
    year: "2023 - 2024",
    role: "Major Project Lead (Decentralized Cryptocurrency Exchange DApp)",
    company: "College Final Year Project",
    description: `Led the development of a decentralized cryptocurrency exchange platform, focusing on seamless MetaMask wallet integration and optimized transaction management. Implemented token slippage functionality and enhanced swapping efficiency through Agile methodologies.`,
    technologies: [
      "React.js",
      "Node.js",
      "Solidity",
      "Tailwind",
      "Ethereum Blockchain",
    ],
  },
];


export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "Launched a personal portfolio website to showcase design projects, increasing client and employer engagement by 40%. Enhanced performance by 30% using Vite for faster builds and optimized delivery.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Vite","Framer motion"],
    link:"https://portfolio-2-sk.vercel.app/"
  },
  {
    title: "Modern Real Estate Website",
    image: project2,
    description:
      "Deployed a responsive real estate platform allowing users to search and book properties. Integrated advanced search filters, location services with Leaflet, and user authentication with Auth0, reducing customer search time by 30% and increasing platform feasibility by 45%. Automation testing with Selenium improved fault tolerance by 20%.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "SQL",
      "MongoDB",
      "Prisma",
      "Mantine UI",
      "MERN stack",
    ],
    link:"https://sk-homes-phi.vercel.app/"
  },
  {
    title: "Decentralized Cryptocurrency Exchange DApp",
    image: project3,
    description:
      "Developed a decentralized cryptocurrency exchange platform with MetaMask wallet integration, improving user experience and reducing transaction time by 20%. Implemented token slippage functionality, optimizing trade fluctuation management by 15%, and enhanced swapping efficiency by 25% using Agile methodologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "API",
      "Finance",
      "Solidity",
      "Ant-Design",
      "Tailwind",
      "Ethereum Blockchain",
    ],
    link:"https://bit-exchangex.netlify.app/"
  },
];


export const CONTACT = {
  address: "Delhi, India",
  phoneNo: "+91 9310277188",
  email: "sakshamkanojia2002@gmail.com",
};
