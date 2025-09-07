
import React from "react";
import Feed from "../components/CineFeed/Feed";

const CineFeedPage: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">📸 CineFeed</h2>
        <p className="text-gray-600">
          CineFeed is a social-style feed where users can share thoughts about movies, 
          post reviews, and interact with others through likes and comments.
        </p>
      </div>

      
      <Feed />
    </div>
  );
};

export default CineFeedPage;
