import { useState } from 'react'
import reactLogo from './assets/react.svg'

//components
import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <TitlePage />
    <Projects />
    </>
  )
}

export default App
