import ContentsSlider from '@/components/browse/ContentsSlider';
import HomeNavBar from '@/components/browse/HomeNavBar';
import { TContent } from '@/types';
import React from 'react';

const CONTENTS: TContent[] = [
  {
    id: 1,
    title: 'some',
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  },
  {
    id: 2,
    title: 'some',
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  },
  {
    id: 3,
    title: 'some',
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  },
  {
    id: 4,
    title: 'some',
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  },
  {
    id: 5,
    title: 'some',
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  },
  {
    id: 6,
    title: 'some',
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  },
];

const Browse = () => {
  return (
    <div className="bg-black">
      <HomeNavBar />
      <ContentsSlider title="Top 10 in Nigeria Today" contents={CONTENTS} />
    </div>
  );
};

export default Browse;
