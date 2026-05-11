// src/context/VotingContext.tsx
// This file manages global voting state using React Context and useReducer.

import { createContext, useContext, useReducer } from "react";
import { movieData } from "../data/movieData";

export type MovieItem = {
  id: number;
  title: string;
  category: "Movie" | "TV Series";
  genre: string;
  country: string;
  year: number;
  poster: string;
  description: string;
  votes: number;
};

type VotingState = {
  movies: MovieItem[];
};

type VotingAction =
  | { type: "UPVOTE"; payload: number }
  | { type: "DOWNVOTE"; payload: number }
  | { type: "RESET" };

function getInitialState(): VotingState {
  return {
    movies: movieData.map((movie) => ({ ...movie })),
  };
}

function votingReducer(state: VotingState, action: VotingAction): VotingState {
  switch (action.type) {
    case "UPVOTE":
      return {
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, votes: movie.votes + 1 }
            : movie
        ),
      };

    case "DOWNVOTE":
      return {
        movies: state.movies.map((movie) =>
          movie.id === action.payload && movie.votes > 0
            ? { ...movie, votes: movie.votes - 1 }
            : movie
        ),
      };

    case "RESET":
      return getInitialState();

    default:
      return state;
  }
}

const VotingContext = createContext<{
  movies: MovieItem[];
  upvote: (id: number) => void;
  downvote: (id: number) => void;
  resetVotes: () => void;
} | null>(null);

export function VotingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(votingReducer, undefined, getInitialState);

  function upvote(id: number) {
    dispatch({ type: "UPVOTE", payload: id });
  }

  function downvote(id: number) {
    dispatch({ type: "DOWNVOTE", payload: id });
  }

  function resetVotes() {
    dispatch({ type: "RESET" });
  }

  return (
    <VotingContext.Provider
      value={{ movies: state.movies, upvote, downvote, resetVotes }}
    >
      {children}
    </VotingContext.Provider>
  );
}

export function useVoting() {
  const context = useContext(VotingContext);

  if (!context) {
    throw new Error("useVoting must be used inside VotingProvider");
  }

  return context;
}