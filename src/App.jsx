import React from 'react'
import './App.css'
import TechStack from './TechStack'
import AboutMe from './About'
import Footer from './Footer'
import ProjectsSection from './ProjectsSection'

function App() {
  return (
    <div>
      <AboutMe/>
      <div id="main">
        <TechStack/>
      </div>
      <ProjectsSection/>
      <Footer/>
    </div>
  )
}

export default App
