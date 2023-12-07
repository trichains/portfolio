// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/work'}
        className="relative w-[135px] h-[135px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group sm:w-[185px] sm:h-[185px]">
        <div className="w-full h-full max-w-[101px] max-h-[108px] sm:max-w-[141px] sm:max-h-[148px]">
          <Image
            src={'/rounded-text.svg'}
            width={141}
            height={148}
            alt=""
            className="animate-spin-slow w-full h-full"
          />
        </div>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
