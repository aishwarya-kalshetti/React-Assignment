export interface MovieNight {
  id: number;
  title: string;
  posterUrl: string;
  genre: string;
  decade: string;
  mood: string;
  rating: number;
}

export const bollywoodMovieNightData: MovieNight[] = [
  {
    id: 1,
    title: "3 Idiots",
    posterUrl: "/images/3idiots.jpg",
    genre: "Comedy",
    decade: "2000s",
    mood: "funny",
    rating: 9.2
  },
  {
    id: 2,
    title: "Kabhi Khushi Kabhie Gham",
    posterUrl: "/images/kkkg.jpg",
    genre: "Drama",
    decade: "2000s",
    mood: "emotional",
    rating: 8.5
  },
  {
    id: 3,
    title: "Raazi",
    posterUrl: "/images/raazi.jpg",
    genre: "Thriller",
    decade: "2010s",
    mood: "intense",
    rating: 8.7
  },
  {
    id: 4,
    title: "Dil Chahta Hai",
    posterUrl: "/images/dilchahtahai.jpg",
    genre: "Comedy",
    decade: "2000s",
    mood: "funny",
    rating: 8.8
  },
  {
    id: 5,
    title: "Padmaavat",
    posterUrl: "/images/padmaavat.jpg",
    genre: "Action",
    decade: "2010s",
    mood: "epic",
    rating: 8
  }
];
