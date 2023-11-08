import ContentsSlider from '@/components/browse/ContentsSlider';
import HomeNavBar from '@/components/browse/HomeNavBar';
import HomeTop from '@/components/browse/HomeTop';
import { TContent } from '@/types';
import React from 'react';

interface BrowseProps {
  searchParams: { [key: string]: string | undefined };
}

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

const Browse = ({ searchParams }: BrowseProps) => {
  const defualtData = {
    rank: 1,
    category: 'Nigeria Today',
    posterPath: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  };
  return (
    <div className="bg-black w-full h-full relative">
      <HomeNavBar />
      <HomeTop
        posterPath={searchParams.posterPath || defualtData.posterPath}
        rank={
          searchParams.rank
            ? Number(searchParams.rank)
            : searchParams.posterPath
            ? null
            : defualtData.rank
        }
        category={searchParams.category || defualtData.category}
      />
      <ContentsSlider
        title="Nigeria Today"
        isRanking={true}
        contents={CONTENTS}
      />
    </div>
  );
};

export default Browse;
