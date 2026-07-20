import { useState } from 'react'
import { Home } from './pages/Home/Home';
import { Portfolio } from './pages/Home/sections/Portfolio';
import { Routes, Route } from "react-router";
import { MainLayout } from './Layouts/MainLayout';
import { Experience } from './pages/Home/sections/Experience';
import { Contact } from './pages/Home/sections/Contact';
import { About } from './pages/Home/sections/About';

function App() {

  return (            
    <Routes>
        <Route element={<MainLayout />}>

            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/portfolio"
                element={<Portfolio />}
            />

{/*
            <Route
                path="/portfolio/:slug"
                element={<ProjectDetails />}
            />*/
}
        </Route>

    </Routes>
  );

}

export default App
