import React from 'react'
import logo2 from '../imgFolder/logo.png'
import logoDark4 from '../imgFolder/logoDark4.png'

function Footer() {
    return (
      <div className='mt-20 flex flex-col items-center gap-4'>

  {/* Logo + Email */}
  <div className='text-center'>
    <a href="#">
      <img src={logo2} alt="Logo" className="w-28 mx-auto mb-2 cursor-pointer dark:hidden" />
      <img src={logoDark4} alt="Logo" className="w-28 mx-auto mb-2 cursor-pointer hidden dark:block" />
    </a>
    <div className='w-max flex items-center gap-2 mx-auto'>
      <img src="https://eliana.prebuiltui.com/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
      <img src="https://eliana.prebuiltui.com/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
      <a href="mailto:contact@prebuiltui.com">contact@prebuiltui.com</a>
    </div>
  </div>

  {/* Footer */}
  <div className="border-t border-gray-400 w-full mt-12 py-4 px-4 sm:px-10">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full max-w-6xl mx-auto">
      
      {/* Left Text */}
      <p className="text-center sm:text-left">
        © {new Date().getFullYear()} Mehran Malik • All rights reserved.
      </p>

      {/* Right Links */}
      <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0">
        <li><a href="https://github.com/MehranMalik166" className='text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'>GitHub</a></li>
        <li><a href="https://linkedin.com/in/mehran-malik-a386a363" className='text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'>LinkedIn</a></li>
        <li><a href="" className='text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'>Naukri</a></li>
        <li><a href="https://www.instagram.com/mehrann.malikk" className='text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'>Instagram</a></li>
        {/* <li><a href="" className='text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'></a></li> */}
        
      </ul>

    </div>
  </div>

</div>

    )
}

export default Footer
