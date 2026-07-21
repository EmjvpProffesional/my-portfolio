import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { Skills } from "./sections/Skills";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";


export function Home() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">

        ```

        TODO: centrar sección hero
        TODO: Suavizar la transición entre secciones.
      */}
        <Hero />
        <Skills />
        <About />
        <Contact />
        
    </>
  )
}

