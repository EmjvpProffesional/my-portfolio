import { socialLinks } from "../../../data/socialLinks";

export function Contact() {

    return (

        <section
            id="contact"
            className="scroll-mt-20 flex min-h-screen items-center py-24"
        >

            <div className="mx-auto w-full max-w-4xl px-6">

                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                        Contact
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Let's Build Something Together
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        I'm always interested in discussing new opportunities,
                        backend development, and challenging software projects.
                        Feel free to reach out through any of the following
                        channels.
                    </p>

                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2">

                    {socialLinks.map((link) => {

                        const Icon = link.icon;

                        return (

                            <a
                                key={link.name}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-slate-800
                                    bg-slate-900/50
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:border-violet-500
                                    hover:bg-slate-900
                                "
                            >

                                <Icon className="h-8 w-8 text-violet-400 transition-transform group-hover:scale-110" />

                                <div>

                                    <h3 className="font-semibold text-white">
                                        {link.name}
                                    </h3>

                                    <p className="text-slate-400">
                                        {link.value}
                                    </p>

                                </div>

                            </a>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}