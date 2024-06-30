import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    //TODO fix the bg styling
    <div className={`${containerStyles} ${imgSrc} bg-cover bg-center  `}></div>
  );
};

export default DevImg;
