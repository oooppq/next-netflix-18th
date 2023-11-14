const SkeletonElement = () => {
  return (
    <div className="absolute text-white z-10 w-full text-[30px] bg-[#424242] h-full flex items-center overflow-hidden">
      <div className="w-2/5 bg-[#545454] h-full rounded-sm  animate-pulse"></div>
      <div className="ml-4 bg-[#545454] h-4 w-[100px] rounded-sm animate-pulse"></div>
    </div>
  );
};

export default SkeletonElement;
