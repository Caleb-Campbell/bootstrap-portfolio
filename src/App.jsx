import { useState } from 'react'
import reactLogo from './assets/react.svg'

//components
import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import Projects from './components/Projects'
import About from './components/About'
import { Stack } from 'react-bootstrap'
import WorkExperience from './components/WorkExperience'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'bg-dark' : 'bg-light'}>
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Stack gap={5}>
    <TitlePage darkMode={darkMode} />
    <About />
    <Projects />
    <WorkExperience />
    </Stack >
    </div>
  )
}

export default App
