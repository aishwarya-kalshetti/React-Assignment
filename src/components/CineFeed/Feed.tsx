import React from "react";
import { cineFeedData } from "../../data/cineFeedData";
import PostCard from "./PostCard";

const Feed: React.FC = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      {cineFeedData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
