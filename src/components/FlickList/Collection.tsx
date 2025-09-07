import React from "react";
import { Collection } from "../../data/flickListData";
import MovieCard from "./MovieCard";

interface CollectionProps {
  collection: Collection;
}

const CollectionComp: React.FC<CollectionProps> = ({ collection }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{collection.name}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default CollectionComp;
