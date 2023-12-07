// links
import Link from 'next/link';

// icons
import {
  RiLinkedinLine,
  RiGithubLine,
  RiFacebookLine,
  RiInstagramLine
} from 'react-icons/ri';

const Socials = () => {
  const ExternalLink = ({ href, children }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300">
        {children}
      </a>
    );
  };
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <ExternalLink href={'https://www.linkedin.com/in/trichains/'}>
        <RiLinkedinLine />
      </ExternalLink>
      <ExternalLink href={'https://github.com/trichains'}>
        <RiGithubLine />
      </ExternalLink>
      <ExternalLink href={'https://www.facebook.com/trichains'}>
        <RiFacebookLine />
      </ExternalLink>
      <ExternalLink href={'https://www.instagram.com/trichains'}>
        <RiInstagramLine />
      </ExternalLink>
    </div>
  );
};

export default Socials;
