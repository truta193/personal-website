import educationData from "../data/education.json" with { type: "json" };
import workData from "../data/work.json" with { type: "json" };
import TabIsland from "../islands/TabIsland.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <TabIsland
        work={workData.work}
        education={educationData.education}
      />
    </div>
  );
}
