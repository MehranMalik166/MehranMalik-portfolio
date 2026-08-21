import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import LenisScroll from './component/LenisScroll'
import Service from './component/Service'
import Project from './component/Project'
import ProjectsPage from './pages/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Experience from './component/Experience'

function App() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Experience />
              <Service />
              <Project />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App