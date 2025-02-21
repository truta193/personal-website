import FitIcon from "../components/FitIcon.tsx";
import ProjectsLimit from "../components/ProjectsLimit.tsx";
import educationData from "../data/education.json" with { type: "json" };
import workData from "../data/work.json" with { type: "json" };
import TabIsland from "../islands/TabIsland.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-3xl">
      <div class="mt-8 flex flex-col gap-16 pb-16">
        <section class="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
          <img
            className="rounded-lg shadow-md"
            src="/me.jpg"
            alt="Kermit"
            width={175}
            height={175}
          />
          <div class="flex flex-col">
            <h1 class="title text-4xl font-bold">Hi, I'm Andrei</h1>
            <p className="mt-4 font-light">
              21 year old software developer from Romania 🇷🇴
            </p>
            <p className="mt-2 font-light">
              Build everything from drivers and graphics engines to desktop &
              mobile apps. I just enjoy the whole programming thing :)
            </p>
          </div>
        </section>

        <TabIsland
          work={workData.work}
          education={educationData.education}
        />

        <section class="flex flex-col gap-8">
          <div class="flex justify-between items-center">
            <h2 class="title text-2xl sm:text-3xl font-bold">Featured projects</h2>
            <a href="/projects" class="text-gray-500 hover:text-gray-700">
              <div class="flex items-center gap-1">
                <span>view more</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </a>
          </div>
        </section>

        <ProjectsLimit limit={2}/>
      </div>
    </div>
  );
}
