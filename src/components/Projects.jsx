import React from 'react'
import { useState } from 'react'
import data from '../assets/data'
import {Card, Button, Stack, Container, Col } from 'react-bootstrap'

export default function q() {

    const [projects, setProjects] = useState(data)


  return (
    <>
    <Container style={{display: 'grid'}} fluid='md' >
        {projects.map(project => {
            return (
                <>
                {/* <Col key={project.id} md='5' sm='5'> */}
                <Card className='m-4 w-50 display-inline'>
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
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
