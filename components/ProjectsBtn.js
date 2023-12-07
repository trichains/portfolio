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
        className="relative w-[141px] h-[148px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-40 xl:w-[155px] xl:h-[155px]">
        <Image
          src={'/rounded-text.svg'}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-[121px] h-[128px] max-w-full max-h-full xl:max-w-[185px] xl:max-h-[185px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
