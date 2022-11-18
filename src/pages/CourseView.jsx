import { Accordion, Button, Card, Grid } from '@mantine/core';
import ReactPlayer from 'react-player';
import React from 'react';
import Navbar from '../components/Navbar';

export default function CourseView() {
  return (
    <div style={{ marginLeft: '20vw', marginRight: '2vw' }}>
      <br /> <Navbar />
      <br />
      <Grid>
        <Grid.Col span={8}>
          <Card
            style={{ backgroundColor: 'black', color: 'orange' }}
            shadow='lg'
            p='lg'
            radius='md'
            withBorder
          >
            <h2>Reachup Training Course</h2>
            <br /><h2  style={{ color: 'white' }}>Section 1: Video Section</h2>
            <br />
            <br />
            <ReactPlayer url='https://www.youtube.com/watch?v=CHnLiiFvY9o' />
            <br />
            <br />
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow='lg' p='lg' radius='md' withBorder>
            <h2>Course Content</h2>
            <br />
            <Accordion defaultValue='Module1'>
              <Accordion.Item value='Module1'>
                <Accordion.Control>  Module 1: Course Introduction and Expectation</Accordion.Control>
                <Accordion.Panel>
                  <br /> 
                  <Button
                    style={{ marginLeft: '170px' }}
                    component='a'
                    rel='noopener noreferrer'
                    href='#'
                    color='dark'
                  >
                    More
                  </Button>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value='Module2'>
                <Accordion.Control>Module 2: Strengths, Skills andPassion</Accordion.Control>
                <Accordion.Panel>
                  
                  <br /> 
                  <Button
                    style={{ marginLeft: '170px' }}
                    component='a'
                    rel='noopener noreferrer'
                    href='#'
                    color='dark'
                  >
                    More
                  </Button>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value='Module3'>
                <Accordion.Control>Module 3: Develop Your Vision</Accordion.Control>
                <Accordion.Panel>
                  <Button
                    style={{ marginLeft: '170px' }}
                    component='a'
                    rel='noopener noreferrer'
                    href='#'
                    color='dark'
                  >
                    More
                  </Button>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='Module4'>
                <Accordion.Control>Module 4: Mapping Your Assets</Accordion.Control>
                <Accordion.Panel>
                  Module 1 Introduction
                  <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Ipsam ea rem architecto itaque suscipit natus.
                  <Button
                    style={{ marginLeft: '170px' }}
                    component='a'
                    rel='noopener noreferrer'
                    href='#'
                    color='dark'
                  >
                    More
                  </Button>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value='Module5'>
                <Accordion.Control>Module 5: The Opportunity Marketplace</Accordion.Control>
                <Accordion.Panel>
                  
                  <br /> 
                  <Button
                    style={{ marginLeft: '170px' }}
                    component='a'
                    rel='noopener noreferrer'
                    href='#'
                    color='dark'
                  >
                    More
                  </Button>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value='Module6'>
                <Accordion.Control>Module 6: Planning Your Mission</Accordion.Control>
                <Accordion.Panel>
                  Module 1 Introduction
                  <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Ipsam ea rem architecto itaque suscipit natus.
                  <Button
                    style={{ marginLeft: '170px' }}
                    component='a'
                    rel='noopener noreferrer'
                    href='#'
                    color='dark'
                  >
                    More
                  </Button>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Grid.Col>
      </Grid>
      <br />
      <br />
      <Card shadow='xl' p='lg' radius='md' withBorder>
        <h1 style={{  color: 'orange' }} >Reading: What is Reachup?</h1>
        <br />
        <p>
        The vision of reachup, is to be known as a nationally recognized center of excellence, assisting in creating a community where there is equality in healthcare and health for all families.
        The mission of reachup inc is to advocate for and mobilize resources to help communities achieve equality in healthcare and positive health for families.
        To build community capacity aimed at improving racial and ethnic equity in healthcare and positive health outcomes for families in the Tampa Bay region by one half percentage point annually.
        Entrepreneurship is one of the resources economists categorize as integral to production, the other three being land/natural resources, labor, and capital. An entrepreneur combines the first three of these to manufacture goods or provide services. They typically create a business plan, hire labor, acquire resources and financing, and provide leadership and management for the business.

Entrepreneurs commonly face many obstacles when building their companies. The three that many of them cite as the most challenging are as follows:
<br/>
<br />
Overcoming bureaucracy
Hiring talent
Obtaining financing
Economists have never had a consistent definition of "entrepreneur" or "entrepreneurship" (the word "entrepreneur" comes from the French verb entreprendre, meaning "to undertake"). Though the concept of an entrepreneur existed and was known for centuries, the classical and neoclassical economists left entrepreneurs out of their formal models: They assumed that perfect information would be known to fully rational actors, leaving no room for risk-taking or discovery. It wasn't until the middle of the 20th century that economists seriously attempted to incorporate entrepreneurship into their models.
        </p>
      </Card>
      <br />
    </div>
  );
}
