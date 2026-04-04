import React from 'react'
import aboutImg7 from '../imgFolder/aboutImg7.png'
import aboutImg from '../imgFolder/aboutImg.png'


function About() {

       const tools = [
        { name: 'vscode', icon: '/vscode.png', },
        { name: 'appwrite', icon: '/appwrite.png', },
        { name: 'DevTools', icon: '/chrome.png', },
        { name: 'git', icon: '/git.png', },
        { name: 'netlify', icon: '/netlify.png', },
    ];


    // my data 
    const data = [
        {
            name: 'Languages',
            icon1: '/code-icon.png',
            icon2: '/code-icon-dark.png',
            description: 'HTML, CSS, Tailwind CSS, JavaScript, React, Git - Github'
        },
          {
            name: 'Eduction',
            icon1: '/edu-icon.png',
            icon2: '/edu-icon-dark.png',
            description: 'Diploma in COMPUTER Science'
        },
          {
            name: 'Projects',
            icon1: '/project-icon.png',
            icon2: '/project-icon-dark.png',
            description: 'BUILT more Than 5 Projects'
        },

    ]
    return (
        <div id='about' className='w-full px-[12%] py-10 mt-10 sm:mt-5 scroll-mt-20 flex justify-center'>
            <div className='w-full max-w-6xl'>
            <p className='text-center mb-2 text-lg font-Ovo'>Introduntion</p>
            <h1 className='text-5xl text-center font-Ovo'>About ME</h1>
            <div className='flex w-full item justify-center flex-col lg:flex-row items-center gap-20 my-20'>
                <div id='left' className='max-w-max mx-auto relative'>
                        
                    <img src={aboutImg} alt="" className="w-64 h-full sm:w-80 rounded-3xl max-w-none"  />
                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                    <img src="https://eliana.prebuiltui.com/assets/circular-text.png" alt="" className="w-full animate-spin_slow"  />
                    <img src="https://eliana.prebuiltui.com/assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                {/* right section */}
                    <div id='right' className='flex-1'>
                    <p className="mb-10 max-w-2xl font-Ovo">I am a passionate Frontend Developer fresher who loves solving problems through clean and efficient code. I am enthusiastic about learning, taking challenges, and contributing to projects that make a difference.</p>
                       <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                       {data.map((data) => {
                        
                        return <li key={data.name} className='border border-gray-300 dark:border-white/30 rounded-lg p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50 '>
                            <img src={data.icon1} alt=""  className='w-7 mt-3 dark:hidden ' />
                            <img src={data.icon1} alt="" className='w-7 mt-3 hidden dark:block' />
                          <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{data.name}</h3>
                          <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                        </li>
                        
                       })}
                       </ul>

                       {/* ---------- Tools I use ----------- */}
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                      <ul className='flex items-center gap-3 sm:gap-5'>
  {tools.map((tool) => (
    <li 
      key={tool.name} 
      className='w-12 sm:w-14 flex items-center aspect-square border border-gray-500 dark:border-gray-500 rounded-lg p-2 cursor-pointer hover:-translate-y-1 transition-transform duration-500'
    >
      <img src={tool.icon} alt={tool.name} className='w-5 sm:w-7 mx-auto' />
    </li>
  ))}
</ul>
                </div>

            </div>
            </div>

        </div>
    )
}

export default About
