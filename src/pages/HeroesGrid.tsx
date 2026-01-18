import React, { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { HEROES } from "../constants";
import { HeroCard } from "../components/HeroCard";
import type { Hero, SortOption } from "../types";

interface HeroesGridProps {
  favorites: string[];
  toggleFavorite: (e: React.MouseEvent, hero: Hero) => void;
}

export const HeroesGrid: React.FC<HeroesGridProps> = ({
  favorites,
  toggleFavorite
}) => {
  // main filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  // collecting unique team names (for dropdown)
  const allTeams = useMemo(() => {
    const s = new Set<string>();

    HEROES.forEach((h) => {
      h.teams.forEach((t) => s.add(t));
    });

    return ["All", ...Array.from(s).sort()];
  }, []);

  // filtering + sorting heroes
  const filteredHeroes = useMemo(() => {
    const query = searchTerm.toLowerCase();

    return HEROES.filter((hero) => {
      const inName =
        hero.name.toLowerCase().includes(query) ||
        hero.realName.toLowerCase().includes(query);

      const inTeam =
        selectedTeam === "All" || hero.teams.includes(selectedTeam);

      return inName && inTeam;
    }).sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "strength") return b.strength - a.strength;
      if (sortBy === "popularity") return b.popularity - a.popularity;
      return 0;
    });
  }, [searchTerm, selectedTeam, sortBy]);

  return (
    <div className="min-h-screen pt-10 pb-20 px-4 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase text-white mb-4">
          Heroes <span className="text-marvel-red">Assemble</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Search and filter through our database of superheroes and villains.
        </p>
      </div>

      {/* Filters panel */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-12 shadow-xl">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
          {/* Search input */}
          <div className="relative w-full lg:w-1/3">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by name or alias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-marvel-black/50 border border-white/10 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-marvel-red transition-colors"
            />
          </div>

          {/* Dropdown controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Team Filter */}
            <div className="relative min-w-[200px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Filter size={16} />
              </div>

              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="w-full appearance-none bg-marvel-black/50 border border-white/10 text-white pl-10 pr-8 py-3 rounded-xl focus:outline-none focus:border-marvel-red cursor-pointer"
              >
                {allTeams.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="relative min-w-[200px]">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full appearance-none bg-marvel-black/50 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-marvel-red cursor-pointer"
              >
                <option value="name">Sort by Name (A-Z)</option>
                <option value="strength">Sort by Strength</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid / Results */}
      {filteredHeroes.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHeroes.map((hero, idx) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              index={idx}
              isFavorite={favorites.includes(hero.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-500">
            No heroes found matching your criteria.
          </h3>

          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedTeam("All");
            }}
            className="mt-4 text-marvel-red hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
