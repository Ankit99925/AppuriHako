import Hero from "@/components/hero/hero";
import Infrastructure from "@/components/infrastructure/infrastructure";
import ProjectCard from "@/components/ui/projectCard";
import Separator from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { projects } from "../../../projectdata/projects";


export default function Home() {
  const commonT = useTranslations("common");
  const projectsT = useTranslations("projects");

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="flex flex-col gap-12">
        <Hero
          name={commonT("hero.name")}
          title={commonT("hero.title")}
          body={commonT("hero.body")}
          badges={commonT.raw("hero.badges") as string[]}
        />

        <Infrastructure />

        {/* Projects */}
        <section className="w-full">
          <Separator title={commonT("projects.title")} />
          <p className="text-center text-base md:text-lg opacity-90 mt-6 max-w-2xl mx-auto">
            {commonT("projects.intro")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center">
            {projects.map((project) => (
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
