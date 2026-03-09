"use client";

import { Search } from "lucide-react";

export function SearchBar({ onChange }: { onChange: (value: string) => void }) {
  return (
    <div className="flex flex-row gap-2 border border-gray-300 rounded-4xl p-4 bg-white drop-shadow-2xl">
      <Search className="text-gray-400" size={24} />
      <input
        className="outline-hidden flex-1"
        id="searchBar"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Looking for an album"
        type="text"
      />
    </div>
  );
}
