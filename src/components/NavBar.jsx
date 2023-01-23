import React from 'react'
import { Nav, Stack, Button, Image } from 'react-bootstrap'
import logo from '../assets/simple-white-caleb-campbell.png'
export default function NavBar() {
  return (
    <Nav  className='justify-content-between p-3 bg-dark'>
    <Image style={{width: '3em'}} src={logo} />
    <Stack direction='horizontal'>
    <Nav.Item>
      <Nav.Link className='text-light'  href="#about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='text-light'  href="#projects">Experience</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='text-light'  href="/home">Work</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='text-light'  href="/home">Contact</Nav.Link>
    </Nav.Item>
    </Stack>

    </Nav>
  )
}
