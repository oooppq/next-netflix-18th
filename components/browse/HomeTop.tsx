import { InfoIcon, PlayIcon, PlusIcon } from '@/public/images';
import Image, { ImageProps } from 'next/image';

interface HomeTopProps extends ImageProps {
  posterPath: string;
  rank: number;
  category: string;
}

const HomeTop = ({
  posterPath,
  rank,
  category,
  ...imageProps
}: HomeTopProps) => {
  const url = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className="">
      <Image
        {...imageProps}
        src={url + posterPath}
        fill
        alt="top poster"
        className="w-full"
      />
      <div className="">{`#${rank} in ${category}`}</div>
      <div className="">
        <button className="">
          <PlusIcon />
          <span className="">My List</span>
        </button>
        <button className="">
          <PlayIcon />
          <span className="">Play</span>
        </button>
        <button className="">
          <InfoIcon />
          <span className="">Info</span>
        </button>
      </div>
    </div>
  );
};

export default HomeTop;
