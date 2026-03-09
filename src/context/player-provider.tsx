"use client";
import { Track } from "@/types";
import { useState } from "react";
import { PlayerContext } from "./player-context";

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState<Set<number>>(new Set());

  function toggleLike(trackId: number) {
    setLikedTracks((prev) => {
      const next = new Set(prev);
      next.has(trackId)
        ? likedTracks.delete(trackId)
        : likedTracks.add(trackId);
      return next;
    });
  }

  return (
    <PlayerContext.Provider
      value={{
        tracks,
        setTracks,
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        likedTracks,
        toggleLike,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
