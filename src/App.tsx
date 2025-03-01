import React from 'react';
import './App.css';
import Home from './Home.tsx';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.tsx';
import Page404 from './Page404.tsx';
import OurStory from './OurStory.tsx';
import Location from './Location.tsx';
import Schedule from './Schedule.tsx';
import Registry from './Registry.tsx';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/' element={<Layout/>}>
            <Route path='our-story' element={<OurStory/>} />
            <Route path='location' element={<Location/>} />
            <Route path='schedule' element={<Schedule/>} />
            <Route path='registry' element={<Registry/>} />
            <Route path="*" element={<Page404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
