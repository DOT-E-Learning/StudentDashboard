import { Grid } from '@mantine/core';
import React from 'react';
import Navbar from '../components/Navbar';
import CourseList from '../components/CourseList';
import CourseListTwo from '../components/CourseListTwo';
import CourseListThree from '../components/CourseListThree';
import CourseListFour from '../components/CourseListFour';
import CourseListFive from '../components/CourseListFive';
import CourseListSix from '../components/CourseListSix';
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
          <CourseListTwo  />
          </Grid.Col>
          <Grid.Col span={4}>
          <CourseListThree  />
          </Grid.Col>
        </Grid>
        <br /><br />
        <Grid>
          <Grid.Col span={4}>
            <CourseListFour  />
          </Grid.Col>
          <Grid.Col span={4}>
          <CourseListFive  />
          </Grid.Col>
          <Grid.Col span={4}>
          <CourseListSix  />
          </Grid.Col>
        </Grid>
        <br /><br /><br />
      </div>
    </section>
  );
}

export default Explore;
