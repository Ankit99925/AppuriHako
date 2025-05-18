import Hero from "@/components/hero/hero";
import ProjectCard from "@/components/ui/projectCard";
import Separator from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { projects } from "../../../projectdata/projects";

export default function Home() {
  const commonT = useTranslations("common");
  const projectsT = useTranslations("projects");
  const nextjsProjects = projects.filter((project) => project.category === "nextjs");
  const mernProjects = projects.filter((project) => project.category === "mern");

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="flex flex-col gap-12">
        {/* Hero section - full width */}
        <Hero title={commonT("hero.title")} description={commonT("hero.description")} />

        {/* NextJS Projects */}
        <section className="w-full">
          <Separator title={commonT("heading.title1")} />
          {nextjsProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center">
              {nextjsProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={projectsT(`${project.id}.title`)}
                  description={projectsT(`${project.id}.description`)}
                  tags={project.tags || []}
                  image={project.image}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl font-semibold text-gray-400">{projectsT("noProjects")}</p>
              <div className="mt-4">
                <span className="inline-block animate-bounce text-4xl">🚀</span>
              </div>
            </div>
          )}
        </section>

        {/* MERN Projects */}
        <section className="w-full">
          <Separator title={commonT("heading.title2")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center">
            {mernProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={projectsT(`${project.id}.title`)}
                description={projectsT(`${project.id}.description`)}
                tags={project.tags || []}
                image={project.image}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
