import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    //TODO fix the bg styling
    <div
      className={`${containerStyles} ${imgSrc} bg-cover bg-center w-[500px] h-[500px] `}></div>
  );
};

export default DevImg;
