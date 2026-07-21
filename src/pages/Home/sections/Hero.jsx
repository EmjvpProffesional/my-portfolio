import { Link } from "react-router";

export function Hero() {
    return (
        <section
            id="hero"
            className="mx-auto max-w-7xl flex min-h-screen items-center justify-between px-6 min-h-screen"
        >

            <div className="mx-auto w-full max-w-2xl px-6">

                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">

                    Backend Software Engineer

                </span>

                <h1 className="mt-6 text-6xl font-bold text-white">

                    Building reliable backend systems that power modern applications.

                </h1>

                <p className="mt-8 text-lg leading-8 text-slate-400">

                    I build scalable APIs, clean architectures,
                    and full-stack applications using Java,
                    Spring Boot, React, PostgreSQL and cloud
                    technologies.

                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

                    <Link
                        to="/portfolio"
                        className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-500"
                    >
                        View Portfolio
                    </Link>

                </div>

            </div>

        </section>
    );
}