import React from 'react'
import { Nav, Dropdown, Button } from 'react-bootstrap'
export default function NavBar() {
  return (
    <Nav  className='justify-content-end p-3 bg-dark'>
    <Nav.Item>
      <Nav.Link className='text-light'  href="#about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='text-light'  href="/home">Experience</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='text-light'  href="/home">Work</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='text-light'  href="/home">Contact</Nav.Link>
    </Nav.Item>

    </Nav>
  )
}
