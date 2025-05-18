export type Project = {
  id: string;
  image: string;
  githubLink: string;
  demoLink: string;
  tags?: string[];
  category: 'nextjs' | 'mern';
};

export const projects: Project[] = [
  {
    id: "project1",
    githubLink: "https://github.com/Ankit99925/MarketPlace-MERN-APP",
    demoLink: "https://marketplace-mern-app-f1.onrender.com",
    image: "/images/marketplace-1.png",
    category: "mern",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "TailwindCSS"],
  },
  {
    id: "project2",
    githubLink: "https://github.com/Ankit99925/CodeBot-MERN-APP",
    demoLink: "#",
    image: "/images/codebot-1.png",
    category: "mern",
    tags: ["React", "Node.js", "Google API", "Express", "MongoDB", "TailwindCSS"],
  },
  {
    id: "project3",
    githubLink: "https://github.com/Ankit99925/MERN-Blog-APP",
    demoLink: "#",
    image: "/images/blog-1.png",
    category: "mern",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "TailwindCSS"],
  },
  {
    id: "project4",
    githubLink: "https://github.com/Ankit99925/MERN-CURRENCY-EX-APP",
    demoLink: "#",
    image: "/images/currency-1.png",
    category: "mern",
    tags: ["React", "API Integration", "Node.js", "Express", "TailwindCSS"],
  },
];
