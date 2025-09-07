import React from "react";
import { Movie } from "../../data/flickListData";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      <div className="aspect-[2/3] w-full">
  <img
    src={movie.posterUrl}
    alt={movie.title}
    className="w-full h-full object-cover rounded-t-xl"
  />
</div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
        <p className="text-sm text-gray-600">⭐ {movie.rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;
