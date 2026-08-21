import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import ProjectCard from "../component/ProjectCard";

export default function ProjectsPage() {
  const companyProjects = projects.filter((p) => p.category === "company");
  const personalProjects = projects.filter((p) => p.category === "personal");

  return (
    <div className="w-full px-[12%] py-16 min-h-screen dark:text-black">
      
      {/* Back button — top left, proper spacing */}
      <div className="mb-10 mt-10 -ml-10 sm:ml-0">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     border border-gray-300 dark:border-white/20
                     text-sm font-Ovo text-gray-700 dark:text-gray-200
                     hover:bg-gray-100 dark:hover:bg-white/10
                     hover:gap-3 transition-all duration-300 w-max"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-5xl text-center font-Ovo mb-4 text-black dark:text-white">All Projects</h1>
      <p className="text-center max-w-2xl mx-auto mb-16 font-Ovo text-black dark:text-white">
        Here's a complete collection of everything I've built.
      </p>

      <div className="mb-16">
        <h2 className="text-2xl font-Ovo mb-6 text-black dark:text-white">💼 Internship / Company Work</h2>
        <div className="grid grid-cols-auto gap-6 w-full">
          {companyProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-Ovo mb-6 text-black dark:text-white">🚀 Personal Projects</h2>
        <div className="grid grid-cols-auto gap-6 w-full">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}