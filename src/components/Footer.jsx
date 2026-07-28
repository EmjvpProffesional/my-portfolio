export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center">

        <div className="mt-10 h-px w-full bg-white/10" />

        <p className="mt-8 text-sm text-slate-500">
          Built with React, TypeScript, Tailwind CSS and Vite.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          © {new Date().getFullYear()} Emilio Vargas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}