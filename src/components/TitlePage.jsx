import React from 'react'
import { Stack, Button } from 'react-bootstrap'

export default function TitlePage() {
  return (
    <Stack className='col-md-5 mx-auto text-center'>
        <div className='m-4 bg-tertiary'>
          <h1 className='text-light' style={{fontSize: '4em'}}>Caleb Campbell</h1>
          <h2 className='text-info' style={{fontSize: '1.5em'}}>Full Stack Web Developer</h2>
          <Button className='' variant='light' >Contact Me</Button>
        </div>
    </Stack>
  )
}
