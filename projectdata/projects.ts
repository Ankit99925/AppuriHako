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
    demoLink: "https://marketplace.appurihako.jp.net",
    image: "/images/marketplace-1.png",
    category: "mern",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "TailwindCSS"],
  },
  {
    id: "project2",
    githubLink: "https://github.com/Ankit99925/CodeBot-MERN-APP",
    demoLink: "https://codebot.appurihako.jp.net",
    image: "/images/codebot-1.png",
    category: "mern",
    tags: ["React", "Node.js", "Google API", "Express", "MongoDB", "TailwindCSS"],
  },
  {
    id: "project3",
    githubLink: "https://github.com/Ankit99925/MERN-Blog-APP",
    demoLink: "https://blog.appurihako.jp.net",
    image: "/images/blog-1.png",
    category: "mern",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "TailwindCSS"],
  },
  {
    id: "project4",
    githubLink: "https://github.com/Ankit99925/MERN-CURRENCY-EX-APP",
    demoLink: "https://currency.appurihako.jp.net",
    image: "/images/currency-1.png",
    category: "mern",
    tags: ["React", "API Integration", "Node.js", "Express", "TailwindCSS"],
  },
];
