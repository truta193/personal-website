import { Experience } from "../types.ts";
import FitIcon from "./FitIcon.tsx";

interface TimelineItemProps {
  experience: Experience;
}

export function TimelineItem({ experience }: TimelineItemProps) {
  const { name, href, title, logo, start, end, description, links } =
    experience;

  return (
    <li class="relative ml-10 py-4">
      <a
        href={href}
        target="_blank"
        class="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <div class="size-12 border rounded-full overflow-hidden">
          <FitIcon name={logo} />
        </div>
      </a>

      <div class="flex flex-1 flex-col justify-start gap-1">
        {start && (
          <time class="text-xs text-gray-500">
            <span>{start}</span>
            <span>-</span>
            <span>{end ? end : "Present"}</span>
          </time>
        )}
        <h2 class="font-semibold leading-none">{name}</h2>
        {title && <p class="text-sm text-gray-500">{title}</p>}
        {description && (
          <ul class="ml-4 list-outside list-disc">
            {description.map((desc) => (
              <li class="prose pr-8 text-sm">{desc}</li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div class="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links.map((link) => (
            <a href={link.href} class="inline-flex items-center">
              <span class="inline-flex items-center gap-2 rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold">
                <FitIcon name={link.icon} />
                {link.name}
              </span>
            </a>
          ))}
        </div>
      )}
    </li>
  );
}
