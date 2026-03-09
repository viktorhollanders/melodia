import { Track } from "@/types";
import { Play, Heart } from "lucide-react";
import { usePlayerContext } from "@/context/hooks/use-player-context";
import Link from "next/link";

export function TrackCard(props: Track) {
  const { setCurrentTrack } = usePlayerContext();

  return (
    <div className="flex flex-col gap-4 items-center bg-white p-6 rounded-2xl border border-gray-300">
      <div className="relative">
        <div className="absolute h-full w-full flex flex-col items-center gap-12 pointer-events-none">
          <Heart
            className="text-blue-600 self-end mr-2 mt-2 hover:fill-blue-200 pointer-events-auto"
            size={24}
          />
          <button
            onClick={() => setCurrentTrack(props)}
            className="border-2 border-blue-600 rounded-4xl  hover:bg-blue-200 h-12 w-12 flex items-center justify-center pointer-events-auto"
          >
            <Play className="text-blue-600 fill-blue-600" size={24} />
          </button>
        </div>
        <Link href={`album/${props.collectionId}`}>
          <img
            className="rounded-xl"
            src={props.artworkUrl100}
            alt={props.trackName}
            width={240}
            height={240}
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-center text-xl font-bold">{props.trackName}</h1>
        <h2 className="text-center ">{props.artistName}</h2>
        <h2 className="text-center font-semibold">{props.collectionName}</h2>
      </div>
    </div>
  );
}
