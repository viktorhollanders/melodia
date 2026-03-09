import { Search } from "lucide-react";

export function SearchBar({ search }: { search: (value: string) => void }) {
  return (
    <div className="flex flex-row gap-2 border border-gray-300 rounded-4xl p-4 bg-white">
      <Search className="text-gray-400" size={24} />
      <input
        className="outline-hidden flex-1"
        id="searchBar"
        onChange={(e) => search(e.target.value)}
        placeholder="Search artist"
        type="text"
      />
    </div>
  );
}
