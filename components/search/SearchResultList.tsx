import SearchResultElement from '@/components/search/SearchResultElement';
import { TContent } from '@/types';
import { memo } from 'react';

interface SearchResultListProps {
  movies: TContent[];
}

const SearchResultList = ({ movies }: SearchResultListProps) => {
  return (
    <div className="pb-12">
      {movies.map((movie, idx) => (
        <SearchResultElement key={`${movie.id}-${idx}`} movie={movie} />
      ))}
    </div>
  );
};

export default memo(SearchResultList);
