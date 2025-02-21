import ProjectCard from "./ProjectCard.tsx";
import projectsData from "../data/projects.json" with { type: "json" };

interface ProjectsProps {
  limit?: number;
}

export default function ProjectsLimit({ limit }: ProjectsProps) {
  const projectsToShow = limit
    ? projectsData.projects.slice(0, limit)
    : projectsData.projects;

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projectsToShow.map((project, id) => (
        <ProjectCard key={id} project={project} />
      ))}
    </section>
  );
}
