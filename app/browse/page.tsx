import React from 'react';
import ContentsSlider from '@/components/browse/ContentsSlider';
import HomeNavBar from '@/components/browse/HomeNavBar';
import HomeTop from '@/components/browse/HomeTop';
import { TContent } from '@/types';
import { getMovies } from '@/utils/Api';

async function setMovies(type: string) {
  const movies = await getMovies(type);
  return movies;
}

interface BrowseProps {
  searchParams: { [key: string]: string | undefined };
}

const Browse = async ({ searchParams }: BrowseProps) => {
  const Top = await setMovies('top_rated');
  const Popular = await setMovies('popular');
  const Upcoming = await setMovies('upcoming');
  const Nowplaying = await setMovies('now_playing');

  const defaultData = {
    rank: 1,
    category: 'Nigeria Today',
    posterPath: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  };

  return (
    <div className='bg-black w-full h-full relative'>
      <HomeNavBar />
      <HomeTop
        posterPath={searchParams.posterPath || defaultData.posterPath}
        rank={
          searchParams.rank
            ? Number(searchParams.rank)
            : searchParams.posterPath
            ? null
            : defaultData.rank
        }
        category={searchParams.category || defaultData.category}
      />
      <ContentsSlider
        title='Preview'
        isRanking={false}
        isPreview={true}
        contents={Nowplaying}
      />
      <ContentsSlider
        title='Nigeria Today'
        isRanking={true}
        contents={Top}
      />
      <ContentsSlider
        title='Popular'
        isRanking={false}
        contents={Popular}
      />
      <ContentsSlider
        title='Upcomming'
        isRanking={false}
        contents={Upcoming}
      />
    </div>
  );
};

export default Browse;
