import React, { useState } from "react";
import { FeedPost } from "../../data/cineFeedData";

interface PostCardProps {
  post: FeedPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <div className="flex items-center space-x-3">
        <img src={post.user.profilePicUrl} alt="profile" className="w-10 h-10 rounded-full" />
        <h3 className="font-semibold">{post.user.username}</h3>
      </div>
      <h2 className="mt-3 text-xl font-bold">{post.post.movieTitle}</h2>
      <img src={post.post.moviePosterUrl} alt="poster" className="w-full max-w-xs mt-2 rounded-md" />
      <p className="mt-2 text-gray-700">{post.post.text}</p>
      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded"
      >
        ❤️ Like {likes}
      </button>
      <div className="mt-3">
        <h4 className="font-semibold">Comments:</h4>
        {post.comments.map((c) => (
          <p key={c.id} className="text-sm text-gray-600">
            <strong>{c.user}:</strong> {c.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
