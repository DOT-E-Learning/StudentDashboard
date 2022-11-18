import { Button, Card, Grid, Image, RingProgress, Text } from '@mantine/core';
import React from 'react';
import Navbar from '../components/Navbar';

function Course() {
  return (
    <div style={{ marginLeft: '20vw', marginRight: '2vw' }}>
      <br />
      <Navbar />
      <br />
      <Button
        component='a'
        rel='noopener noreferrer'
        href='#'
        color='orange'
        radius='md'
        style={{ marginRight: '10px' }}
      >
        Active Courses
      </Button>
      <Button
        component='a'
        rel='noopener noreferrer'
        href='/courseCompleted'
        color='dark'
        radius='md'
      >
        Completed Courses
      </Button>
      <br />
      <br />
      <Card
        shadow='xl'
        p='xl'
        component='a'
        href='/courseView'
      >
        <Grid>
          <Grid.Col span={3}>
            <Card.Section>
              <Image src='Students-laughing.jpg' height={160} alt='Frontend Course' />
            </Card.Section>
          </Grid.Col>
          <Grid.Col span={1}></Grid.Col>
          <Grid.Col span={6}>
            <Text
              style={{ marginRight: '20px' }}
              weight={500}
              size='xl'
              mt='md'
            >
              Scaleup Training Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
           This course is designed to train employees for increased productivity, higher engagement in social services. Dedicating 10 hours a week is recommended to finish this course
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <RingProgress
              sections={[{ value: 1, color: 'orange' }]}
              label={
                <Text color='orange' weight={700} align='center' size='xl'>
                  1%
                </Text>
              }
            />
          </Grid.Col>
        </Grid>
      </Card>
      <br />
      <br />
      <Card
        shadow='xl'
        p='xl'
        component='a'
        href='/courseView'
      >
        <Grid>
          <Grid.Col span={3}>
            <Card.Section>
              <Image src='course3img.jpg' height={160} alt='Frontend Course' />
            </Card.Section>
          </Grid.Col>
          <Grid.Col span={1}></Grid.Col>
          <Grid.Col span={6}>
            <Text
              style={{ marginRight: '20px' }}
              weight={500}
              size='xl'
              mt='md'
            >
             Women Empowerment Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
            Empowering women is essential to the health and social development of families, communities and countries.
            This course is designed to inspire and motivate women from various working class of the community to make their community a better place
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <RingProgress
              sections={[{ value: 60, color: 'orange' }]}
              label={
                <Text color='orange' weight={700} align='center' size='xl'>
                  60%
                </Text>
              }
            />
          </Grid.Col>
        </Grid>
      </Card>
      <br />
      <br />
      <Card
        shadow='xl'
        p='xl'
        component='a'
        href='/courseView'
      >
        <Grid>
          <Grid.Col span={3}>
            <Card.Section>
              <Image src='women.png' height={160} alt='Frontend Course' />
            </Card.Section>
          </Grid.Col>
          <Grid.Col span={1}></Grid.Col>
          <Grid.Col span={6}>
            <Text
              style={{ marginRight: '20px' }}
              weight={500}
              size='xl'
              mt='md'
            >
              Entrepreneurship Training Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
Entrepreneurship enables new markets to develop in the form of goods, services, and technology. This course paves a way for generating wealth through the lessons provided
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <RingProgress
              sections={[{ value: 80, color: 'orange' }]}
              label={
                <Text color='orange' weight={700} align='center' size='xl'>
                  80%
                </Text>
              }
            />
          </Grid.Col>
        </Grid>
      </Card>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Course;
