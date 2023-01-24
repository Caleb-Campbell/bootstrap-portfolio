import React from 'react'
import { Tabs, Tab, Stack, Button, Carousel, Container, CarouselItem } from 'react-bootstrap'



export default function About() {
  return (
    <div style={{width: '50%', margin: '0 auto', marginTop: '5em', marginBottom: '5em'}} id='about'>
        <h2 style={{textAlign: 'center'}} className='mb-3 fw-bold text-light'>About</h2>
        <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mx-3'
        style={{ display: 'flex', justifyContent: 'center', margin: '0 auto'}}
        >
            <Tab eventKey='home' title='About'>
                <p className='mt-3'>
                Hey there! It's important to know who you'll be working with. First and foremost, I learned a long time ago that few things bring more satisfaction in life than doing a job well. I found an immense amount of this feeling while learning to code. I distinctly remember the first webpage, server, database I made, and the pride I felt in creating these things.
                </p>
            </Tab>
            <Tab eventKey='education' title='Education'>
                <p className='mt-3'>
                I began my post-highschool education at BYU-Idaho. I enrolled as a Web Development and Design major. I immediately loved the classes that taught me about the web and taught me programming skills. However, these classes were all isolated, and very slow. I never got to see the full picture, just tiny snippits. So in addition to my schoolwork and job, I began taking free courses online in HTML, CSS, and JavaScript. I began learning much more in my dorm than in the classroom, and decided I would go for a less-traditional means of education with the hope of learning more at a pace suited better for myself. I completed the 2 week free trial offered by BloomTech, and was immediately hooked. I felt in control of my learning pace and got the depth I wanted. I learned best practices for the industry, as well as how to contribute to projects and keep a timeline.
                </p>
            </Tab>
            <Tab eventKey='experience' title='Experience'>
                <p className='mt-3'>
                I have a lot of menial labor jobs, which doesn't look awesome, but hey I can work.
                </p>
                <Button variant='secondary'>See My Work</Button>
            </Tab>
            <Tab eventKey='skills' title='Skills'>
                
            </Tab>
            <Tab eventKey='hobbies' title='Hobbies'>
                <p className='mt-3'>
                I do a few things: Chess, Models, and Hydroponics.
                </p>
                <Button href='https://www.instagram.com/ppp__official_/' variant='secondary'>See My Hydroponics</Button>
            </Tab>

        </Tabs>
    </div>
  )
}
