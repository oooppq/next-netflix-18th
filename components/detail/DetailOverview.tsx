import React from 'react';

interface DetailOverviewProps {
  title: string;
  overview: string;
}

const DetailOverview = ({ title, overview }: DetailOverviewProps) => {
  return (
    <div>
      <h3 className="text-[20.921px] font-bold ml-8 mb-6 text-white">
        {title}
      </h3>
      <p className="text-[11.14px] ml-8 mb-3 mr-8 text-white">{overview}</p>
    </div>
  );
};

export default DetailOverview;
