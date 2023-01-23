import { useState } from 'react'
import reactLogo from './assets/react.svg'

//components
import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import Projects from './components/Projects'
import About from './components/About'
import { Stack } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Stack gap={5}>
    <TitlePage />
    <About />
    <Projects />
    </Stack >
    </>
  )
}

export default App
