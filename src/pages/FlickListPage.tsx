import React from "react";
import Gallery from "../components/FlickList/Gallery";

const FlickListPage: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">📸 FlickList</h2>
        <p className="text-gray-600">
           FlickList is a curated gallery of movie collections. Browse genres, 
          discover classics, and find hidden gems through themed collections.
        </p>
      </div>

     
      <Gallery />
    </div>
  );
};

export default FlickListPage;
