import { TContent } from '@/types';

interface SearchResultElementProps {
  movie: TContent;
}

const SearchResultElement = ({ movie }: SearchResultElementProps) => {
  return <div>{movie.title}</div>;
};

export default SearchResultElement;
