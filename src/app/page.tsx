"use client";
import { useEffect, useState } from "react";
import { getMusic } from "@/app/acctions/music";
import { useDebounce } from "@/hooks/useDebounced";
import { SearchBar } from "@/components/search-bar";
import { TrackCard } from "@/components/track-card";
import { usePlayerContext } from "@/context/hooks/use-player-context";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debounceSearch = useDebounce(searchValue);

  const { setTracks, tracks } = usePlayerContext();

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

  return (
    <div className="mx-4 mt-6 lg:mx-24 lg:w-full overflow-hidden">
      <SearchBar search={setSearchValue} />

      {isLoading ? (
        <h1 className="text-center font-bold text-5xl text-blue-600 mt-12">
          Loading songs
        </h1>
      ) : tracks.length === 0 ? (
        <h1 className="text-center font-bold text-5xl text-blue-600 mt-12">
          This is your song...
        </h1>
      ) : (
        <section className="grid sm:grid-cols-2 xl:grid-cols-4 my-4 gap-8">
          {tracks.map((t) => (
            <TrackCard key={t.trackId} {...t} />
          ))}
        </section>
      )}
    </div>
  );
}
