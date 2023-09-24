export interface Album {
  name: string;
  image: string;
}

export interface Song {
  id: number;
  title: string;
  artists: string[];
  duration: string;
  album: Album;
  isFavorite?: boolean;
}
