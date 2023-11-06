'use client';

import NavBarButton from '@/components/NavBarIcon';
import {
  HomeIcon,
  SearchIcon,
  ComingsoonIcon,
  DownloadIcon,
  MoreIcon,
} from '@/public/images';
import { usePathname, useRouter } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/') return null;

  return (
    <div className="w-full px-7 fixed bottom-0 h-12 flex bg-[#121212] justify-between items-end pb-[0.3rem]">
      <NavBarButton
        name="Home"
        isCurrentPage={pathname === '/browse'}
        handleClickButton={() => router.push('/browse')}
      >
        <HomeIcon />
      </NavBarButton>
      <NavBarButton
        name="Search"
        isCurrentPage={pathname === '/search'}
        handleClickButton={() => router.push('/search')}
      >
        <SearchIcon />
      </NavBarButton>
      <NavBarButton
        name="Coming Soon"
        isCurrentPage={pathname === '/comming-soon'}
        handleClickButton={() => router.push('/comming-soon')}
      >
        <ComingsoonIcon />
      </NavBarButton>
      <NavBarButton
        name="Downloads"
        isCurrentPage={pathname === '/downloads'}
        handleClickButton={() => router.push('/downloads')}
      >
        <DownloadIcon />
      </NavBarButton>
      <NavBarButton
        name="More"
        isCurrentPage={pathname === '/more'}
        handleClickButton={() => router.push('/more')}
      >
        <MoreIcon />
      </NavBarButton>
    </div>
  );
};

export default NavBar;
