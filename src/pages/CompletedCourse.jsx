import {
  Button,
  Card,
  Center,
  Grid,
  Image,
  RingProgress,
  Text,
  ThemeIcon,
} from '@mantine/core';
import React from 'react';
import Navbar from '../components/Navbar';
import { IconCheck } from '@tabler/icons';

export default function CompletedCourse() {
  return (
    <div style={{ marginLeft: '20vw', marginRight: '2vw' }}>
      <br />
      <Navbar />
      <br />
      <Button
        component='a'
        rel='noopener noreferrer'
        href='/course'
        color='orange'
        radius='md'
        style={{ marginRight: '10px' }}
      >
        Active Courses
      </Button>
      <Button
        component='a'
        rel='noopener noreferrer'
        href='#'
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
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        target='_blank'
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
              sections={[{ value: 100, color: 'orange' }]}
              label={
                <Center>
                  <ThemeIcon
                    color='orange'
                    variant='light'
                    radius='xl'
                    size='xl'
                  >
                    <IconCheck size={22} />
                  </ThemeIcon>
                </Center>
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
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        target='_blank'
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
              sections={[{ value: 100, color: 'orange' }]}
              label={
                <Center>
                  <ThemeIcon
                    color='orange'
                    variant='light'
                    radius='xl'
                    size='xl'
                  >
                    <IconCheck size={22} />
                  </ThemeIcon>
                </Center>
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
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        target='_blank'
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
              sections={[{ value: 100, color: 'orange' }]}
              label={
                <Center>
                  <ThemeIcon
                    color='orange'
                    variant='light'
                    radius='xl'
                    size='xl'
                  >
                    <IconCheck size={22} />
                  </ThemeIcon>
                </Center>
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
