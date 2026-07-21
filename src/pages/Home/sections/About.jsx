import { Link } from "react-router";

export function About() {
    return (
        <section
            id="about"
            className="min-h-screen scroll-mt-20 flex items-center py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Imagen o Avatar */}
                    <div className="flex justify-center">

                        <div className="flex h-80 w-80 items-center justify-center rounded-full border border-slate-800 bg-slate-900">

                            <span className="text-7xl font-bold text-violet-400">
                                EV
                            </span>

                        </div>

                    </div>

                    {/* Contenido */}
                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                            About Me
                        </p>

                        <h2 className="mt-4 text-5xl font-bold text-white">
                            Building software with clean architecture,
                            scalability and performance in mind.
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-400">
                            I'm a Software Engineer specialized in backend
                            development using Java and Spring Boot. I enjoy
                            designing scalable APIs, clean architectures and
                            maintainable applications that solve real business
                            problems.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            Besides backend development, I also build
                            full-stack applications with React, allowing me to
                            understand and develop complete software solutions
                            from frontend to database.
                        </p>

                        {/* Información rápida */}
                        <div className="mt-10 grid grid-cols-2 gap-6">

                            <div>
                                <h3 className="font-semibold text-white">
                                    Location
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Colombia
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    Main Stack
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Java · Spring Boot · React
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    Architecture
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Clean Architecture · MVC
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    Languages
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Spanish · English
                                </p>
                            </div>

                        </div>

                        <div className="mt-10">

                            <Link
                                to="/portfolio"
                                className="inline-flex rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-500"
                            >
                                View My Projects
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}