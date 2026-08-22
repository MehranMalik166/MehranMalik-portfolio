import React from 'react'
import profile from '../imgFolder/profile.png'

function Header() {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 px-4 py-28 md:py-24'>
            <img
                src={profile}
                alt="Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover"
            />

            <h3 className='flex flex-wrap items-end justify-center gap-2 text-base sm:text-xl md:text-2xl mb-1 md:mb-3 font-Ovo'>
                Hello! I'm Mehran Malik
            </h3>

            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-[66px] leading-tight font-Ovo'>
                FrontEnd Developer based in INDIA.
            </h1>

            <p className='max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base font-Ovo px-2'>
                I am a Frontend Developer from Burhanpur, INDIA and passionate about building modern, responsive, and user-friendly web applications using React.js, JavaScript, TypeScript and Tailwind CSS.
            </p>

            <div className='flex flex-col sm:flex-row w-full sm:w-auto text-base sm:text-lg gap-4 sm:gap-5 py-5'>
                <a
                    href="#contact"
                    className="px-6 sm:px-10 py-2.5 border rounded-full 
                               bg-gradient-to-r from-[#b820e6] to-[#da7d20] hover:scale-105
                               dark:hover:from-[#11001F] dark:hover:to-[#2a004a]
                               text-white flex items-center justify-center gap-2 
                               hover:bg-slate-100/70 transition-all duration-300 w-full sm:w-auto"
                >
                    Contact
                    <img src="https://eliana.prebuiltui.com/assets/right-arrow-white.png" alt="" className='w-5' />
                </a>

                  <a
                    href="/MEHRANMALIK_RESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="px-6 sm:px-8 py-3 border border-gray-900 rounded-full 
                               hover:scale-105 hover:bg-slate-100/70 dark:hover:bg-darkHover 
                               dark:text-white dark:border-white/30 text-black 
                               flex items-center justify-center gap-3 sm:gap-6 
                               transition-all duration-300 w-full sm:w-auto"
                >
                    Resume 👁️
                </a>
            </div>
        </div>
    )
}

export default Header