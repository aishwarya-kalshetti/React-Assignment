import React, { useState } from "react";
import { bollywoodFlickListData, Collection, Movie } from "../../data/flickListData";
import CollectionComp from "./Collection";

const Gallery: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [minRating, setMinRating] = useState("");

  
  const filteredCollections: Collection[] = bollywoodFlickListData.map((collection: Collection) => ({
    ...collection,
    movies: collection.movies.filter((movie: Movie) => minRating === "" || movie.rating >= Number(minRating))
  }));

  const collectionsToShow = selectedCollection
    ? filteredCollections.filter(c => c.id === selectedCollection.id)
    : filteredCollections;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Bollywood FlickList</h1>

      
      <div className="flex flex-wrap justify-between items-center bg-white shadow-md rounded-xl p-4 mb-8 gap-4">
      
        <div className="flex flex-col flex-1 min-w-[150px]">
          <label className="text-gray-600 font-medium mb-1">Select Collection</label>
          <select
            value={selectedCollection?.id || ""}
            onChange={(e) => {
              const selected = bollywoodFlickListData.find((c: Collection) => c.id === Number(e.target.value));
              setSelectedCollection(selected || null);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none hover:border-gray-500 transition"
          >
            <option value="">All Collections</option>
            {bollywoodFlickListData.map((c: Collection) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

       
        <div className="flex flex-col flex-1 min-w-[120px]">
          <label className="text-gray-600 font-medium mb-1">Minimum Rating</label>
          <select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none hover:border-gray-500 transition"
          >
            <option value="">All Ratings</option>
            <option value="7">⭐ 7+</option>
            <option value="8">⭐ 8+</option>
            <option value="9">⭐ 9+</option>
          </select>
        </div>

    
        <button
          onClick={() => {
            setSelectedCollection(null);
            setMinRating("");
          }}
          className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>

      
      {collectionsToShow.map((collection: Collection) => (
        <CollectionComp key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default Gallery;
