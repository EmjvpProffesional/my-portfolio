import { Hero } from "../pages/Home/sections/Hero";
import { Skills } from "../pages/Home/sections/Skills";
import { About } from "../pages/Home/sections/About";
import { Contact } from "../pages/Home/sections/Contact";


export function Home() {
  
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">

        ```
      */}
        <Hero />
        <Skills />
        <About />
        <Contact />
    </>
  )
}

