import React from 'react';
import Image from 'next/image';
import { PlayIcon } from '@/public/images';

interface DetailTopProps {
  title: string;
  posterPath: string;
}

const DetailTop = ({ title, posterPath }: DetailTopProps) => {
  const url = `https://image.tmdb.org/t/p/original/${posterPath}`;
  return (
    <div>
      <Image src={url} alt={title} width={100} height={100} />
      <button
        className="bg-[#C4C4C4] w-[110.625px] h-[45px] flex justify-center items-center rounded-[5.63px] text-black"
      >
        <PlayIcon />
        <span className="ml-[15px] text-[20px] font-semibold">Play</span>
      </button>
    </div>
  );
};

export default DetailTop;
