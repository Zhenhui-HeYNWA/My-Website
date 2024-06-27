import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div
      className={`  ${containerStyles} bg-[url(/hero/myimg.jpg)] bg-cover bg-center w-[500px] h-[500px] `}>
      {/* <Image src={imgSrc} fill priority alt='' /> */}
    </div>
  );
};

export default DevImg;
