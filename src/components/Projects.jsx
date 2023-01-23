import React from 'react'
import { useState } from 'react'
import data from '../assets/data'
import {Card, Button, Stack, Container, } from 'react-bootstrap'

export default function Projects() {

    const [projects, setProjects] = useState(data)


  return (
    <>
    <h2 className='text-light text-center fw-bold'>Projects</h2>
    <Container id='projects' style={{display: 'flex', flexFlow: 'row wrap', width: '90%', margin: '0 auto'}} >
        {projects.map(project => {
            return (
                <Card style={{maxWidth: '30%'}} className='w-50 m-1 bg-primary'>
                    <Card.Body>
                        <Card.Title className='text-underline text-secondary fw-bold'>{project.name}</Card.Title>
                        <Card.Text className='text-dark'>{project.description}</Card.Text>
                        <Card.Link className='text-light'  href={project.link} >View</Card.Link>
                    </Card.Body>
                </Card> 
            )
        })}
    </Container>
    </>
  )
}
