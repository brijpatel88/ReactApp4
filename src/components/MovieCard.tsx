// src/components/MovieCard.tsx
// This reusable card displays one movie or TV series with poster, details, and vote buttons.

import type { MovieItem } from "../context/VotingContext";
import VoteButton from "./VoteButton";

type MovieCardProps = {
  movie: MovieItem;
  onUpvote: (id: number) => void;
  onDownvote: (id: number) => void;
};

export default function MovieCard({
  movie,
  onUpvote,
  onDownvote,
}: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img src={movie.poster} alt={`${movie.title} poster`} />

        <span className="category-pill">{movie.category}</span>
      </div>

      <div className="movie-info">
        <div className="movie-meta">
          <span>{movie.genre}</span>
          <span>{movie.country}</span>
          <span>{movie.year}</span>
        </div>

        <h2>{movie.title}</h2>
        <p>{movie.description}</p>

        <div className="vote-row">
          <strong>{movie.votes} votes</strong>

          <div className="vote-actions">
            <VoteButton
              label="👍 Vote"
              variant="up"
              onClick={() => onUpvote(movie.id)}
            />

            <VoteButton
              label="− Remove"
              variant="down"
              onClick={() => onDownvote(movie.id)}
            />
          </div>
        </div>
      </div>
    </article>
  );
}