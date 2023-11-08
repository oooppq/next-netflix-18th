import { InfoIcon, PlayIcon, PlusIcon, TopTenIcon } from '@/public/images';
import Image from 'next/image';

interface HomeTopProps {
  posterPath: string;
  rank: number | null;
  category: string;
}

const HomeTop = ({ posterPath, rank, category }: HomeTopProps) => {
  const url = `https://image.tmdb.org/t/p/original`;

  return (
    <div className="flex flex-col items-center w-full mb-[43px]">
      <div className="w-full h-[415px] overflow-hidden sm:h-[700px] md:h-[1000px] relative ">
        <Image
          src={url + posterPath}
          width={800}
          height={1200}
          alt="top poster"
          className="absolute object-cover w-full"
        />
      </div>
      <div className="text-white flex items-center">
        {rank ? (
          <>
            <TopTenIcon />
            <span className="mx-[5px]">{`#${rank} in`}</span>
          </>
        ) : null}
        {category}
      </div>
      <div className="w-full flex justify-between px-[54px] mt-[11px]">
        <button className="text-white flex flex-col items-center">
          <PlusIcon />
          <span className="text-[14px]">My List</span>
        </button>
        <button className=" bg-[#C4C4C4] w-[110.625px] h-[45px] flex justify-center items-center rounded-[5.63px] text-black">
          <PlayIcon />
          <span className="ml-[15px] text-[20px] font-semibold">Play</span>
        </button>
        <button className="text-white flex flex-col items-center">
          <InfoIcon />
          <span className="text-[14px]">Info</span>
        </button>
      </div>
    </div>
  );
};

export default HomeTop;
