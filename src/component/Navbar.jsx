import React from 'react'
import { useRef, useEffect } from 'react'
import logo2 from '../imgFolder/logo2.png'
import logoDark4 from '../imgFolder/logoDark4.png'


function Navbar() {
  const navRef = useRef()
  const navLinkRef = useRef()
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'

  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    console.log(document.documentElement.classList)

    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
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
    // -------- light mode and dark mode -----------

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
      {/* // ye img hai jo  ki right aur top ko fixed rkhegi */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="https://eliana.prebuiltui.com/assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      {/* //-------------------- nabar code here ----------------------- */}
      <nav ref={navRef} className='w-full flex items-center justify-between dark:bg-darkTheme fixed z-50 px-5 lg:px-8 xl:px-[8%] py-4 '>
        <a href="#">
          <img src={logo2} alt="Logo" className="w-28 cursor-pointer mr-14 dark:hidden" />
          <img src={logoDark4} alt="Logo" className="w-28 cursor-pointer bg-darkTheme mr-14 hidden dark:block" />


        </a>

        <ul ref={navLinkRef} className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent '>
          <li><a href="#top" className='hover:text-gray-500 dark:hover:text-gray-300 transition'>Home</a></li>
          <li><a href="#about" className='hover:text-gray-500 dark:hover:text-gray-300 transition'>About me</a></li>
          <li><a href="#service" className='hover:text-gray-500 dark:hover:text-gray-300 transition'>Services</a></li>
          <li><a href="#project" className='hover:text-gray-500 dark:hover:text-gray-300 transition'>Project</a></li>
          <li><a href="#contact" className='hover:text-gray-500 dark:hover:text-gray-300 transition'>Contact me</a></li>

        </ul>
        {/* togggle theme code here  */}

        <div className='flex items-center gap-6'>
          <button onClick={toggleTheme}>
            <img src="https://eliana.prebuiltui.com/assets/moon_icon.png" alt="moon icon" className='w-5 dark:hidden' />
            <img src="https://eliana.prebuiltui.com/assets/sun_icon.png" alt="sun icon" className='w-5 bg-darkTheme hidden dark:block ' />
          </button>


          {/* contact button code here */}

          <a href="#contact" className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30">
            Contact
            <img src="https://eliana.prebuiltui.com/assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
            <img src="https://eliana.prebuiltui.com/assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
          </a>


          {/*---------------------- close menu button code here ----------------------- */}
          <button onClick={openMenu} className='block md:hidden ml-3 relative top-'>
            <img src="https://eliana.prebuiltui.com/assets/menu-black.png" alt="close menu" className='w-5 dark:hidden' />
            <img src="https://eliana.prebuiltui.com/assets/menu-white.png" alt="close menu darkmode" className='w-5 hidden dark:block' />
          </button>

        </div>
        {/* ------------------ Mobile Responsive navbar Panel -------------------- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white '>

          <div onClick={closeMenu} className='absolute right-6 top-6'>
            <img src="https://eliana.prebuiltui.com/assets/close-black.png" alt="" className='w-5 cursor-pointer dark:hidden' />
            <img src="https://eliana.prebuiltui.com/assets/close-white.png" alt="" className='w-5 cursor-pointer hidden dark:block' />
          </div>

          <li><a href="#top" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About me</a></li>
          <li><a href="#service" onClick={closeMenu}>Services</a></li>
          <li><a href="#project" onClick={closeMenu}>Project</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>




    </>
  )
}

export default Navbar
