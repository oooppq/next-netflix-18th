'use client';

import NavBarButton from '@/components/NavBarIcon';
import {
  HomeIcon,
  SearchIcon,
  ComingsoonIcon,
  DownloadIcon,
  MoreIcon,
} from '@/public/images';

const NavBar = () => {
  return (
    <div className="w-full px-7 fixed bottom-0 h-12 flex bg-[#121212] justify-between items-end pb-[0.3rem]">
      <NavBarButton name="Home" isCurrentPage={true}>
        <HomeIcon />
      </NavBarButton>
      <NavBarButton name="Search" isCurrentPage={true}>
        <SearchIcon />
      </NavBarButton>
      <NavBarButton name="Coming Soon" isCurrentPage={true}>
        <ComingsoonIcon />
      </NavBarButton>
      <NavBarButton name="Downloads" isCurrentPage={true}>
        <DownloadIcon />
      </NavBarButton>
      <NavBarButton name="More" isCurrentPage={true}>
        <MoreIcon />
      </NavBarButton>
    </div>
  );
};

export default NavBar;
