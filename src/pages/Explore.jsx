import { Grid } from '@mantine/core';
import React from 'react';
import Navbar from '../components/Navbar';
import CourseList from '../components/CourseList';

function Explore() {
  return (
    <section>
      <div style={{ marginLeft: '19vw', marginRight: '2vw' }}>
        <br />
        <Navbar />
        <br />
        <Grid>
          <Grid.Col span={4}>
            <CourseList  />
          </Grid.Col>
          <Grid.Col span={4}>
          <CourseList  />
          </Grid.Col>
          <Grid.Col span={4}>
          <CourseList  />
          </Grid.Col>
        </Grid>
        <br /><br />
        <Grid>
          <Grid.Col span={4}>
            <CourseList  />
          </Grid.Col>
          <Grid.Col span={4}>
          <CourseList  />
          </Grid.Col>
          <Grid.Col span={4}>
          <CourseList  />
          </Grid.Col>
        </Grid>
        <br /><br /><br />
      </div>
    </section>
  );
}

export default Explore;
