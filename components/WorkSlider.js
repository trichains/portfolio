// work slider data
const workSlider = {
  slides: [
    {
      projects: [
        {
          title: 'Snapcatt',
          description: (
            <span className="bg-black bg-opacity-75 rounded py-1 w-max text-center inline text-white px-2">
              Rede social completa para gatos.
            </span>
          ),
          link: 'https://snapcatt.vercel.app',
          image: '/thumb5.jpg'
        },
        {
          title: 'Grão Nobre',
          description: (
            <span className="bg-black bg-opacity-75 rounded py-1 w-max text-center inline text-white px-2">
              Um site dedicado à arte do café.
            </span>
          ),
          link: 'https://graonobre.vercel.app',
          image: '/thumb6.jpg'
        },
        {
          title: 'ChatChains',
          description: (
            <span className="bg-black bg-opacity-75 rounded py-1 w-max text-center inline text-white px-2">
              Chatbot integrado com a API do GPT.
            </span>
          ),
          link: 'https://chatchains.vercel.app/',
          image: '/thumb1.jpg'
        },
        {
          title: 'mottocraft',
          description: (
            <span className="bg-black bg-opacity-75 rounded py-1 w-max text-center inline text-white px-2">
              Um site para venda e compra de motos premium.
            </span>
          ),
          link: 'https://mottocraft.vercel.app/',
          image: '/thumb2.jpg'
        }
      ]
    },
    {
      projects: [
        {
          title: 'Aves Fantásticas',
          description: (
            <span className="bg-black bg-opacity-75 rounded py-1 w-max text-center inline text-white px-2">
              Um guia visual encantador das aves mais fascinantes do mundo.
            </span>
          ),
          link: 'https://trichains.github.io/aves-fantasticas/',
          image: '/thumb3.jpg'
        },
        {
          title: 'WildBeast',
          description: (
            <span className="bg-black bg-opacity-75 rounded py-1 w-max text-center inline text-white px-2">
              Explore o mundo da natureza com este site informativo.
            </span>
          ),
          link: 'https://trichains.github.io/projeto-wildbeast/',
          image: '/thumb4.jpg'
        },
        {
          title: 'Em Breve',
          description: (
            <span className="bg-black bg-opacity-75 rounded py-1 w-max text-center inline text-white px-2">
              Trabalhando nesse projeto 🧑‍🏭
            </span>
          ),
          image: '/em-breve.svg'
        },
        {
          title: 'Em Breve',
          description: (
            <span className="bg-black bg-opacity-75 rounded py-1 w-max text-center inline text-white px-2">
              Trabalhando nesse projeto 🧑‍🏭
            </span>
          ),
          image: '/em-breve.svg'
        }
      ]
    }
  ]
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[580px]">
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.projects.map((project, index) => {
                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={project.image} width={500} height={300} alt={project.title} />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#222222] to-[#0a0a0a] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex flex-col items-center text-[13px] tracking-[0.2em]">
                          {/* title */}
                          <div className="mb-1">{project.title}</div>
                          {/* description */}
                          <div className="text-center text-gray-300">{project.description}</div>
                          {/* icon */}
                          <div className="mt-2 text-xl text-white">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
