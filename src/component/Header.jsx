import React from 'react'
import profile from '../imgFolder/profile.png'

function Header() {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
            <img src={profile} alt="" className='rounded-full w-40 h-40 mt-16' />
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hello! I'm Mehran Malik </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>FrontEnd Developer based in INDIA. </h1>
            <p className='max-w-2xl mx-auto font-Ovo'>I am a Frontend Developer from Burharnpur, INDIA and passionate about building modern, responsive, and user-friendly web applications using React.js, JavaScript, and Tailwind CSS.</p>

            <div className='flex flex-col sm:flex-row text-lg gap-5 py-5 '>
                <a href="#contact" className="px-10 py-2.5 border rounded-full 
bg-gradient-to-r from-[#b820e6] to-[#da7d20] hover:scale-105
dark:hover:from-[#11001F] dark:hover:to-[#2a004a]
text-white flex items-center gap-2 hover:bg-slate-100/70 transition-all duration-300">
                    Contact
                    <img src="https://eliana.prebuiltui.com/assets/right-arrow-white.png" alt="" className='w-5' />
                </a>
                <a
    href="/Mehran-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="px-8 py-3 border border-gray-900 rounded-full hover:scale-105 hover:bg-slate-100/70 dark:hover:bg-darkHover dark:text-white text-black flex items-center gap-6 transition-all duration-300"
>
    Resume    👁️
</a>

            </div>
        </div>
    )
}

export default Header
