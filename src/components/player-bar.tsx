"use client";
import { Pause, Play } from "lucide-react";
import { usePlayerContext } from "@/context/hooks/use-player-context";
import { useEffect, useRef } from "react";

export function PlayerBar() {
  const { isPlaying, currentTrack, setIsPlaying } = usePlayerContext();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [currentTrack, isPlaying]);

  return (
    <div className="bg-white border border-gray-300 drop-shadow-2xl py-3 px-6 xl:py-4 xl:px-10 rounded-4xl z-50 fixed bottom-4 left-6 right-6 md:right-auto md:max-w-2xl md:left-1/2 md:-translate-x-1/2">
      {currentTrack === null ? (
        <div className="flex flex-row items-center justify-center">
          <Play className="text-gray-400 fill-gray-400" size={18} />
        </div>
      ) : (
        <div className="flex flex-row items-center justify-around mx-4 gap-x-4 md:gap-x-8">
          <img
            src={currentTrack?.artworkUrl100}
            alt={currentTrack?.trackName}
            height={48}
            width={48}
            className="rounded-md border border-gray-300"
          />
          <div className="flex flex-col items-start">
            <h1 className="font-semibold">{currentTrack?.trackName}</h1>
            <h1 className="">{currentTrack?.artistName}</h1>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="border-2 border-blue-600 rounded-4xl  hover:bg-blue-200 h-6 w-6 xl:h-9 xl:w-9 flex items-center justify-center"
          >
            {isPlaying ? (
              <Pause className="text-blue-600 fill-blue-600" size={18} />
            ) : (
              <Play className="text-blue-600 fill-blue-600" size={18} />
            )}
          </button>
        </div>
      )}
      <audio ref={audioRef} src={currentTrack?.previewUrl} hidden />
    </div>
  );
}
