"use client";
import { Track } from "@/types";
import { createContext } from "react";

interface PlayerContextType {
  tracks: Track[];
  setTracks: (tracks: Track[]) => void;
  currentTrack: Track | null;
  setCurrentTrack: (track: Track) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  likedTracks: Set<number>;
  toggleLike: (trackId: number) => void;
}

export const PlayerContext = createContext<PlayerContextType | null>(null);
