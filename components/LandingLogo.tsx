'use client';

import Lottie from 'react-lottie-player';
import netflixIcon from '@/public/netflix-logo.json';

const LandingLogo = () => {
  return (
    <Lottie
      animationData={netflixIcon}
      style={{ width: '100%' }}
      play
      loop={false}
    />
  );
};

export default LandingLogo;
