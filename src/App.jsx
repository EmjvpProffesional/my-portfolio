import { useState } from 'react'
import { Portfolio } from './pages/Home/sections/Portfolio';
import { Routes, Route } from "react-router-dom";
import { MainLayout } from './Layouts/MainLayout';
import { Contact } from './pages/Home/sections/Contact';
import { About } from './pages/Home/sections/About';
import { Home } from './components/Home';

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
