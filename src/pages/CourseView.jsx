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
            <h2>Frontend Development Course</h2>
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
                <Accordion.Control>Module 1</Accordion.Control>
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
              <Accordion.Item value='Module2'>
                <Accordion.Control>Module 2</Accordion.Control>
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
              <Accordion.Item value='Module3'>
                <Accordion.Control>Module 3</Accordion.Control>
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

              <Accordion.Item value='Module4'>
                <Accordion.Control>Module 4</Accordion.Control>
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
                <Accordion.Control>Module 5</Accordion.Control>
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
              <Accordion.Item value='Module6'>
                <Accordion.Control>Module 6</Accordion.Control>
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
        <h1 style={{  color: 'orange' }} >Section 2: Reading</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aut
          eum! Ea harum eaque doloribus voluptas perferendis, sequi consequatur
          sit, laudantium nisi rerum distinctio expedita! Quaerat corrupti alias
          possimus fugit velit, dignissimos commodi sit veritatis explicabo non
          perferendis minus veniam corporis placeat consequuntur voluptatum
          cupiditate quis ipsa eum deserunt quo accusantium neque iste fugiat.
          Ut, et. Perferendis voluptatem quia, recusandae quam animi nemo
          dolores mollitia illum officiis delectus cum accusantium nesciunt
          eveniet sequi beatae distinctio atque provident quas consequatur
          facere fugit amet maxime. Similique quas quae minima, pariatur ducimus
          veritatis, hic molestias expedita eius tempora nostrum inventore
          consectetur accusantium omnis. <br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aut
          eum! Ea harum eaque doloribus voluptas perferendis, sequi consequatur
          sit, laudantium nisi rerum distinctio expedita! Quaerat corrupti alias
          possimus fugit velit, dignissimos commodi sit veritatis explicabo non
          perferendis minus veniam corporis placeat consequuntur voluptatum
          cupiditate quis ipsa eum deserunt quo accusantium neque iste fugiat.
          Ut, et. Perferendis voluptatem quia, recusandae quam animi nemo
          dolores mollitia illum officiis delectus cum accusantium nesciunt
          eveniet sequi beatae distinctio atque provident quas consequatur
          facere fugit amet maxime. Similique quas quae minima, pariatur ducimus
          veritatis, hic molestias expedita eius tempora nostrum inventore
          consectetur accusantium omnis.
          consectetur accusantium omnis. <br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aut
          eum! Ea harum eaque doloribus voluptas perferendis, sequi consequatur
          sit, laudantium nisi rerum distinctio expedita! Quaerat corrupti alias
          possimus fugit velit, dignissimos commodi sit veritatis explicabo non
          perferendis minus veniam corporis placeat consequuntur voluptatum
          cupiditate quis ipsa eum deserunt quo accusantium neque iste fugiat.
          Ut, et. Perferendis voluptatem quia, recusandae quam animi nemo
          dolores mollitia illum officiis delectus cum accusantium nesciunt
          eveniet sequi beatae distinctio atque provident quas consequatur
          facere fugit amet maxime. Similique quas quae minima, pariatur ducimus
          veritatis, hic molestias expedita eius tempora nostrum inventore
          consectetur accusantium omnis.
        </p>
      </Card>
      <br />
    </div>
  );
}
