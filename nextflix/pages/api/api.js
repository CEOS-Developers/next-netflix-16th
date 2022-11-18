import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'f85ba1745021cb0f98ac340407ad592b',
  },
});

export async function getLatest() {
  const latest = await api.get('latest?');
  return latest;
}

export async function getNowPlaying() {
  const nowPlaying = await api.get('now_playing?');
  return nowPlaying;
}

export async function getPopular() {
  const popular = await api.get('popular?');
  return popular;
}

export async function getTopRated() {
  const topRated = await api.get('top_rated?');
  return topRated;
}

export async function getUpcoming() {
  const upcoming = await api.get('upcoming?');
  return upcoming;
}
