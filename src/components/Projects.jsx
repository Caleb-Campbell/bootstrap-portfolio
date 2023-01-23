import React from 'react'
import { useState } from 'react'
import data from '../assets/data'
import {Card, Button, Stack, Container, } from 'react-bootstrap'

export default function Projects() {

    const [projects, setProjects] = useState(data)


  return (
    <>
    <Container id='projects' style={{display: 'flex', flexFlow: 'row wrap', width: '90%', margin: '0 auto'}} >
        {projects.map(project => {
            return (
                <Card style={{maxWidth: '30%'}} className='w-50 m-1 bg-dark'>
                    <Card.Body>
                        <Card.Title className='text-secondary fw-bold'>{project.name}</Card.Title>
                        <Card.Text className='text-light'>{project.description}</Card.Text>
                        <Card.Link className='text-muted'  href={project.link} >View</Card.Link>
                    </Card.Body>
                </Card>
            )
        })}
    </Container>
    </>
  )
}
