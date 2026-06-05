import { useEffect } from 'react'
import Nav from './Components/Nav'
import Intro from './Components/Intro'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  useEffect(() => {
  const ping = () => {
    fetch('https://courseregistrationbackend.onrender.com/')
    fetch('https://tom-backend-sibt.onrender.com/')
  }
  ping()
}, [])

  return (
    <>
      <Nav/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
