import { TContent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface ContentElementProps {
  content: TContent;
}

const ContentElement = ({ content }: ContentElementProps) => {
  return (
    <Link href="" className="">
      <Image src={content.poster_path} alt={content.title} className="" />
    </Link>
  );
};

export default ContentElement;
