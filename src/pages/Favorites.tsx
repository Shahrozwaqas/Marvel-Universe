import React from 'react';
import { Link } from 'react-router-dom';
import { HEROES } from '../constants';
import { HeroCard } from '../components/HeroCard';
import type { Hero } from '../types';
import { HeartCrack } from 'lucide-react';

interface FavoritesProps {
  favorites: string[]; // list of hero IDs that are favorited
  toggleFavorite: (e: React.MouseEvent, hero: Hero) => void; // function to add/remove a hero from favorites
}

export const Favorites: React.FC<FavoritesProps> = ({ favorites, toggleFavorite }) => {
  // filter heroes that are in favorites
  const myFavoriteHeroes = HEROES.filter(hero => favorites.includes(hero.id));

  return (
    <div className="min-h-screen pt-10 px-4 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-2">
          Your <span className="text-marvel-red">Squad</span>
        </h1>
        <p className="text-gray-400">Manage your dream team of superheroes.</p>
      </div>

      {/* Favorite Heroes Grid */}
      {myFavoriteHeroes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {myFavoriteHeroes.map((hero, index) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              index={index}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        // Empty state when no favorites
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <HeartCrack size={64} className="text-gray-600 mb-6" />
          <h2 className="text-2xl font-bold text-gray-300 mb-2">No favorites yet</h2>
          <p className="text-gray-500 mb-8 max-w-md">
            You haven't added any heroes to your squad. Explore the universe and find your champions.
          </p>
          <Link 
            to="/heroes"
            className="px-8 py-3 bg-marvel-red text-white font-bold uppercase tracking-widest rounded-full hover:bg-red-700 transition-colors"
          >
            Find Heroes
          </Link>
        </div>
      )}
    </div>
  );
};
