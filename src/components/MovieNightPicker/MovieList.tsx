import React, { useState } from "react";
import { MovieNight } from "../../data/movieNightData";
import FilterControls from "./FilterControls";

interface MovieListProps {
  movies: MovieNight[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [genre, setGenre] = useState("");
  const [decade, setDecade] = useState("");
  const [mood, setMood] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return (
      (genre === "" || movie.genre === genre) &&
      (decade === "" || movie.decade === decade) &&
      (mood === "" || movie.mood === mood)
    );
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🍿 Movie Night Picker</h1>

      {/* Filter Controls */}
      <FilterControls setGenre={setGenre} setDecade={setDecade} setMood={setMood} />

      {/* Movies */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
          >
            <div className="aspect-[2/3] w-full">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
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
