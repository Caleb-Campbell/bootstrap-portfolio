import React from 'react'
import { Stack, Accordion } from 'react-bootstrap'
export default function WorkExperience() {
  return (
    <Stack style={{width: '60%', margin: '15em auto'}}>
        <h2 className='text-center fw-bold text-dark'>Work Experience</h2>
        <Accordion  className='mb-5' defaultActiveKey="0">
      <Accordion.Item  eventKey="0">
        <Accordion.Header >Precision Contracting</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
        Completed contract projects and retained 100% customer satisfaction rates
            </li>
            <li>
        Worked with a team of 8 members, delegated tasks, and collaborated to resolve challenges
            </li>
            <li>
        Managed Social Media and created Instagram and Facebook posts that increased brand awareness
            </li>
            <li>
        Edited and refined key website features that improved client experience and sales by 10% 
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Full Time Missionary</Accordion.Header>
        <Accordion.Body>
          <ul>
          <li>
        Maximized daily task completion effectiveness and maintained a rigorous work schedule
          </li>
          <li>
        Communicated with a variety of multicultural people both on-site and online
          </li>
          <li>
        Led a group of 20+ missionaries for 12+ months to contribute to non-profit projects
          </li>
          </ul>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>East Idaho Carpet Cleaning</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
        Effectively helped approximately 10+ clients per week by resolving technical questions and issues.
            </li>
            <li>
        Influenced product and service promotions by generating client engagement thru social media.
            </li>
            <li>
        Managed internal and external communications, on-site routes, and project completion.
            </li>
          </ul>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Stack>
  )
}
