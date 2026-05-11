// src/App.tsx
// This main component connects the voting state, search, filters, and reusable UI components.

import { useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import FilterTabs, { type FilterType } from "./components/FilterTabs";
import StatsPanel from "./components/StatsPanel";
import { useVoting } from "./context/VotingContext";

export default function App() {
  const { movies, upvote, downvote, resetVotes } = useVoting();

  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || movie.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="app">
      <Header />

      <StatsPanel movies={movies} />

      <section className="control-panel">
        <SearchBar searchText={searchText} onSearchChange={setSearchText} />

        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <button className="reset-btn" onClick={resetVotes}>
          Reset Votes
        </button>
      </section>

      <section className="section-heading">
        <div>
          <p className="eyebrow">Global Voting Collection</p>
          <h2>Movies & TV Series Around the World</h2>
        </div>

        <span>{filteredMovies.length} results</span>
      </section>

      <section className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onUpvote={upvote}
            onDownvote={downvote}
          />
        ))}
      </section>
    </main>
  );
}