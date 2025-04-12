import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import Navbar from '../ui/Navbar';

function RoutesComponent() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
    </Routes>
    </>
  );
}

export default RoutesComponent;
