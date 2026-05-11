// src/components/SearchBar.tsx
// This reusable component allows users to search movies and TV series by title.

type SearchBarProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

export default function SearchBar({
  searchText,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="search-box">
      <span>🔎</span>
      <input
        type="text"
        placeholder="Search movies or TV series..."
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}