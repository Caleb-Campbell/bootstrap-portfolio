import React from 'react'
import { Nav, Button } from 'react-bootstrap'
export default function NavBar() {
  return (
    <Nav className='justify-content-end p-3'>
    <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Button variant='secondary'>Resume</Button>
      </Nav.Item>
    </Nav>
  )
}
