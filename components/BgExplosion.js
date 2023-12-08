// next image
import Image from 'next/image';
const BgExplosion = () => {
  return (
    <div className="animate-pulse duration-75 z-10 xl:opacity-100 opacity-20 absolute translate-z-0 mix-blend-color-dodge bg-cover bg-right bg-no-repeat right-0 left-0">
      <Image
        src={'/bg-explosion.webp'}
        alt="bg-explosion"
        width={1439}
        height={846}
      />
    </div>
  );
};

export default BgExplosion;
