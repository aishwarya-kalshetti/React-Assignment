import React from "react";

interface FilterControlsProps {
  genre: string;
  decade: string;
  mood: string;
  setGenre: (genre: string) => void;
  setDecade: (decade: string) => void;
  setMood: (mood: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ genre, decade, mood, setGenre, setDecade, setMood }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {/* Genre */}
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none hover:border-gray-500 transition"
      >
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
      </select>

      {/* Decade */}
      <select
        value={decade}
        onChange={(e) => setDecade(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none hover:border-gray-500 transition"
      >
        <option value="">All Decades</option>
        <option value="2000s">2000s</option>
        <option value="2010s">2010s</option>
      </select>

      {/* Mood */}
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none hover:border-gray-500 transition"
      >
        <option value="">All Moods</option>
        <option value="funny">Funny</option>
        <option value="intense">Intense</option>
        <option value="epic">Epic</option>
      </select>
    </div>
  );
};

export default FilterControls;
