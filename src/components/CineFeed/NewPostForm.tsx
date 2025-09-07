import React, { useState } from "react";
import { FeedPost } from "../../data/cineFeedData";

interface NewPostFormProps {
  addPost: (post: FeedPost) => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ addPost }) => {
  const [username, setUsername] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [moviePosterUrl, setMoviePosterUrl] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: FeedPost = {
      id: Date.now(),
      user: {
        id: Date.now(),
        username,
        profilePicUrl,
      },
      post: {
        text,
        movieTitle,
        moviePosterUrl,
      },
      likes: 0,
      comments: [],
    };
    addPost(newPost);
    setUsername("");
    setProfilePicUrl("");
    setMovieTitle("");
    setMoviePosterUrl("");
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-4 rounded-xl shadow-md mb-6 flex flex-col gap-3"
    >
      <h2 className="text-xl font-bold">Add New Movie Post 🎬</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Profile Pic URL"
        value={profilePicUrl}
        onChange={(e) => setProfilePicUrl(e.target.value)}
        className="p-2 border rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Movie Title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        className="p-2 border rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Movie Poster URL"
        value={moviePosterUrl}
        onChange={(e) => setMoviePosterUrl(e.target.value)}
        className="p-2 border rounded-md"
        required
      />
      <textarea
        placeholder="Your Post"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border rounded-md"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-yellow-400 to-red-500 text-white py-2 rounded-md font-semibold hover:scale-105 transform transition"
      >
        Post
      </button>
    </form>
  );
};

export default NewPostForm;
