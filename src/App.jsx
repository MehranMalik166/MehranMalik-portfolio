import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import LenisScroll from './component/LenisScroll'
import Service from './component/Service'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'



function App() {
  
  return (
    <>
    < LenisScroll />
    < Navbar/>
    <Header />
    <About />
    <Service />
    <Project />
    <Contact />
    <Footer />
    </>
  )
}

export default App
