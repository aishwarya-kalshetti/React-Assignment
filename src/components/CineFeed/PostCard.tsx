import React, { useState } from "react";
import { FeedPost, Comment } from "../../data/cineFeedData";

interface PostCardProps {
  post: FeedPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState<Comment[]>(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment) return;
    const comment: Comment = {
      id: Date.now(),
      user: "Anonymous",
      text: newComment,
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transition transform hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-3 mb-3">
        <img
          src={post.user.profilePicUrl}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="font-semibold text-lg">{post.user.username}</h3>
      </div>

      <h2 className="text-xl font-bold mb-2">{post.post.movieTitle}</h2>
      <img
        src={post.post.moviePosterUrl}
        alt="poster"
        className="w-full max-h-[400px] object-cover rounded-xl mb-2"
      />
      <p className="text-gray-700 mb-3">{post.post.text}</p>

      <button
        onClick={() => setLikes(likes + 1)}
        className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-md font-semibold hover:scale-105 transform transition"
      >
        ❤️ Like {likes}
      </button>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Comments:</h4>
        {comments.map((c) => (
          <p key={c.id} className="text-sm text-gray-600 mb-1">
            <strong>{c.user}:</strong> {c.text}
          </p>
        ))}

        <div className="flex mt-2 gap-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            className="p-2 border rounded-md flex-1"
          />
          <button
            onClick={handleAddComment}
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:scale-105 transform transition"
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
