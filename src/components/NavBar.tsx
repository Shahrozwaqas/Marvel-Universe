import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const location = useLocation();

  // Helper to mark active link
  const isActive = (path: string) =>
    location.pathname === path
      ? 'text-marvel-red'
      : 'text-gray-300 hover:text-white';

  // Reusable NavLink component
  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      onClick={() => setIsOpen(false)} // close mobile menu on click
      className={`block py-2 px-4 md:inline-block md:py-0 font-display uppercase tracking-widest text-sm font-bold transition-colors ${isActive(to)}`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-marvel-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-marvel-red text-white font-display font-bold text-xl px-2 py-1 tracking-tighter transform group-hover:scale-105 transition-transform">
              MARVEL
            </div>
            <span className="hidden sm:block font-display text-white tracking-widest text-lg ml-2">
              UNIVERSE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/heroes" label="Characters" />
            <NavLink to="/favorites" label="Favorites" />
            <NavLink to="/about" label="About" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-marvel-black border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" label="Home" />
            <NavLink to="/heroes" label="Characters" />
            <NavLink to="/favorites" label="Favorites" />
            <NavLink to="/about" label="About" />
          </div>
        </div>
      )}
    </nav>
  );
};
