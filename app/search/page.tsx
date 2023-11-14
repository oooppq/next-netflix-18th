import SearchBar from '@/components/search/SearchBar';
import SearchResultList from '@/components/search/SearchResultList';
import { TContent } from '@/types';

const CONTENTS: TContent[] = [
  {
    id: 1,
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
    title: '안녕하세요!?',
  },
  {
    id: 2,
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
    title: '안녕하세요!?',
  },
  {
    id: 3,
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
    title: '안녕하세요!?',
  },
  {
    id: 4,
    poster_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
    title: '안녕하세요!?',
  },
];

const page = () => {
  return (
    <div>
      <SearchBar />
      <SearchResultList movies={CONTENTS} />
    </div>
  );
};

export default page;
