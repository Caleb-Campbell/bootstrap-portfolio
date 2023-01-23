import React from 'react'
import { Nav, Stack, Button, Image, ButtonGroup } from 'react-bootstrap'
import lightLogo from '../assets/simple-white-caleb-campbell.png'
import darkLogo from '../assets/icons/dark.png'

export default function NavBar({darkMode, setDarkMode}) {

  const handleClick = (e) => {
    setDarkMode(!darkMode)
  }



  return (
    <Nav  className={`justify-content-between p-3 ${darkMode ? 'bg-light' : 'bg-dark'}`}>
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
    <ButtonGroup style={{scale: '.5'}}>
      <Button onClick={handleClick} id='dark' className='fs-2'>{darkMode ? '🌕' : '🌚'}</Button>

      
    </ButtonGroup>
    </Stack>

    </Nav>
  )
}
