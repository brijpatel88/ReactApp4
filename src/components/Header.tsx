// src/components/Header.tsx
// This reusable header displays the app title and assignment purpose.

export default function Header() {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">React Assignment 4</p>
        <h1>Movie & TV Series Voting App</h1>
        <p className="header-text">
          Vote for your favorite movies and TV series using reusable components,
          global state, and unit-test-ready logic.
        </p>
      </div>
    </header>
  );
}