import ContentElement from '@/components/browse/ContentElement';
import { TContent } from '@/types';

interface ContentsSliderProps {
  title: string;
  contents: TContent[];
}

const ContentsSlider = ({ title, contents }: ContentsSliderProps) => {
  return (
    <div className="">
      <h3 className="text-[20.921px] font-bold ml-4 text-white">{title}</h3>
      <div className="flex mt-2 mb-5 overflow-auto scroll-smooth scroll scroll-hide">
        {contents.map((content, idx) => (
          <ContentElement
            key={`${content.id}${content.title}`}
            content={content}
            sequence={
              idx === 0 ? 'head' : idx === contents.length - 1 ? 'tail' : 'mid'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ContentsSlider;
