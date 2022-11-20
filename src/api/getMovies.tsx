import client from './client';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const getNowPlaying = () => {
  return client.get(`movie/now_playing?api_key=${API_KEY}`).then((res) => res.data);
};

export const getTopRated = () => {
  return client.get(`movie/top_rated?api_key=${API_KEY}`).then((res) => res.data);
};

export const getPopular = () => {
  return client.get(`movie/popular?api_key=${API_KEY}`).then((res) => res.data);
};

export const getUpcoming = () => {
  return client.get(`movie/upcoming?api_key=${API_KEY}`).then((res) => res.data);
};

export const searchMovies = (inputWord: string, page?: number) => {
  return client.get(`search/movie/?api_key=${API_KEY}&query=${inputWord}&page=${page}`);
};
