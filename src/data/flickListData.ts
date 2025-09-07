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

export const bollywoodFlickListData: Collection[] = [
  {
    id: 1,
    name: "Top Sci-Fi",
    movies: [
      { id: 101, title: "Sholay", posterUrl: "/images/sholay.jpg", rating: 9.5 },
      { id: 102, title: "Dilwale Dulhania Le Jayenge", posterUrl: "/images/ddlj.jpg", rating: 9 },
      { id: 103, title: "Hum Aapke Hain Koun", posterUrl: "/images/haahk.jpg", rating: 8.5 }
    ]
  },
  {
    id: 2,
    name: "80s Classics",
    movies: [
      { id: 201, title: "Dhoom 2", posterUrl: "/images/dhoom2.jpg", rating: 8.2 },
      { id: 202, title: "Don", posterUrl: "/images/don.jpg", rating: 8.5 },
      { id: 203, title: "Bang Bang", posterUrl: "/images/bangbang.jpg", rating: 7.8 }
    ]
  },
  {
    id: 3,
    name: "Fantasy Epics",
    movies: [
      { id: 301, title: "Jab We Met", posterUrl: "/images/jvm.jpg", rating: 9 },
      { id: 302, title: "Veer-Zaara", posterUrl: "/images/veerzaara.jpg", rating: 8.8 },
      { id: 303, title: "Kal Ho Naa Ho", posterUrl: "/images/khnh.jpg", rating: 8.5 }
    ]
  }
];
