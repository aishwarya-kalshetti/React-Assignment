export interface MovieNight {
  id: number;
  title: string;
  posterUrl: string;
  genre: string;
  decade: string;
  mood: string;
}

export const movieNightData: MovieNight[] = [
  {
    id: 1,
    title: "The Dark Knight",
    posterUrl: "/images/The Dark Knight.jpg",
    genre: "Action",
    decade: "2000s",
    mood: "intense"
  },
  {
    id: 2,
    title: "Mean Girls",
    posterUrl: "/images/Mean Girls.jpg",
    genre: "Comedy",
    decade: "2000s",
    mood: "funny"
  },
 
  {
    id: 3,
    title: "Avengers: Endgame",
    posterUrl: "/images/Avengers-Endgame.jpg",
    genre: "Action",
    decade: "2010s",
    mood: "epic"
  }
];
