export interface IMovie {
  type: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  adult: number;
  children: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  overview: string;
  release_date: string;
}
