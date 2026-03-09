"use client";
import { Track, Collection } from "@/types";
import { useEffect, useState, use } from "react";
import { getAlbum } from "@/app/acctions/music";

export default function Page({
  params,
}: {
  params: Promise<{ collectionId: string }>;
}) {
  const { collectionId } = use(params);

  const [isLoading, setIsLoading] = useState(false);
  const [collection, setCollection] = useState<Collection>();
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchMusic = async () => {
      setIsLoading(true);

      const response = await getAlbum(collectionId);
      setCollection(
        response.find((item: Collection) => item.wrapperType === "collection"),
      );
      setTracks(response.filter((item: Track) => item.wrapperType === "track"));
      setIsLoading(false);
    };
    fetchMusic();
  }, [collectionId]);

  console.log(collectionId);

  return (
    <div className="mx-4 mt-6 lg:mx-24 lg:w-full">
      {isLoading ? (
        <h1 className="text-center font-bold text-5xl text-blue-600 mt-12">
          Loading songs
        </h1>
      ) : (
        <div className="flex flex-row m-12">
          <div className="flex flex-col gap-x-4 mr-12">
            <img
              className="rounded-xl"
              src={collection?.artworkUrl100}
              alt={collection?.collectionName}
              width={320}
              height={320}
            />
            <h1 className="text-2xl font-bold text-center">
              {collection?.artistName}
            </h1>
            <h1 className="text-2xl text-center">
              {collection?.collectionName}
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Track list</h1>
            <ol>
              {tracks.map((track) => (
                <li key={track.trackId} className="mb-3">
                  {track.trackName}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
