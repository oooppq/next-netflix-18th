import { TContent } from '@/types';
import Image from 'next/image';

interface ContentElementProps {
  content: TContent;
  handleClickContent?: () => void;
}

const ContentElement = ({
  content,
  handleClickContent,
}: ContentElementProps) => {
  return (
    <div className="">
      <Image src={content.poster_path} alt={content.title} className="" />
    </div>
  );
};

export default ContentElement;
