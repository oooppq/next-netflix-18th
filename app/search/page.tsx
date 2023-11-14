'use client';

import SearchBar from '@/components/search/SearchBar';
import SearchResultList from '@/components/search/SearchResultList';
import { useDebounce } from '@/hooks/useDebounce';
import { TContent } from '@/types';
import { getMovies } from '@/utils/Api';
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const [movies, setMovies] = useState<TContent[]>([]);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    if (!keyword) {
      (async () => {
        // next의 fetch는 같은 요청에 대해 caching을 진행하므로,
        // 첫 요청 이후에는 caching된 데이터를 가져올 것(?)
        const defaultMovies = await getMovies('popular');
        setMovies(defaultMovies);
      })();
    }
  }, [keyword]);

  const handleOnChangeQuery = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = e.target.value.trim();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&language=en-US&page=${1}&include_adult=false&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    if (query) setMovies(data.results);
    setKeyword(query);
  };

  return (
    <div>
      <SearchBar handleOnChangeQuery={useDebounce(handleOnChangeQuery, 500)} />
      <h2 className="text-white text-[27px] ml-2.5 mt-5 mb-4 font-bold">
        {keyword.length === 0 ? 'Polular' : 'Top Searches'}
      </h2>
      {movies.length ? (
        <SearchResultList movies={movies} />
      ) : (
        <div className="text-white text-center mt-20 px-3 break-words">{`There are no movies that matched "${keyword}".
        `}</div>
      )}
    </div>
  );
};

export default SearchPage;
