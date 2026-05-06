import React from 'react'
import Nav from './Components/Nav'
import Intro from './Components/Intro'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <body className=" text-[#f0f6fc] ">
      <Nav/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </body>
  )
}

export default App