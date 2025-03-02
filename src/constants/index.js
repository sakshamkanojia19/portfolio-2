import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";


export const HERO_CONTENT = `Full-Stack Developer | Automation Tester | Data Analyst

   I specialize in building scalable, user-centric applications using React.js, Next.js, Node.js, Express.js, and MongoDB, with expertise in modern UI frameworks like Material-UI and Tailwind CSS. My automation testing skills in Selenium and Jest ensure bug-free deployments, while my data analysis proficiency in Excel, Power BI, and Python drives data-driven decision-making. Passionate about blockchain and cybersecurity, I thrive on solving complex challenges and delivering high-quality, impactful solutions.`
export const EXPERIENCES = [
  {
    year: "Dec 2024 - Jan 2025",
    role: "Web Developer Internship",
    company: "Oasis Infobyte",
    description: `Developing Projects using MERN Stack.`,
    technologies: ["MERN","React","JavaScript","Web API","Restful API","MongoDB","Node.js","Express.js","Tailwind Css"],
  },{
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
    title: "AI-ChatBot",
    image: project1,
    description:
      "Launched a Next.js-based AI chatbot SaaS platform for seamless user site integration, increasing engagement by 40%. Optimized performance by 30% through faster builds, efficient delivery, and automated testing.",
    technologies:["HTML","CSS","Javascript","TypeScript","Next.js","ShadCN","API","Gemini AI","AI","Framer Motion"],
      link:"https://botic-ai-chatbot.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Launched a personal portfolio website to showcase design projects, increasing client and employer engagement by 40%. Enhanced performance by 30% using Vite for faster builds and optimized delivery.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Vite","Framer motion"],
    link:"https://portfolio-2-sk.vercel.app/"
  },
  {
    title: "Modern Real Estate Website",
    image: project3,
    description:
      "Deployed a responsive real estate platform allowing users to search and book properties. Integrated advanced search filters, location services with Leaflet, and user authentication with Auth0, reducing customer search time by 30% and increasing platform feasibility by 45%. Automation testing with Selenium improved fault tolerance by 20%.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Selenium",
      "MongoDB",
      "Prisma",
      "Mantine UI",
      "MERN stack",
    ],
    link:"https://sk-homes-phi.vercel.app/"
  },
  {
    title: "Decentralized Cryptocurrency Exchange DApp",
    image: project2,
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
