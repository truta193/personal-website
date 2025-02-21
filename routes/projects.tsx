import ProjectsLimit from "../components/ProjectsLimit.tsx";

export default function Projects() {
  return (
    <div class="p-4 mx-auto max-w-3xl">
        <h1 class="text-3xl font-bold">My projects</h1>
    <div class="mt-8 flex flex-col gap-8 pb-16">
      <ProjectsLimit/>
    </div>
    </div>
  );
}