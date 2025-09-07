import React, { useState } from "react";
import { MovieNight } from "../../data/movieNightData";

const MovieList: React.FC<{ movies: MovieNight[] }> = ({ movies }) => {
  const [genre, setGenre] = useState("");
  const [decade, setDecade] = useState("");
  const [mood, setMood] = useState("");
  const [rating, setRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      (genre === "" || movie.genre === genre) &&
      (decade === "" || movie.decade === decade) &&
      (mood === "" || movie.mood === mood) &&
      (rating === "" || movie.rating >= Number(rating))
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🍿 Movie Night Picker</h1>

      {/* Full-width Filter Bar */}
      <div className="flex flex-wrap justify-between items-center bg-white shadow-md rounded-xl p-4 mb-8 gap-4">
        {/* Genre */}
        <div className="flex flex-col flex-1 min-w-[120px]">
          <label className="text-gray-600 font-medium mb-1">Genre</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none hover:border-gray-500 transition"
          >
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>

        {/* Decade */}
        <div className="flex flex-col flex-1 min-w-[120px]">
          <label className="text-gray-600 font-medium mb-1">Decade</label>
          <select
            value={decade}
            onChange={(e) => setDecade(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none hover:border-gray-500 transition"
          >
            <option value="">All Decades</option>
            <option value="2000s">2000s</option>
            <option value="2010s">2010s</option>
          </select>
        </div>

        {/* Mood */}
        <div className="flex flex-col flex-1 min-w-[120px]">
          <label className="text-gray-600 font-medium mb-1">Mood</label>
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

        {/* Rating */}
        <div className="flex flex-col flex-1 min-w-[120px]">
          <label className="text-gray-600 font-medium mb-1">Minimum Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none hover:border-gray-500 transition"
          >
            <option value="">All Ratings</option>
            <option value="7">⭐ 7+</option>
            <option value="8">⭐ 8+</option>
            <option value="9">⭐ 9+</option>
          </select>
        </div>

        {/* Reset */}
        <button
          onClick={() => {
            setGenre("");
            setDecade("");
            setMood("");
            setRating("");
          }}
          className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>

      {/* Movie Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition hover:shadow-2xl"
          >
            <div className="aspect-[2/3] w-full">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
              <p className="text-sm text-gray-600">{movie.genre} • {movie.decade}</p>
              <p className="text-xs text-gray-500">Mood: {movie.mood}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
