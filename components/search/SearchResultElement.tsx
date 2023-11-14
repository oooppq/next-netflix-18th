import { CirclePlayIcon } from '@/public/images';
import { TContent } from '@/types';
import Image from 'next/image';

interface SearchResultElementProps {
  movie: TContent;
}

const SearchResultElement = ({ movie }: SearchResultElementProps) => {
  const url = 'https://image.tmdb.org/t/p/original';

  return (
    <div className="flex items-center mb-[3px] bg-[#424242] h-[76px] overflow-hidden pr-3 relative">
      <Image
        src={url + movie.poster_path}
        alt="poster"
        fill
        className="!w-2/5 object-cover"
      />
      <h3 className=" pl-[45%] text-white flex-1">{movie.title}</h3>
      <CirclePlayIcon />
    </div>
  );
};

export default SearchResultElement;
