import { Link } from "react-router-dom";

export function Hero() {
    
    return (
      <section
        id="hero"
        className="mx-auto flex min-h-screen max-w-7xl items-center px-6"
      >
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
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

                <div className="mt-10 flex justify-center">
                    <Link
                    to="/portfolio"
                    className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-500"
                    >
                    View Portfolio
                    </Link>
                </div>
                </div>
            </div>
        </section>
    );
}