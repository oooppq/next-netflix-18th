'use client';

import { SearchBarIcon, XIcon } from '@/public/images';
import { useRef, useState } from 'react';

interface SearchBarProps {
  handleOnChangeQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ handleOnChangeQuery }: SearchBarProps) => {
  // 다른 용도는 없고, 단지 seacrh bar 안에 X 아이콘 렌더링 여부를 query에 따라 즉각적으로 판단해주려구..
  const [query, setQuery] = useState<string>('');

  return (
    <div className="flex items-center bg-[#424242] h-[52px] mt-[44px] pl-5 pr-[18px]">
      <SearchBarIcon className="mr-1" />
      <input
        type="text"
        className="bg-transparent flex-1 px-3 text-[15px] text-[#C4C4C4] focus:outline-none"
        placeholder="Search for a show, movie, genre, e.t.c."
        onChange={(e) => {
          handleOnChangeQuery(e);
          setQuery(e.target.value);
        }}
        value={query}
      />
      {query.trim() ? <XIcon /> : null}
    </div>
  );
};

export default SearchBar;
