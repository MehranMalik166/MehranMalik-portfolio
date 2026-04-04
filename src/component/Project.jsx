import React from 'react'


function Project() {
    const projects = [
        {
            name: 'Currency Converter',
            img: './currencyImg.png',
            img2: './currencyImg2.png',
            description: 'Currency Converter with history & dark/light mode using JS & Tailwind CSS.',
            link: 'https://currency-convertor-mehran.netlify.app'
        },
        {
            name: 'Eid Crad Genrater ',
            img: './eidcardImg.png',
            img2: './eidcardImg.png',
            description: 'Generate personalized Eid cards with live preview using JS, HTML & CSS.',
            link: 'https://eidcardgeneratormehranmalik.netlify.app/'
        },
        {
            name: ' Weather app ',
            img: './weatherImg.png',
            img2: './weatherDarkImg.png',
            description: 'Responsive weather app with live updates, built using JavaScript & Tailwind CSS..',
            link: 'https://weather-app-malik.netlify.app/'
        },
        {
            name: ' Luxary Haven',
            img: './luxaryImg2.png',
            img2: './luxaryImg2.png',
            description: 'Luxray Haven: Interactive hotel management UI built with JavaScript, HTML & Tailwind CSS.',
            link: 'https://radiant-sopapillas-b4d9ee.netlify.app/'
        }

    ]
    return (
        <div id='project' className='w-full px-[12%] py-10 scroll-mt-20'>
            <p className='text-center mb-2 text-lg font-Ovo'>My Portfolio</p>
            <h1 className='text-5xl text-center font-Ovo'>My Latest Project</h1>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

            <div className='grid grid-cols-auto my-10 gap-6 w-full dark:text-black'>
                {projects.map((project) => {
                    return <div
  key={project.name}
  className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group
             border border-gray-200 dark:border-gray-700
             hover:shadow-2xl dark:hover:shadow-gray-800/50
             transition-all duration-500"
>
  {/* Dark mode image */}
  <img
    src={project.img}
    alt={project.name}
    className="w-full h-72 object-cover transition-all duration-700 
               group-hover:scale-110 group-hover:blur-[2px]
               hidden dark:block"
  />

  {/* Light mode image */}
  <img
    src={project.img2}
    alt={project.name}
    className="w-full h-72 object-cover transition-all duration-700 
               group-hover:scale-110 group-hover:blur-[2px]
               dark:hidden"
  />

  {/* Gradient Overlay - More modern */}
  <div
    className="absolute inset-0 
               bg-gradient-to-t from-black/80 via-black/40 to-transparent
               dark:from-black/90 dark:via-black/50 dark:to-transparent
               opacity-0 group-hover:opacity-100
               transition-all duration-700"
  />

  {/* Content */}
  <div
    className="absolute inset-0 flex flex-col justify-end p-6
               translate-y-4 group-hover:translate-y-0
               opacity-0 group-hover:opacity-100
               transition-all duration-700 ease-out"
  >
    <div className="transform transition-all duration-500 delay-100">
      <h2 className="text-white font-bold text-2xl mb-2 
                     tracking-tight drop-shadow-lg">
        {project.name}
      </h2>
      
      <div className="w-12 h-0.5 bg-gradient-to-r from-white to-transparent 
                      mb-3 transition-all duration-500 group-hover:w-16">
      </div>
      
      <p className="text-white/90 text-sm mt-2 leading-relaxed max-w-[90%]">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2
                   bg-white/90 backdrop-blur-sm
                   dark:bg-black/80
                   text-black dark:text-white
                   px-5 py-2.5 rounded-xl font-semibold text-sm
                   hover:scale-105 hover:bg-white dark:hover:bg-black
                   hover:shadow-lg transition-all duration-300
                   border border-white/20 dark:border-white/10"
      >
        <span>Visit Project</span>
        <svg 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>

  {/* Optional: Subtle shine effect on hover */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none
                bg-gradient-to-r from-transparent via-white/10 to-transparent
                -translate-x-full group-hover:translate-x-full transition-all duration-1000">
  </div>
</div>
                })}

            </div>
             <a href="#" className="w-max flex items-center justify-center gap-2 border-gray-900 text-gray-900 border dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 hover:scale-105 duration-300 dark:text-white">
                Show more
                <img     src="https://eliana.prebuiltui.com/assets/right-arrow.png"  alt="" className="w-4 dark:hidden" />
                <img     src="https://eliana.prebuiltui.com/assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

        </div>
    )
}

export default Project
