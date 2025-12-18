import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Heart, Shield, Zap, Users, Film } from "lucide-react";
import { HEROES } from "../constants";
import type { Hero } from "../types";
import { StatBar } from "../components/StatBar";
import { motion } from "framer-motion";

interface HeroDetailProps {
  favorites: string[];
  toggleFavorite: (e: React.MouseEvent, hero: Hero) => void;
}

export const HeroDetail: React.FC<HeroDetailProps> = ({
  favorites,
  toggleFavorite,
}) => {
  const { id } = useParams<{ id: string }>();
  const hero = HEROES.find((h) => h.id === id);

  // If hero not found → redirect back
  if (!hero) return <Navigate to="/heroes" replace />;

  const isFavorite = favorites.includes(hero.id);

  return (
    <div className="min-h-screen pb-20">

      {/* Back Button */}
      <div className="fixed top-20 left-4 z-40">
        <Link
          to="/heroes"
          className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-marvel-red transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </Link>
      </div>

      {/* Banner / Header Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={hero.img}
            alt={hero.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marvel-black via-marvel-black/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 w-full px-4 max-w-7xl mx-auto pb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              {/* Name + Aliases */}
              <div>
                <h4 className="text-marvel-red font-bold uppercase tracking-widest mb-2">
                  {hero.realName}
                </h4>

                <h1 className="text-5xl md:text-8xl font-display font-bold text-white uppercase leading-none drop-shadow-2xl">
                  {hero.name}
                </h1>

                <div className="flex flex-wrap gap-2 mt-4">
                  {hero.aliases.map((alias) => (
                    <span
                      key={alias}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/10 text-gray-200"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              </div>

              {/* Favorite Button */}
              <button
                onClick={(e) => toggleFavorite(e, hero)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-widest transition-all ${
                  isFavorite
                    ? "bg-marvel-red text-white shadow-lg shadow-red-900/50"
                    : "bg-white text-marvel-black hover:bg-gray-200"
                }`}
              >
                <Heart size={20} className={isFavorite ? "fill-white" : ""} />
                {isFavorite ? "Favorited" : "Add to Favorites"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">

        {/* LEFT — Bio, Stats, Gallery */}
        <div className="lg:col-span-2 space-y-12">

          {/* Biography */}
          <section>
            <h2 className="text-2xl font-display font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Shield className="text-marvel-red" /> Biography
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10">
              {hero.bio}
            </p>
          </section>

          {/* Power Stats */}
          <section>
            <h2 className="text-2xl font-display font-bold uppercase text-white mb-6 flex items-center gap-2">
              <Zap className="text-marvel-red" /> Power Stats
            </h2>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <StatBar label="Strength" value={hero.strength} delay={0.1} />
              <StatBar label="Intelligence" value={hero.intelligence} delay={0.2} />
              <StatBar label="Speed" value={hero.speed} delay={0.3} />
              <StatBar label="Durability" value={hero.durability} delay={0.4} />
              <StatBar
                label="Popularity"
                value={hero.popularity}
                color="bg-yellow-500"
                delay={0.5}
              />
            </div>
          </section>

          {/* Visual Archive */}
          <section>
            <h2 className="text-2xl font-display font-bold uppercase text-white mb-6">
              Visual Archive
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hero.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${hero.name} ${idx}`}
                  className="rounded-xl border border-white/10 hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT — Affiliations, Abilities, Movies */}
        <div className="space-y-10">

          {/* Affiliations */}
          <div className="bg-marvel-gray/50 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-display font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Users size={20} className="text-marvel-red" /> Affiliations
            </h3>
            <div className="flex flex-wrap gap-2">
              {hero.teams.map((team) => (
                <span
                  key={team}
                  className="px-3 py-1 bg-marvel-red/20 text-marvel-red border border-marvel-red/30 rounded-lg text-sm font-semibold"
                >
                  {team}
                </span>
              ))}
            </div>
          </div>

          {/* Abilities */}
          <div className="bg-marvel-gray/50 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-display font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Zap size={20} className="text-marvel-red" /> Abilities
            </h3>

            <ul className="space-y-2">
              {hero.powerType.map((power) => (
                <li key={power} className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-marvel-red rounded-full mr-3" />
                  {power}
                </li>
              ))}
            </ul>
          </div>

          {/* Cinema History */}
          <div className="bg-marvel-gray/50 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-display font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Film size={20} className="text-marvel-red" /> Cinema
            </h3>

            <ul className="space-y-3">
              {hero.notableMovies.map((movie) => (
                <li
                  key={movie}
                  className="text-sm text-gray-400 border-b border-white/5 pb-2 last:border-0 last:pb-0"
                >
                  {movie}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
