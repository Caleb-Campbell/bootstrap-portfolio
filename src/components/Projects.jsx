import React from 'react'
import { useState } from 'react'
import data from '../assets/data'
import {Card, Button, Stack, Container, } from 'react-bootstrap'

export default function Projects() {

    const [projects, setProjects] = useState(data)


  return (
    <>
    <Container style={{display: 'flex', flexFlow: 'row wrap', width: '90%', margin: '0 auto'}} >
        {projects.map(project => {
            return (
                <Card style={{maxWidth: '30%'}} className='w-50 m-1'>
                    <Card.Body>
                        <Card.Title className='text-primary fw-bold'>{project.name}</Card.Title>
                        <Card.Text className='text-dark'>{project.description}</Card.Text>
                        <Card.Link  href={project.link} >View</Card.Link>
                    </Card.Body>
                </Card>
            )
        })}
    </Container>
    </>
  )
}
