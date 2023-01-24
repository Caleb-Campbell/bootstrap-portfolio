import React from 'react'
import { useState } from 'react'
import data from '../assets/data'
import {Card, Button, Stack, Container, } from 'react-bootstrap'

export default function Projects({darkMode}) {

    const [projects, setProjects] = useState(data)


  return (
    <>
    <h2 className='text-light text-center fw-bold'>Projects</h2>
    <Container id='projects' style={{display: 'flex', flexFlow: 'row wrap', width: '90%', margin: '0 auto'}} >
        {projects.map(project => {
            return (
                <Card key={project.id} style={{maxWidth: '30%'}} className={darkMode ? 'w-50 m-1 bg-light' : 'w-50 m-1 bg-dark'}>
                    <Card.Body>
                        <Card.Title className={darkMode ? 'text-dark fw-bold' : 'text-light fw-bold'}>{project.name}</Card.Title>
                        <Card.Text className={darkMode ? 'text-dark' : 'text-light'}>{project.description}</Card.Text>
                        <Card.Link className={darkMode ? 'text-dark' : 'text-light'}  href={project.link} >View</Card.Link>
                    </Card.Body>
                </Card> 
            )
        })}
    </Container>
    </>
  )
}
