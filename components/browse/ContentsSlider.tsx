'use client';

import ContentElement from '@/components/browse/ContentElement';
import { TContent } from '@/types';
import { useRef, useState, MouseEvent } from 'react';

interface ContentsSliderProps {
  title: string;
  contents: TContent[];
}

const ContentsSlider = ({ title, contents }: ContentsSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [clickPoint, setClickPoint] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDownEvent = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    if (containerRef.current) {
      setClickPoint(e.pageX);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMoveEvent = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;

    e.preventDefault();

    if (containerRef.current) {
      const walk = e.pageX - clickPoint;

      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="">
      <h3 className="text-[20.921px] font-bold ml-4 text-white">{title}</h3>
      <div
        className="flex mt-2 mb-5 overflow-auto scroll-smooth scroll scroll-hide"
        ref={containerRef}
        onMouseDown={handleMouseDownEvent}
        onMouseLeave={() => setDragging(false)}
        onMouseUp={() => setDragging(false)}
        onMouseMove={handleMouseMoveEvent}
      >
        {contents.map((content, idx) => (
          <ContentElement
            key={`${content.id}${content.title}`}
            content={content}
            sequence={
              idx === 0 ? 'head' : idx === contents.length - 1 ? 'tail' : 'mid'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ContentsSlider;
