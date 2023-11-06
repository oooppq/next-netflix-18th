import dynamic from 'next/dynamic';

const page = () => {
  const Logo = dynamic(() => import('@/components/LandingLogo'), {
    ssr: false,
  });

  return (
    <div className="w-full h-full bg-black flex align-middle">
      <Logo />
    </div>
  );
};

export default page;
