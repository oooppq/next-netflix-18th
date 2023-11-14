'use client';

import { SearchBarIcon, XIcon } from '@/public/images';
import { useRef } from 'react';

interface SearchBarProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setInit: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnChangeQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
  keyword,
  setKeyword,
  setInit,
  handleOnChangeQuery,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center bg-[#424242] h-[52px] mt-[44px] pl-5 pr-[18px]">
      <SearchBarIcon className="mr-1" />
      <input
        type="text"
        className="bg-transparent flex-1 px-3 text-[15px] text-[#C4C4C4] focus:outline-none"
        placeholder="Search for a show, movie, genre, e.t.c."
        onChange={(e) => {
          handleOnChangeQuery(e);
        }}
        ref={inputRef}
      />
      {keyword ? (
        <XIcon
          onClick={() => {
            setKeyword('');
            setInit(true);
            if (inputRef?.current) {
              inputRef.current.value = '';
            }
          }}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
