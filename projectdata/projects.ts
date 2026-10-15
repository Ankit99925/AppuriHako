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
];
