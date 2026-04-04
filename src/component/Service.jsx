import React from 'react'

function Service() {
    const services = [
   {
    name: 'Frontend Development',
    icon: './frontend.png',
    description: 'Build and program websites to create functional and responsive web experiences.',
    link: '#',
},

{
    name: 'Web Design',
    icon: './webdesign.png',
    description: 'Design clean, modern, and visually appealing layouts that are user-friendly.',
    link: '#',
},

{
    name: 'Interactive UI Effects',
    icon: './interactive.png',
    description: 'Add smooth animations, hover effects, and engaging interactions for users.',
    link: '#',
},

{
    name: 'Website Enhancement',
    icon: './enhancement2.png',
    description: 'Refine and improve websites by fixing issues and polishing the interface.',
    link: '#',
},
    ]
    return (
        <div id='service' className='w-full px-[12%] py-10 scroll-mt-20'>
            <p className='text-center mb-2 text-lg font-Ovo'>what I offer</p>
            <h1 className='text-center text-5xl font-Ovo '> My Service</h1>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Transforming ideas into modern, responsive, and visually engaging web experiences with clean frontend solutions. </p>
            
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto'>
  {services.map((service) => {
    return (
      <li 
        key={service.name} 
        className='border border-gray-300 dark:border-white/30 rounded-lg p-6 cursor-pointer 
                   hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black 
                   dark:hover:shadow-white/80 dark:hover:bg-darkHover/50 
                   flex flex-col justify-between h-full'
      >
        <div>
          <img src={service.icon} alt="" className='w-12 rounded-full' />
          <h1 className='my-4 font-semibold text-gray-700 dark:text-white'>{service.name}</h1>
          <p className="text-gray-600 text-sm dark:text-white/80">{service.description}</p>
        </div>
       <a 
  href={service.link} 
  className="flex items-center gap-2 text-sm mt-5 group"
>
  Read more
  <img 
    src="https://eliana.prebuiltui.com/assets/right-arrow.png" 
    alt="" 
    className="w-4 transform origin-left transition-transform duration-300 rotate-45 group-hover:rotate-0"
  />
</a>
      </li>
    )
  })}
</ul>
            
        </div>
    )
}

export default Service
