// next image
import Image from 'next/image';
const TopLeftImg = () => {
  return (
    <div
      className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]
      opacity-40">
      <Image
        src="/top-left-img.webp"
        alt="top-left-image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
