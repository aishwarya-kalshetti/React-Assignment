import React from "react";
import { bollywoodMovieNightData } from "../data/movieNightData";
import MovieList from "../components/MovieNightPicker/MovieList";

const MovieNightPage: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🍿 Bollywood Movie Night Picker</h2>
        <p className="text-gray-600">
           Can't decide what to watch? Use Movie Night Picker to filter movies by genre, decade, mood, or rating 
          and quickly find the perfect Bollywood movie for your night.
        </p>
      </div>

      <MovieList movies={bollywoodMovieNightData} />

    </div>
  );
};

export default MovieNightPage;
