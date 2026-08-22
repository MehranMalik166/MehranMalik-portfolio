import React from "react";

function Experience() {
  const experience = [
    {
      id: 1,
      role: "Frontend React Developer Intern",
      time: "Remote · Full-Time",
      company: "AMX Innovation",
      companyLogo: "/amx-logo.png",
      duration: "Jun 2026 - Present",
      current: true,
      description:
        "Developing real-world web applications and internal tools, building responsive pages, reusable components, dashboards, modals, and interactive features. Working across frontend and backend integration, including APIs, data handling, URL-based state management, and 3D visualization projects, while contributing to scalable and production-ready solutions.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "React Query"],
    },
    {
      id: 2,
      role: "Web Developer Intern",
      time: "Remote · Flexible",
      company: "Lynxperio",
      companyLogo: "/lynx-logo.png",
      duration: "Jun 2026 - Aug 2026",
      current: false,
      description:
        "Worked on web development projects with a strong focus on responsive and user-friendly frontend development. Built and improved web pages, UI components, layouts, and interactive features while gaining hands-on experience with PHP, MySQL, and website management.",
      tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP", "MySQL", "h-Panel"],
    },
  ];

  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      <p className="text-center mb-2 text-lg font-Ovo">My Experience</p>
      <h1 className="text-5xl text-center font-Ovo">Experience</h1>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo">
        My professional experience and hands-on work in frontend development.
      </p>

      <div
        className={`grid gap-6 max-w-5xl mx-auto ${
          experience.length === 1
            ? "grid-cols-1 max-w-xl"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
           {experience.map((exp) => (
          <div
            key={exp.id}
            className={`relative rounded-2xl p-5
                       bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-transparent
                       hover:shadow-lg dark:hover:shadow-gray-900/50
                       hover:-translate-y-1 transition-all duration-300 cursor-pointer
                       border ${
                         exp.current
                           ? "border-green-500/40 shadow-[0_0_15px_-3px_rgba(34,197,94,0.35)]"
                           : "border-gray-200 dark:border-white/20"
                       }`}
          >
            {/* Logo + title/company — normal flow, no absolute positioning anywhere */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 shrink-0 rounded-lg border border-gray-200 dark:border-white/20 bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src={exp.companyLogo}
                  alt={exp.company}
                  className="w-full h-full object-contain p-1"
                />
              </div>
 
              <div className="min-w-0">
                <h3 className="text-base font-semibold font-Ovo truncate">
                  {exp.role}
                </h3>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  {exp.company}
                </p>
 
                {/* duration + time + status, all inline, wraps naturally on small screens */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">
                    {exp.duration}
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">
                    {exp.time}
                  </span>
 
                  {exp.current ? (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-green-600 dark:text-green-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      Currently Working
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-blue-400">
                      <svg
                        className="h-2.5 w-2.5"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2.5 6l2.2 2.2L9.5 3.5" />
                      </svg>
                      Completed
                    </span>
                  )}
                </div>
              </div>
            </div>
 
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              {exp.description}
            </p>
 
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded-full border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;