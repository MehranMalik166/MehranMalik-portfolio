import React from 'react'
import { useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo2 from '../imgFolder/logo2.png'
import logoDark4 from '../imgFolder/logoDark4.png'


function Navbar() {
  const navRef = useRef()
  const navLinkRef = useRef()
  const sideMenuRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')

    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  }

  const goToSection = (id) => (e) => {
    e.preventDefault()
    closeMenu()

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent")
      } else {
        navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
      }
    }

    window.addEventListener('scroll', handleScroll)

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="https://eliana.prebuiltui.com/assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      <nav ref={navRef} className='w-full flex items-center justify-between dark:bg-darkTheme fixed z-50 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4'>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="shrink-0">
          <img src={logo2} alt="Logo" className="w-20 sm:w-24 md:w-24 lg:w-28 cursor-pointer mr-2 sm:mr-4 md:mr-6 lg:mr-14 dark:hidden" />
          <img src={logoDark4} alt="Logo" className="w-20 sm:w-24 md:w-24 lg:w-28 cursor-pointer bg-darkTheme mr-2 sm:mr-4 md:mr-6 lg:mr-14 hidden dark:block" />
        </a>

        <ul ref={navLinkRef} className='hidden md:flex items-center gap-2 lg:gap-6 xl:gap-8 rounded-full px-4 lg:px-10 xl:px-12 py-2 lg:py-3 bg-white shadow-sm bg-opacity-50 font-Ovo text-xs lg:text-base dark:border dark:border-white/30 dark:bg-transparent '>
          <li><a href="#top" onClick={goToSection('top')} className='hover:text-gray-500 dark:hover:text-gray-300 transition cursor-pointer whitespace-nowrap'>Home</a></li>
          <li><a href="#about" onClick={goToSection('about')} className='hover:text-gray-500 dark:hover:text-gray-300 transition cursor-pointer whitespace-nowrap'>About me</a></li>
          <li><a href="#experience" onClick={goToSection('experience')} className='hover:text-gray-500 dark:hover:text-gray-300 transition cursor-pointer whitespace-nowrap'>Experience</a></li>
          <li><a href="#service" onClick={goToSection('service')} className='hover:text-gray-500 dark:hover:text-gray-300 transition cursor-pointer whitespace-nowrap'>Services</a></li>
          <li><a href="#project" onClick={goToSection('project')} className='hover:text-gray-500 dark:hover:text-gray-300 transition cursor-pointer whitespace-nowrap'>Project</a></li>
          <li><a href="#contact" onClick={goToSection('contact')} className='hover:text-gray-500 dark:hover:text-gray-300 transition cursor-pointer whitespace-nowrap'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-2 sm:gap-4 md:gap-3 lg:gap-6'>
          <button onClick={toggleTheme} className="shrink-0">
            <img src="https://eliana.prebuiltui.com/assets/moon_icon.png" alt="moon icon" className='w-4 sm:w-5 dark:hidden' />
            <img src="https://eliana.prebuiltui.com/assets/sun_icon.png" alt="sun icon" className='w-4 sm:w-5 bg-darkTheme hidden dark:block ' />
          </button>

          <a href="#contact" onClick={goToSection('contact')} className="hidden lg:flex items-center gap-3 px-6 xl:px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-2 xl:ml-4 font-Ovo text-sm xl:text-base dark:border-white/30 cursor-pointer whitespace-nowrap">
            Contact
            <img src="https://eliana.prebuiltui.com/assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
            <img src="https://eliana.prebuiltui.com/assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
          </a>

          <button onClick={openMenu} className='block md:hidden ml-1 sm:ml-3'>
            <img src="https://eliana.prebuiltui.com/assets/menu-black.png" alt="open menu" className='w-5 dark:hidden' />
            <img src="https://eliana.prebuiltui.com/assets/menu-white.png" alt="open menu darkmode" className='w-5 hidden dark:block' />
          </button>
        </div>

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-5 py-20 px-8 sm:px-10 fixed -right-64 top-0 bottom-0 w-60 sm:w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo text-base dark:bg-darkHover dark:text-white '>

          <div onClick={closeMenu} className='absolute right-6 top-6 cursor-pointer'>
            <img src="https://eliana.prebuiltui.com/assets/close-black.png" alt="close menu" className='w-5 cursor-pointer dark:hidden' />
            <img src="https://eliana.prebuiltui.com/assets/close-white.png" alt="close menu" className='w-5 cursor-pointer hidden dark:block' />
          </div>

          <li><a href="#top" onClick={goToSection('top')} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Home</a></li>
          <li><a href="#about" onClick={goToSection('about')} className="hover:text-gray-500 dark:hover:text-gray-300 transition">About me</a></li>
          <li><a href="#experience" onClick={goToSection('experience')} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Experience</a></li>
          <li><a href="#service" onClick={goToSection('service')} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Services</a></li>
          <li><a href="#project" onClick={goToSection('project')} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Project</a></li>
          <li><a href="#contact" onClick={goToSection('contact')} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar