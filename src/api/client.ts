import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';

const client = axios.create({
  baseURL,
  // withCredentials: true,
});

export default client;
