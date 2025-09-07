import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/cinefeed", name: "CineFeed", desc: "Social movie feed to share reviews & reactions" },
    { path: "/flicklist", name: "FlickList", desc: "Curated collections by genre or theme" },
    { path: "/movienight", name: "Movie Night Picker", desc: "Filter movies by mood, genre, or decade" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
          🎬 CineVerse
        </div>

        
        <div className="hidden md:flex space-x-8 text-sm">
          {links.map((link) => (
            <div key={link.path} className="group relative">
              <Link
                to={link.path}
                className="hover:text-yellow-400 font-medium transition"
              >
                {link.name}
              </Link>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-3 rounded-lg w-64 mt-2 shadow-lg transition">
                {link.desc}
              </div>
            </div>
          ))}
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

     
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block hover:text-yellow-400 transition"
              onClick={() => setOpen(false)}
            >
              <span className="font-semibold">{link.name} – </span>
              <span className="text-gray-300 text-sm">{link.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
