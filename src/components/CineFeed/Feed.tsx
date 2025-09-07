import React, { useState } from "react";
import { cineFeedData, FeedPost } from "../../data/cineFeedData";
import PostCard from "./PostCard";
import NewPostForm from "./NewPostForm";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<FeedPost[]>(cineFeedData);

  const addPost = (newPost: FeedPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <NewPostForm addPost={addPost} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
