import React from "react";
import { movieNightData } from "../data/movieNightData";
import MovieList from "../components/MovieNightPicker/MovieList";

const MovieNightPage: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🍿 Movie Night Picker</h2>
        <p className="text-gray-600">
           Can't decide what to watch? Use Movie Night Picker to filter movies by genre or mood 
          and quickly find the perfect choice for your night in.
        </p>
      </div>

     
      <MovieList movies={movieNightData} />;

    </div>
  );
};
  

export default MovieNightPage;
