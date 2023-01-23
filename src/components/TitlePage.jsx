import React from 'react'
import { Stack, Button } from 'react-bootstrap'

export default function TitlePage({darkMode}) {
  return (
    <Stack style={{marginTop: '5em'}} className='mx-auto text-center'>
        <div className='m-4 bg-tertiary'>
          <h1 className={darkMode ? 'text-light' : 'text=dark'} style={{fontSize: '4em'}}>Caleb Campbell</h1>
          <h2 className='text-muted' style={{fontSize: '1.5em'}}>Full Stack Web Developer</h2>
          <Button className='mt-3' variant='light' >Contact Me</Button>
        </div>
    </Stack>
  )
}
