import ContentElement from '@/components/browse/ContentElement';
import { TContent } from '@/types';

interface ContentsSliderProps {
  title: string;
  contents: TContent[];
}

const ContentsSlider = ({ title, contents }: ContentsSliderProps) => {
  return (
    <div className="">
      <h3 className="">{title}</h3>
      {contents.map((content) => (
        <ContentElement
          key={`${content.id}${content.title}`}
          content={content}
          handleClickContent={() => {}}
        />
      ))}
    </div>
  );
};

export default ContentsSlider;
