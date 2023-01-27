import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Stack } from 'react-bootstrap'

//components
import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import Projects from './components/Projects'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)


  

  return (
    <div className={darkMode ? 'bg-dark' : 'bg-light'}>
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Stack gap={5}>
    <TitlePage darkMode={darkMode} />
    <About />
    <Projects darkMode={darkMode} />
    <WorkExperience />
    <Contact />
    </Stack >
    <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
