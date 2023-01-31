import React from 'react'
import { Button, Container, Nav, Stack } from 'react-bootstrap'

export default function Footer({darkMode}) {
  return (
    <>
    <Button style={{position: 'fixed', bottom: '1em', right: '1em', scale: '.7'}} className={darkMode ? 'fs-3 bg-light text-dark' : 'fs-3 bg-dark text-light'} href='#nav'>Top</Button>
    <Nav>
      
    </Nav>
    </>

  )
}
