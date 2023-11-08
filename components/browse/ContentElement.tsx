import { TContent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface ContentElementProps {
  content: TContent;
  category: string;
  rank: number | undefined;
  sequence: 'head' | 'tail' | 'mid';
}

const ContentElement = ({
  content,
  category,
  rank,
  sequence,
}: ContentElementProps) => {
  const width = 103;
  const height = 161;
  const url = `https://image.tmdb.org/t/p/w154`;
  let clickUrl = `?id=${content.id}&category=${category}&posterPath=${content.poster_path}`;
  if (rank) clickUrl += `&rank=${rank}`;

  return (
    <Link
      href={clickUrl}
      className={`w-[103px] h-[161px] flex ${
        sequence === 'head' ? 'ml-3' : ''
      } ${sequence === 'tail' ? 'mr-3' : 'mr-2'}`}
    >
      <Image
        src={url + content.poster_path}
        alt={content.title}
        className="min-w-[103px] h-[161px]"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default ContentElement;
