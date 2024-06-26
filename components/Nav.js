// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'Página inicial', path: '/', icon: <HiHome /> },
  { name: 'Sobre mim', path: '/about', icon: <HiUser /> },
  { name: 'Serviços', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'Projetos', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'Depoimentos',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />
  },
  {
    name: 'Contato',
    path: '/contact',
    icon: <HiEnvelope />
  }
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-40 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <Link
        href={'https://3chains.vercel.app'}
        target="_blank"
        className="absolute block lg:hidden pt-4 animate-pulse -top-11 right-0 text-base tracking-widest hover:text-gray-900 transition all duration-300">
        visite meu blog &rarr;
      </Link>
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && 'text-accent'
              } relative flex items-center group hover:text-zinc-600 xl:hover:text-black transition-all duration-300`}
              href={link.path}
              key={index}>
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
