const skills = [
  {
    title: "Backend",
    color: "bg-violet-500/10 text-violet-300",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "Hibernate",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    color: "bg-cyan-500/10 text-cyan-300",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    color: "bg-emerald-500/10 text-emerald-300",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "bg-orange-500/10 text-orange-300",
    technologies: [
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
  },
  {
    title: "Architecture",
    color: "bg-pink-500/10 text-pink-300",
    technologies: [
      "Clean Architecture",
      "MVC",
      "SOLID",
      "Design Patterns",
    ],
  },
  {
    title: "Tools",
    color: "bg-slate-700 text-slate-200",
    technologies: [
      "Git",
      "GitHub",
      "IntelliJ IDEA",
      "VS Code",
      "Postman",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen items-center py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Technologies
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Skills & Technologies
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Technologies and tools I use to build scalable,
            maintainable and modern applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((category) => (

            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >

              <h3 className="mb-6 text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.technologies.map((technology) => (

                  <span
                    key={technology}
                    className={`rounded-full px-4 py-2 ${category.color}`}
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}