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
    <div className="flex flex-col items-center w-full mb-[43px]">
      <div className="w-full h-[415px] overflow-hidden sm:h-[700px] md:h-[1000px] relative ">
        <Image
          src={url}
          width={800}
          height={1200}
          alt="top poster"
          className="absolute object-cover w-full"
        />
      </div>

      <div className="w-full flex justify-center px-[54px] mt-[11px]">
        <button className="bg-[#C4C4C4] w-[303px] h-[45px] flex justify-center items-center rounded-[5.63px] text-black">
          <PlayIcon />
          <span className="ml-[15px] text-[20px] font-semibold">Play</span>
        </button>
      </div>
    </div>
  );
};

export default DetailTop;
