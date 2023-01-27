import React from 'react'
import { Container, FormControl, Modal, Stack, Form, Button, ButtonGroup } from 'react-bootstrap'

export default function RoutePlanner({show, handleSubmit, setShow, email, setEmail}) {

    const handleClose = () => {setShow(false)}

  return (
    <>
    <Modal onHide={handleClose} show={show}>
        <Modal.Header closeButton><Modal.Title>Get My Resume</Modal.Title></Modal.Header>
        <Stack>
            <Form onSubmit={handleSubmit} className='p-5'>
                <Form.Label> Name</Form.Label>
                <FormControl className='mb-4' type='text' />
                <Form.Label> Email</Form.Label>
                <FormControl className='mb-4' type='text' />
                <Modal.Footer>
                    <ButtonGroup  >
                <Button  variant='primary' type='submit' >Get Email</Button>
                <Button onClick={handleClose} variant='secondary' >Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Form>
        </Stack>
    </Modal>
    </>
  )
}