import { Experience } from "../types.ts";
import { TimelineItem } from "./TimelineItem.tsx";

interface TimelineProps {
  experience: Experience[];
}

export default function Timeline({ experience }: TimelineProps) {
  return (
    <div class="rounded-xl border bg-white shadow">
      <div class="p-0">
        <ul class="ml-10 border-l">
          {experience.map((exp, index) => (
            <TimelineItem key={index} experience={exp} />
          ))}
        </ul>
      </div>
    </div>
  );
}
