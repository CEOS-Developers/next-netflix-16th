const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const POST_PATH = 'https://image.tmdb.org/t/p/w500';

export const API = {
  Preview: `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  Popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  TopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  NowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  Search: `${BASE_URL}/search/movie?api_key=${API_KEY}`,
};

export const URL = {
  PostPath: `${POST_PATH}`,
};
