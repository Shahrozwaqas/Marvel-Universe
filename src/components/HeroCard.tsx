import React from 'react';
import { Link } from 'react-router-dom';
import type { Hero } from '../types';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeroCardProps {
  hero: Hero; // Hero object
  isFavorite: boolean; // Is this hero in favorites?
  onToggleFavorite: (e: React.MouseEvent, hero: Hero) => void; // toggle favorite on click
  index: number; // index for staggered animation
}

export const HeroCard: React.FC<HeroCardProps> = ({ hero, isFavorite, onToggleFavorite, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // start animation from below
      whileInView={{ opacity: 1, y: 0 }} // animate into view
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // stagger effect
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-marvel-red/20 hover:scale-[1.02] transition-all duration-300"
    >
      <Link to={`/hero/${hero.id}`} className="block h-full">
        
        {/* Hero Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={hero.img}
            alt={hero.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-marvel-black via-transparent to-transparent opacity-90" />

          {/* Favorite Heart Button */}
          <button
            onClick={(e) => onToggleFavorite(e, hero)}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-marvel-red/20 transition-colors z-10"
          >
            <Heart
              size={20}
              className={`transition-all duration-300 ${
                isFavorite ? 'fill-marvel-red text-marvel-red' : 'text-white'
              }`}
            />
          </button>
        </div>

        {/* Hero Info */}
        <div className="absolute bottom-0 left-0 w-full p-5 transform transition-transform duration-300">
          <h3 className="text-2xl font-display font-bold uppercase text-white mb-1 group-hover:text-marvel-red transition-colors">
            {hero.name}
          </h3>
          <p className="text-sm text-gray-300 mb-2">{hero.teams[0]}</p>

          {/* Hero Powers */}
          <div className="flex gap-2 mt-2">
            {hero.powerType.map((power) => (
              <span
                key={power}
                className="px-2 py-1 text-xs font-semibold bg-white/10 rounded border border-white/10 text-gray-300"
              >
                {power}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
