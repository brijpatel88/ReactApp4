// src/components/FilterTabs.tsx
// This reusable component filters the list by all, movies, or TV series.

export type FilterType = "All" | "Movie" | "TV Series";

type FilterTabsProps = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

const filters: FilterType[] = ["All", "Movie", "TV Series"];

export default function FilterTabs({
  activeFilter,
  onFilterChange,
}: FilterTabsProps) {
  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter}
          className={activeFilter === filter ? "filter-btn active" : "filter-btn"}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}