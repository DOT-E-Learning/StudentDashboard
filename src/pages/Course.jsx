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
              <Image src='courseImg2.jpg' height={160} alt='Frontend Course' />
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
              Frontend Development Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
              ante et arcu sodales sagittis. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <RingProgress
              sections={[{ value: 40, color: 'orange' }]}
              label={
                <Text color='orange' weight={700} align='center' size='xl'>
                  40%
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
              <Image src='courseImg2.jpg' height={160} alt='Frontend Course' />
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
              Frontend Development Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
              ante et arcu sodales sagittis. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <RingProgress
              sections={[{ value: 40, color: 'orange' }]}
              label={
                <Text color='orange' weight={700} align='center' size='xl'>
                  40%
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
              <Image src='courseImg2.jpg' height={160} alt='Frontend Course' />
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
              Frontend Development Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
              ante et arcu sodales sagittis. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <RingProgress
              sections={[{ value: 40, color: 'orange' }]}
              label={
                <Text color='orange' weight={700} align='center' size='xl'>
                  40%
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
