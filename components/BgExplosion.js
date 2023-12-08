// next image
import Image from 'next/image';
const BgExplosion = () => {
  return (
    <div className="xl:opacity-100 opacity-20 absolute mix-blend-color-dodge bottom-0 right-20 w-[1439] xl:w-[847]">
      <Image
        src="/bg-explosion.webp"
        alt="bg-explosion"
        width={1439}
        height={847}
      />
    </div>
  );
};

export default BgExplosion;
