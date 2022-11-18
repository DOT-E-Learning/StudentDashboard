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
              <Image src='enter3.jpg' height={160} alt='Frontend Course' />
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
              ReachUp Training Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
            The programme provides a comprehensive training package for trainers, supervisors and home visitors. 
            It has been integrated with health, nutrition and empowerment
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
              <Image src='enter2.jpg' height={160} alt='Frontend Course' />
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
             Startup Training Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
            This course is designed for entrepreneurs and wanna-be entrepreneurs and gives them the confidence they need to succeed and to grow their businesses.
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
              <Image src='IT2.jpg' height={160} alt='Frontend Course' />
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
              IT Training Course
            </Text>

            <Text mt='xs' color='dimmed' size='sm'>
            With online IT training courses and certifications, the classroom comes to you.
            This course is begineer friendly and is designed to employ you with job-ready skills.
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
