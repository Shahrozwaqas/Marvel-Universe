import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { Navbar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { HeroesGrid } from "./pages/HeroesGrid";
import { HeroDetail } from "./pages/HeroDetails";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";

import type { Hero } from "./types";
const year = new Date().getFullYear();
// just scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  // reading favorites from localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("marvelFavorites");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.warn("localStorage parse error: ", err);
      return [];
    }
  });

  // save updates to LS
  useEffect(() => {
    localStorage.setItem("marvelFavorites", JSON.stringify(favorites));
  }, [favorites]);

  // toggle favs
  const toggleFavorite = (e: React.MouseEvent, hero: Hero) => {
    e.preventDefault();
    e.stopPropagation();

    setFavorites((prev) => {
      return prev.includes(hero.id)
        ? prev.filter((id) => id !== hero.id)
        : [...prev, hero.id];
    });
  };

  return (
    <Router>
      <ScrollToTop />

      <div className="bg-marvel-black min-h-screen text-marvel-light font-sans selection:bg-marvel-red selection:text-white">
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home favorites={favorites} toggleFavorite={toggleFavorite} />
              }
            />

            <Route
              path="/heroes"
              element={
                <HeroesGrid
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />

            <Route
              path="/hero/:id"
              element={
                <HeroDetail
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />

            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* footer */}
        <footer className="bg-black py-8 text-center text-gray-600 text-sm border-t border-white/10">
          <p>© {year} Marvel Universe</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
