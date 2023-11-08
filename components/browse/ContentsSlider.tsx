import ContentElement from '@/components/browse/ContentElement';
import { TContent } from '@/types';

interface ContentsSliderProps {
  title: string;
  contents: TContent[];
}

const ContentsSlider = ({ title, contents }: ContentsSliderProps) => {
  return (
    <div className="ml-3">
      <h3 className="text-[20.921px] font-bold mx-1 text-white">{title}</h3>
      <div className="flex mt-2 mb-5 overflow-auto scroll-smooth scroll">
        {contents.map((content, idx) => (
          <ContentElement
            key={`${content.id}${content.title}`}
            content={content}
            lastFlag={idx === contents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentsSlider;
