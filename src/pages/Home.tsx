import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HEROES } from "../constants";
import { HeroCard } from "../components/HeroCard";
import type { Hero } from "../types";

interface HomeProps {
  favorites: string[];
  toggleFavorite: (e: React.MouseEvent, hero: Hero) => void;
}

export const Home: React.FC<HomeProps> = ({ favorites, toggleFavorite }) => {
  // grabbing first few heroes for homepage
  const featuredHeroes = HEROES.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* --- Banner Section --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40"
          style={{ backgroundImage: "url('./assets/home.jpg')" }}
        />

        {/* Overlay tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-marvel-black/30 via-marvel-black/60 to-marvel-black z-0" />

        {/* Banner text */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-white uppercase drop-shadow-2xl mb-6">
              Marvel <span className="text-marvel-red">Heroes</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
              Explore the universe of Earth's mightiest heroes and villains.
              Dive into their powers, origins, and teams.
            </p>

            <Link
              to="/heroes"
              className="inline-flex items-center gap-2 bg-marvel-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-900/50"
            >
              Explore Universe <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Featured Section --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-white border-l-4 border-marvel-red pl-4">
            Featured Heroes
          </h2>

          {/* Desktop "View All" */}
          <Link
            to="/heroes"
            className="hidden md:flex items-center text-marvel-red hover:text-white transition-colors uppercase font-bold text-sm tracking-widest"
          >
            View All
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHeroes.map((hero, i) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              index={i}
              isFavorite={favorites.includes(hero.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        {/* Mobile "View All" */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/heroes"
            className="inline-block text-marvel-red border border-marvel-red px-6 py-2 rounded-full uppercase font-bold text-sm tracking-widest hover:bg-marvel-red hover:text-white transition-colors">
            View All Heroes
          </Link>
        </div>
      </section>
    </div>
  );
};
