import { useState } from "preact/hooks";
import Timeline from "../components/Timeline.tsx";
import { Experience } from "../types.ts";

interface TabIslandProps {
  work: Experience[];
  education: Experience[];
}

export default function TabIsland({ work, education }: TabIslandProps) {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div class="w-full max-w-3xl mx-auto">
      <div class="flex rounded-lg bg-gray-100">
        <button
          type="button"
          class={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium ${
            activeTab === "work"
              ? "bg-white text-gray-900 shadow"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
        <button
          type="button"
          class={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium ${
            activeTab === "education"
              ? "bg-white text-gray-900 shadow"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      <div class="mt-4">
        {activeTab === "work" && <Timeline experience={work} />}
        {activeTab === "education" && <Timeline experience={education} />}
      </div>
    </div>
  );
}
