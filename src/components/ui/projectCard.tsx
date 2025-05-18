import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  githubLink: string;
  demoLink: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, githubLink, demoLink }) => {
  const t = useTranslations('projectCards');

  return (
    <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-sm hover:shadow-md transition-all duration-300">
      <figure className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          width={300}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">
          {title}
        </h2>
        <p className="text-sm text-opacity-90 line-clamp-3">{description}</p>
        <div className="card-actions justify-end flex-wrap">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-outline text-xs">{tag}</div>
          ))}
        </div>
        <div className="card-actions justify-between flex-wrap mt-4 pt-2 border-t">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline flex items-center gap-2"
          >
            <FaGithub className="text-lg" />
            <span>{t('viewGithub')}</span>
          </a>

          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline flex items-center gap-2"
          >
            <FaExternalLinkAlt className="text-lg" />
            <span>{t('viewDemo')}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard