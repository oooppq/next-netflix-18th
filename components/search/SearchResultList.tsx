import SearchResultElement from '@/components/search/SearchResultElement';
import { TContent } from '@/types';

interface SearchResultListProps {
  movies: TContent[];
}

const SearchResultList = ({ movies }: SearchResultListProps) => {
  return (
    <div className="pb-12">
      {movies.map((movie) => (
        <SearchResultElement key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResultList;
