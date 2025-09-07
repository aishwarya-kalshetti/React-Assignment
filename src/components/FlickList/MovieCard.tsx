import React from "react";
import { Movie } from "../../data/flickListData";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl group">
     
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-[300px] object-cover rounded-t-2xl"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4 rounded-2xl">
        <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
        <p className="text-sm mb-2">⭐ {movie.rating}/10</p>
      </div>

     
      <div className="p-4 bg-white rounded-b-2xl">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-600">⭐ {movie.rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;
