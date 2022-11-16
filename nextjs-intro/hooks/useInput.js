import { useState } from 'react';

export default function useInput() {
  const [search, setSearchValue] = useState('');
  const [searches, setSearchResults] = useState('');
  const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    tryOut(e);
  };

  const resetChat = () => {
    setSearchValue('');
    setSearchResults('');
  };

  const tryOut = async (e) => {
    e.preventDefault();
    const movies = await (
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${NEXT_PUBLIC_API_KEY}&language=en-US&query=${e.target.value}&include_adult=false`
      )
    ).json();
    console.log(movies);
    setSearchResults(movies);
  };

  return { search, handleChange, resetChat, searches, tryOut };
}
