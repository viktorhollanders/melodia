"use client";
import { useContext } from "react";
import { PlayerContext } from "@/context/player-context";

export function usePlayerContext() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("No context provided");
  }

  return context;
}
