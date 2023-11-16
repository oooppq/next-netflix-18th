import React from 'react';
import DetailTop from '@/components/detail/DetailTop';
import DetailOverview from '@/components/detail/DetailOverview';
import { getMovieDetails } from '@/utils/Api';

const Page = async ({
  params,
}: {
  params: { id: string; poster_path: string; overview: string };
}) => {
  const movie = await getMovieDetails(params.id);

  return (
    <div className='min-h-screen bg-black'>
      <DetailTop title={movie.title} posterPath={movie.poster_path} />
      <DetailOverview title={movie.title} overview={movie.overview} />
    </div>
  );
};

export default Page;
