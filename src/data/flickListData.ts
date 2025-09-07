export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
}

export interface Collection {
  id: number;
  name: string;
  movies: Movie[];
}

export const flickListData: Collection[] = [
  {
    id: 1,
    name: "Top Sci-Fi",
    movies: [
      { id: 101, title: "Inception", posterUrl: "/images/inception.jpg", rating: 9 },
      { id: 102, title: "Interstellar", posterUrl: "/images/interstellar.jpg", rating: 8.5 },
      { id: 103, title: "The Matrix", posterUrl: "/images/The Matrix.jpg", rating: 9.3 }
    ]
  },
  {
    id: 2,
    name: "80s Classics",
    movies: [
      { id: 201, title: "Back to the Future", posterUrl: "/images/Back to the Future.jpg", rating: 9.2 },
      { id: 202, title: "The Breakfast Club", posterUrl: "/images/The Breakfast Club.jpg", rating: 8.0 },
      { id: 203, title: "Ghostbusters", posterUrl: "/images/Ghostbusters.jpg", rating: 8.1 }
    ]
  },
  {
    id: 3,
    name: "Fantasy Epics",
    movies: [
      { id: 301, title: "The Lord of the Rings", posterUrl: "/images/The Lord of the Rings.jpg", rating: 9.5 },
      { id: 302, title: "Harry Potter", posterUrl: "/images/Harry Potter.jpg", rating: 8.3 },
      { id: 303, title: "The Hobbit", posterUrl: "/images/The Hobbit.jpg", rating: 7.9 }
    ]
  }
];
