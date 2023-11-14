import { SearchBarIcon, XIcon } from '@/public/images';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-[#424242] h-[52px] mt-[44px] pl-5 pr-[18px]">
      <SearchBarIcon className="mr-1" />
      <input
        type="text"
        className="bg-transparent flex-1 px-3 text-[15px] text-[#C4C4C4] focus:outline-none"
        placeholder="Search for a show, movie, genre, e.t.c."
      />
      <XIcon />
    </div>
  );
};

export default SearchBar;
