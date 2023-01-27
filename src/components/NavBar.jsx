import React from 'react'
import { Nav, Stack, Button, Image, ButtonGroup } from 'react-bootstrap'
import lightLogo from '../assets/simple-white-caleb-campbell.png'
import darkLogo from '../assets/icons/dark.png'

export default function NavBar({darkMode, setDarkMode, setModal}) {

  const handleClick = (e) => {
    setDarkMode(!darkMode)
  }

  const openResumeSide = () => {
    setModal(true)
  } 


  return (
    <Nav id='nav' className={`justify-content-between p-3 ${darkMode ? 'bg-light' : 'bg-dark'}`}>
    <Image style={{width: '5em'}} src={darkMode ? darkLogo : lightLogo} />
    <Stack direction='horizontal'>
    <Nav.Item>
      <Nav.Link className={darkMode ? 'text-dark' : 'text-light' }  href="#about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className={darkMode ? 'text-dark' : 'text-light' }  href="#projects">Experience</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className={darkMode ? 'text-dark' : 'text-light' }  href="/home">Work</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className={darkMode ? 'text-dark' : 'text-light' }  href="/home">Contact</Nav.Link>
    </Nav.Item>
      <Button onClick={openResumeSide} style={{scale: '.6'}} className='fs-3' >Resume</Button>
      <Button onClick={handleClick} id='dark' className='fs-2' style={{scale: '.5'}}>{darkMode ? '🌕' : '🌚'}</Button>      
    </Stack>

    </Nav>
  )
}
