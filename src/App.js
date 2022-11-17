import React from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Course from './pages/Course';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import CourseDetail from './pages/CourseDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/course' element={<Course />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/courseDetail' element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

const Div = styled.div`
  position: relative;
  background-color: white;
`;
