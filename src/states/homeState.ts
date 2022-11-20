import { IMovies } from './../interfaces/interface';
import { atom } from 'recoil';

export const nowPlyingMoviesState = atom<IMovies[]>({
  key: 'homeState/nowPlyingMovies',
  default: [],
});

export const topRatedMoviesState = atom<IMovies[]>({
  key: 'homeState/topRatedMovies',
  default: [],
});

export const popularMoviesState = atom<IMovies[]>({
  key: 'homeState/popularMovies',
  default: [],
});

export const upComingMoviesState = atom<IMovies[]>({
  key: 'homeState/upComingMovies',
  default: [],
});
