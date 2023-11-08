import { NetflixIcon } from '@/public/images';

const HomeNavBar = () => {
  return (
    <nav className="flex justify-between items-center px-[18px] mt-6 text-[17px] text-white">
      <NetflixIcon />
      <button className="px-[2px]">TV Shows</button>
      <button className="px-[2px]">Movies</button>
      <button className="px-[2px]">My List</button>
    </nav>
  );
};

export default HomeNavBar;
