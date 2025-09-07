export interface Comment {
  id: number;
  user: string;
  text: string;
}

export interface User {
  id: number;
  username: string;
  profilePicUrl: string;
}

export interface Post {
  text: string;
  movieTitle: string;
  moviePosterUrl: string;
}

export interface FeedPost {
  id: number;
  user: User;
  post: Post;
  likes: number;
  comments: Comment[];
}

export const cineFeedData: FeedPost[] = [
  {
    id: 1,
    user: {
      id: 101,
      username: "FilmFanatic",
      profilePicUrl: "/images/FilmFanatic.jpg"
    },
    post: {
      text: "Just watched 'Dune' again! The visuals are stunning!",
      movieTitle: "Dune",
      moviePosterUrl: "/images/Dune2.jpg"
    },
    likes: 25,
    comments: [
      { id: 1001, user: "SciFiGeek", text: "The soundtrack is next level." },
      { id: 1002, user: "SpaceNerd", text: "Did you notice the hidden details?" }
    ]
  },
  {
    id: 2,
    user: {
      id: 102,
      username: "ReelReviewer",
      profilePicUrl: "/images/ReelReviwer.jpg"
    },
    post: {
      text: "Finally saw 'Parasite'! Absolute masterpiece.",
      movieTitle: "Parasite",
      moviePosterUrl: "/images/Parasite.jpg"
    },
    likes: 40,
    comments: [{ id: 1003, user: "CinemaLover", text: "Bong Joon-ho is a genius." }]
  }
];
