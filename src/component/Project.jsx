import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Project() {
  const homeProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
      <p className="text-center mb-2 text-lg font-Ovo">My Portfolio</p>
      <h1 className="text-5xl text-center font-Ovo">My Latest Project</h1>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-6 w-full dark:text-black">
        {homeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link
        to="/projects"
        className="w-max flex items-center justify-center gap-2 border-gray-900 text-gray-900 border dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 hover:scale-105 duration-300 dark:text-white"
      >
        Show more
        <img
          src="https://eliana.prebuiltui.com/assets/right-arrow.png"
          alt=""
          className="w-4 dark:hidden"
        />
        <img
          src="https://eliana.prebuiltui.com/assets/right-arrow-bold-dark.png"
          alt=""
          className="w-4 hidden dark:block"
        />
      </Link>
    </div>
  );
}