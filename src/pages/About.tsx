import React from "react";

export const About: React.FC = () => {

  return (
    <div className="min-h-screen pt-24 px-5 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-10 uppercase">
        About <span className="text-marvel-red">Project</span>
      </h1>

      <div className="space-y-10">
        {/* Mission */}
        <section className="bg-white/5 p-7 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-3 tracking-wide uppercase">
            Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To create an immersive Marvel Universe web app where users can explore a wide array of superheroes, learn about their powers, teams, and stats, and curate their dream squad. The app aims to combine fun interactivity, smooth animations, and a visually striking design, giving users a thrilling and engaging experience as they manage their ultimate superhero team.
          </p>
        </section>

        {/* Tech + Features */}
        <div className="grid md:grid-cols-2 gap-7">
          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-marvel-red mb-2 uppercase tracking-wider">
              Tech Stack
            </h3>
            <ul className="text-gray-400 space-y-1.5 list-disc list-inside">
              <li>React 18</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>React Router</li>
              <li>Lucide Icons</li>
            </ul>
          </section>

          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-marvel-red mb-2 uppercase tracking-wider">
              Features
            </h3>
            <ul className="text-gray-400 space-y-1.5 list-disc list-inside">
              <li>Hero Grid & Card Layout</li>
              <li>Search / Filter System</li>
              <li>Simple Local Storage Save</li>
              <li>Fully Responsive</li>
              <li>Smooth Animations</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-xs text-gray-500 mt-10 pt-6 border-t border-white/10 text-center">
          <p>All character names belong to Marvel Studios.</p>
        </footer>
      </div>
    </div>
  );
};
