import React, { useState } from "react";
import { flickListData, Collection } from "../../data/flickListData";
import CollectionComp from "./Collection";

const Gallery: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 FlickList Collections</h1>

      
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {flickListData.map((collection) => (
          <button
            key={collection.id}
            onClick={() => setSelectedCollection(collection)}
            className={`px-4 py-2 rounded-full text-white font-medium shadow-md transition ${
              selectedCollection?.id === collection.id
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-800"
            }`}
          >
            {collection.name}
          </button>
        ))}
        <button
          onClick={() => setSelectedCollection(null)}
          className="px-4 py-2 rounded-full bg-red-500 text-white font-medium shadow-md hover:bg-red-600"
        >
          Show All
        </button>
      </div>

      
      {selectedCollection ? (
        <CollectionComp collection={selectedCollection} />
      ) : (
        flickListData.map((collection) => (
          <CollectionComp key={collection.id} collection={collection} />
        ))
      )}
    </div>
  );
};

export default Gallery;
