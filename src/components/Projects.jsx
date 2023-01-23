import React from 'react'
import { useState } from 'react'
import data from '../assets/data'
import {Card, Button, Stack, Container, } from 'react-bootstrap'

export default function Projects() {

    const [projects, setProjects] = useState(data)


  return (
    <>
    <Container style={{display: 'flex', flexFlow: 'row wrap'}} >
        {projects.map(project => {
            return (
                <>
                {/* <Col key={project.id} md='5' sm='5'> */}
                <Card className='w-50 m-.1'>
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text className='text-info'>{project.description}</Card.Text>
                        <Card.Link href={project.link} >View</Card.Link>
                    </Card.Body>
                </Card>
                {/* </Col> */}
                </>
            )
        })}
    </Container>
    </>
  )
}
