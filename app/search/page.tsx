'use client';

import SearchBar from '@/components/search/SearchBar';
import SearchResultList from '@/components/search/SearchResultList';
import { useDebounce } from '@/hooks/useDebounce';
import { TContent } from '@/types';
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const [movies, setMovies] = useState<TContent[]>([]);
  //   const [query, setQuery] = useState<string>('');

  // useEffect(() => {
  //   (async () => {
  //     const url = `https://api.themoviedb.org/3/search/movie?api_key=${
  //       process.env.NEXT_PUBLIC_API_KEY
  //     }&language=en-US&page=${1}&include_adult=false&query=${query}`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setMovies(data.results);
  //   })();
  // }, []);

  const handleOnChangeQuery = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = e.target.value.trim();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&language=en-US&page=${1}&include_adult=false&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <div>
      <SearchBar handleOnChangeQuery={useDebounce(handleOnChangeQuery, 500)} />
      <SearchResultList movies={movies} />
    </div>
  );
};

export default SearchPage;
