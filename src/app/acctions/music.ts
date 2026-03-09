import type { Track } from "@/types/track";

const baseUrl = "https://itunes.apple.com";

export async function getMusic(query: string): Promise<Track[]> {
  const searchUrl = `${baseUrl}/search?term=${query}&entity=song&limit=12`;
  const response = await fetch(searchUrl);

  if (!response.ok) {
    throw new Error(`${query} dose not exist`);
  }

  const data = await response.json();
  return data.results;
}

export async function getAlbum(id: string): Promise<Track> {
  const searchUrl = `${baseUrl}/lookup?id=${id}&entity=song`;
  const response = await fetch(searchUrl);

  if (!response.ok) {
    throw new Error(`Album with ${id} dose not exist`);
  }

  const data = await response.json();
  return data.results;
}
