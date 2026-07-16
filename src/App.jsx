import { useState } from 'react'
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Routes, Route } from "react-router";
import { MainLayout } from './Layouts/MainLayout';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      
    </Routes>
        
  
  );

}

export default App
