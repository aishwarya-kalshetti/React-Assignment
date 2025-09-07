import React from "react";

interface FilterControlsProps {
  setGenre: (genre: string) => void;
  setDecade: (decade: string) => void;
  setMood: (mood: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ setGenre, setDecade, setMood }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {/* Genre Filter */}
      <select
        onChange={(e) => setGenre(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm"
      >
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        
      </select>

      {/* Decade Filter */}
      <select
        onChange={(e) => setDecade(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm"
      >
        <option value="">All Decades</option>
        <option value="2000s">2000s</option>
        <option value="2010s">2010s</option>
      </select>

      {/* Mood Filter */}
      <select
        onChange={(e) => setMood(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm"
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
