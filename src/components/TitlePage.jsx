import React from 'react'
import { Stack, Button, Carousel } from 'react-bootstrap'

export default function TitlePage({darkMode}) {


  const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'Bootstrap',
    'React',
    'Redux',
    'NodeJS',
    'ExpressJS',
    'MySQL',
    'SQLite',
    'Authentication',
    'JavaScript Web Tokens',
]


  return (
    <Stack style={{marginTop: '5em'}} className='mx-auto text-center'>
        <div className='m-4 bg-tertiary'>
          <h1 className={darkMode ? 'text-light' : 'text=dark'} style={{fontSize: '4em'}}>Caleb Campbell</h1>
          <h2 className='text-muted' style={{fontSize: '1.5em'}}>Full Stack Web Developer</h2>
          <Carousel >
                    {skills.map(skill => {
                       return <Carousel.Item key={skill} className='fs-3 text-center mt-3'><p className='mb-5'>{skill}</p></Carousel.Item>
                    })}
                </Carousel>
          <Button className='mt-3' variant='light' >Contact Me</Button>
        </div>
    </Stack>
  )
}
