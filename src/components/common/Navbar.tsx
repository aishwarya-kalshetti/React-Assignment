import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // make sure you installed lucide-react

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold text-yellow-400">🎬 CineVerse</div>

        {/*  Nav */}
        <div className="hidden md:flex space-x-8 text-sm">
          <div className="group relative">
            <Link to="/cinefeed" className="hover:text-yellow-400 font-medium">
              CineFeed
            </Link>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-3 rounded-lg w-64 mt-2 shadow-lg">
              <p>
                A social movie feed where users share opinions, reviews, and reactions to films.
              </p>
            </div>
          </div>

          <div className="group relative">
            <Link to="/flicklist" className="hover:text-yellow-400 font-medium">
              FlickList
            </Link>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-3 rounded-lg w-64 mt-2 shadow-lg">
              <p>
                Curated collections of movies by themes or genres (e.g., Sci-Fi, 80s Classics).
              </p>
            </div>
          </div>

          <div className="group relative">
            <Link to="/movienight" className="hover:text-yellow-400 font-medium">
              Movie Night Picker
            </Link>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-3 rounded-lg w-64 mt-2 shadow-lg">
              <p>
                Helps pick a movie by filtering based on genre, decade, or mood.
              </p>
            </div>
          </div>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link
            to="/cinefeed"
            className="block hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            CineFeed – Social movie feed
          </Link>
          <Link
            to="/flicklist"
            className="block hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            FlickList – Curated movie collections
          </Link>
          <Link
            to="/movienight"
            className="block hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Movie Night Picker – Filter & find movies
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
