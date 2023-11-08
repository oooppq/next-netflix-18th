'use client';

import ContentElement from '@/components/browse/ContentElement';
import { LeftIcon, RightIcon } from '@/public/images';
import { TContent } from '@/types';
import { useState } from 'react';

interface ContentsSliderProps {
  title: string;
  contents: TContent[];
}

const ContentsSlider = ({ title, contents }: ContentsSliderProps) => {
  const [isMouseOnSlider, setIsMouseOnSlider] = useState<Boolean>(false);

  return (
    <div className="">
      <h3 className="text-[20.921px] font-bold ml-4 text-white">{title}</h3>
      <div
        className="relative"
        onMouseOver={() => setIsMouseOnSlider(true)}
        onMouseLeave={() => setIsMouseOnSlider(false)}
      >
        {isMouseOnSlider ? (
          <>
            <button className="absolute left-0 h-full">
              <LeftIcon />
            </button>
            <button className="absolute right-0 h-full">
              <RightIcon />
            </button>
          </>
        ) : null}
        <div className="flex mt-2 mb-5 overflow-auto scroll-smooth scroll scroll-hide">
          {contents.map((content, idx) => (
            <ContentElement
              key={`${content.id}${content.title}`}
              content={content}
              sequence={
                idx === 0
                  ? 'head'
                  : idx === contents.length - 1
                  ? 'tail'
                  : 'mid'
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentsSlider;
