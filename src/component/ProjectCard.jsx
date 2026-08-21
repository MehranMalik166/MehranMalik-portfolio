import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group border border-gray-200 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-800/50 transition-all duration-500">
      <img
  src={project.img}
  alt={project.name}
  className="w-full h-72 object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] hidden dark:block"
/>
<img
  src={project.img2}
  alt={project.name}
  className="w-full h-72 object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] dark:hidden"
/>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
      <div className="transform transition-all duration-500 delay-100">
  {project.status && (
    <span className="inline-block mb-2 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm w-max">
      {project.status}
    </span>
  )}

  <h2 className="text-white font-bold text-xl leading-snug mb-2 tracking-tight drop-shadow-lg line-clamp-2">
    {project.name}
  </h2>

  <div className="w-12 h-0.5 bg-gradient-to-r from-white to-transparent mb-3 transition-all duration-500 group-hover:w-16" />

  <p className="text-white/90 text-sm mt-2 leading-relaxed max-w-[90%] line-clamp-3">
    {project.description}
  </p>

  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm dark:bg-black/80 text-black dark:text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 hover:bg-white dark:hover:bg-black hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-white/10"
  >
    <span>Visit Project</span>
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </a>
</div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
    </div>
  );
}