"use client";
import { useEffect, useState } from "react";
import { getMusic } from "@/app/acctions/music";
import { useDebounce } from "@/hooks/useDebounced";
import { SearchBar } from "../components/search-bar";
import type { Track } from "../types";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debounceSearch = useDebounce(searchValue);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    if (!debounceSearch) return;
    const fetchMusic = async () => {
      setIsLoading(true);

      const response = await getMusic(debounceSearch);
      setTracks(response);

      setIsLoading(false);
    };
    fetchMusic();
  }, [debounceSearch]);

  console.log(typeof tracks, tracks);
  return (
    <div className="mx-4 mt-6 lg:mx-28 w-full">
      <SearchBar onChange={setSearchValue} />

      {isLoading ? (
        <h1>Loading songs</h1>
      ) : tracks.length === 0 ? (
        <h1>Look up your favorite artist</h1>
      ) : (
        <section>{tracks.map((t) => t.trackName)}</section>
      )}
    </div>
  );
}
