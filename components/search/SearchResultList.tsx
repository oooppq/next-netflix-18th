import SearchResultElement from '@/components/search/SearchResultElement';
import { TContent } from '@/types';

interface SearchResultListProps {
  movies: TContent[];
}

const SearchResultList = ({ movies }: SearchResultListProps) => {
  return (
    <div>
      <h2 className="text-white text-[27px] ml-2.5 mt-5 mb-4 font-bold">
        Top Searches
      </h2>
      {movies.map((movie) => (
        <SearchResultElement key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResultList;
