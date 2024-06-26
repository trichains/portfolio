// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-50 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-4">
          {/* logo */}
          <Link href={'/'}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={287}
              height={48}
              priority={true}
            />
          </Link>
          {/* socials and blog invite */}
          <Link
            href={'https://3chains.vercel.app'}
            target="_blank"
            className="hidden animate-pulse lg:block text-base tracking-widest hover:text-accent transition all duration-300">
            visite meu blog &rarr;
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
