// src/components/StatsPanel.tsx
// This reusable component displays app statistics such as total votes and winner.

import type { MovieItem } from "../context/VotingContext";

type StatsPanelProps = {
  movies: MovieItem[];
};

export default function StatsPanel({ movies }: StatsPanelProps) {
  const totalVotes = movies.reduce((total, movie) => total + movie.votes, 0);

  const topMovie = movies.reduce((highest, movie) =>
    movie.votes > highest.votes ? movie : highest
  );

  const movieCount = movies.filter((movie) => movie.category === "Movie").length;
  const seriesCount = movies.filter(
    (movie) => movie.category === "TV Series"
  ).length;

  return (
    <section className="stats-grid">
      <div className="stats-card">
        <span>Total Titles</span>
        <strong>{movies.length}</strong>
      </div>

      <div className="stats-card">
        <span>Movies</span>
        <strong>{movieCount}</strong>
      </div>

      <div className="stats-card">
        <span>TV Series</span>
        <strong>{seriesCount}</strong>
      </div>

      <div className="stats-card winner-card">
        <span>Current Winner</span>
        <strong>{topMovie.title}</strong>
        <small>{totalVotes} total votes</small>
      </div>
    </section>
  );
}