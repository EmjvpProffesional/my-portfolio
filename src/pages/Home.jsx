

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
              <section
            id="hero"
            className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 lg:px-8"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                Backend Software Engineer
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Building reliable backend systems that power great applications.
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                I specialize in Java, Spring Boot, SQL, and cloud technologies,
                designing scalable APIs and clean architectures that solve real-world
                business challenges.
              </p>

{/**<div className="mt-10 flex gap-4">
                <Link
                  to="/projects"
                  className="rounded-md bg-indigo-600 px-6 py-3 font-medium text-white"
                >
                  Explore Projects
                </Link>

                <a
                  href="/resume.pdf"
                  className="rounded-md border border-gray-700 px-6 py-3 font-medium text-gray-300"
                >
                  Download Resume
                </a>
              </div> */}
              
            </div>
          </section>
    </>
  )
}

