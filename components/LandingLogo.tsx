'use client';

import Lottie from 'react-lottie-player';
import netflixIcon from '@/public/netflix-logo.json';
import { useRouter } from 'next/navigation';

const LandingLogo = () => {
  const router = useRouter();

  return (
    <Lottie
      animationData={netflixIcon}
      style={{ width: '100%' }}
      play
      loop={false}
      onComplete={() => router.push('/browse')}
    />
  );
};

export default LandingLogo;
