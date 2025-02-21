interface ProjectLink {
  name: string;
  href: string;
  iconClass: string;
}

interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <div class="px-6 py-6">
        <img 
          class="w-full h-48 object-cover rounded"
          src={project.image} 
          alt={project.name}
        />
      </div>
      <div class="px-6 py-2 pt-0">
        <div class="font-bold text-xl mb-2">{project.name}</div>
        <p class="text-gray-700 text-base">
          {project.description}
        </p>
      </div>
      
      <div class="px-6 py-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div class="px-6 pb-4">
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mr-4 text-gray-600 hover:text-gray-900"
          >
            <div class="flex gap-1 items-center bg-black rounded-lg text-white text-sm px-2 py-1">
              <i class={link.iconClass}></i>
              {link.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
