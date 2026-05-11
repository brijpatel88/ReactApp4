// src/data/movieData.ts
// This file stores the starting movie and TV series data for the voting app.

import type { MovieItem } from "../context/VotingContext";

export const movieData: MovieItem[] = [
  {
    id: 1,
    title: "Interstellar",
    category: "Movie",
    genre: "Sci-Fi",
    country: "USA",
    year: 2014,
    poster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A space mission explores time, love, and survival.",
    votes: 42,
  },
  {
    id: 2,
    title: "The Dark Knight",
    category: "Movie",
    genre: "Action",
    country: "USA",
    year: 2008,
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker in Gotham’s darkest challenge.",
    votes: 51,
  },
  {
    id: 3,
    title: "Inception",
    category: "Movie",
    genre: "Sci-Fi",
    country: "USA",
    year: 2010,
    poster:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "A thief enters dreams to plant one impossible idea.",
    votes: 48,
  },
  {
    id: 4,
    title: "Avatar",
    category: "Movie",
    genre: "Adventure",
    country: "USA",
    year: 2009,
    poster:
      "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    description: "A human soldier discovers Pandora and its people.",
    votes: 37,
  },
  {
    id: 5,
    title: "Parasite",
    category: "Movie",
    genre: "Thriller",
    country: "South Korea",
    year: 2019,
    poster:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "Two families become connected through class and secrets.",
    votes: 44,
  },
  {
    id: 6,
    title: "Dangal",
    category: "Movie",
    genre: "Drama",
    country: "India",
    year: 2016,
    poster:
      "https://image.tmdb.org/t/p/w500/p2lVAcPuRPSO8Al6hDDGw0OgMi8.jpg",
    description: "A father trains his daughters to become wrestling champions.",
    votes: 39,
  },
  {
    id: 7,
    title: "3 Idiots",
    category: "Movie",
    genre: "Comedy",
    country: "India",
    year: 2009,
    poster:
      "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    description: "Three friends question education, success, and life choices.",
    votes: 46,
  },
  {
    id: 8,
    title: "Spirited Away",
    category: "Movie",
    genre: "Animation",
    country: "Japan",
    year: 2001,
    poster:
      "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    description: "A young girl enters a magical world of spirits.",
    votes: 41,
  },
  {
    id: 9,
    title: "Breaking Bad",
    category: "TV Series",
    genre: "Crime",
    country: "USA",
    year: 2008,
    poster:
      "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    description: "A chemistry teacher turns into a powerful drug kingpin.",
    votes: 60,
  },
  {
    id: 10,
    title: "Stranger Things",
    category: "TV Series",
    genre: "Sci-Fi",
    country: "USA",
    year: 2016,
    poster:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    description: "Friends face monsters, secrets, and the Upside Down.",
    votes: 52,
  },
  {
    id: 11,
    title: "Game of Thrones",
    category: "TV Series",
    genre: "Fantasy",
    country: "USA",
    year: 2011,
    poster:
      "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    description: "Noble families fight for power across Westeros.",
    votes: 57,
  },
  {
    id: 12,
    title: "Money Heist",
    category: "TV Series",
    genre: "Crime",
    country: "Spain",
    year: 2017,
    poster:
      "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    description: "A group of robbers follow a professor’s master plan.",
    votes: 49,
  },
  {
    id: 13,
    title: "Squid Game",
    category: "TV Series",
    genre: "Thriller",
    country: "South Korea",
    year: 2021,
    poster:
      "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    description: "Contestants play deadly games for life-changing money.",
    votes: 55,
  },
  {
    id: 14,
    title: "Dark",
    category: "TV Series",
    genre: "Sci-Fi",
    country: "Germany",
    year: 2017,
    poster:
      "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    description: "A German town uncovers time travel and family mysteries.",
    votes: 43,
  },
  {
    id: 15,
    title: "Attack on Titan",
    category: "TV Series",
    genre: "Anime",
    country: "Japan",
    year: 2013,
    poster:
      "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    description: "Humanity fights giant Titans behind massive walls.",
    votes: 58,
  },
  {
    id: 16,
    title: "The Mandalorian",
    category: "TV Series",
    genre: "Adventure",
    country: "USA",
    year: 2019,
    poster:
      "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
    description: "A lone bounty hunter protects a mysterious child.",
    votes: 45,
  },
];