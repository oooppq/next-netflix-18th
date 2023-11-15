import React from 'react';

interface DetailOverviewProps {
  overview: string;
}

const DetailOverview = ({ overview }: DetailOverviewProps) => {
  return (
    <div>
      <p>{overview}</p>
    </div>
  );
};

export default DetailOverview;
