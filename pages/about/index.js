import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaLanguage,
  FaCertificate
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />
        ]
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />]
      },
      {
        title: 'Inglês Intermediário',
        icons: [<FaLanguage />]
      }
    ]
  },
  {
    title: 'experiência',
    info: [
      {
        title: 'JavaScript Completo ES6 [74 Horas]',
        stage: (
          <a
            href="https://www.origamid.com/certificate/9acf7493"
            target="_blank"
            rel="noreferrer">
            Certificado
          </a>
        ),
        certificate: (
          <a
            href="https://www.origamid.com/certificate/9acf7493"
            target="_blank"
            rel="noreferrer">
            {FaCertificate()}
          </a>
        )
      },
      {
        title: 'HTML/CSS [46 Horas]',
        stage: (
          <a
            href="https://www.origamid.com/certificate/df7f556d"
            target="_blank"
            rel="noreferrer">
            Certificado
          </a>
        ),
        certificate: (
          <a
            href="https://www.origamid.com/certificate/df7f556d"
            target="_blank"
            rel="noreferrer">
            {FaCertificate()}
          </a>
        )
      },
      {
        title: 'UI Design Avançado [30 Horas]',
        stage: (
          <a
            href="https://www.origamid.com/certificate/4c6b8a99"
            target="_blank"
            rel="noreferrer">
            Certificado
          </a>
        ),
        certificate: (
          <a
            href="https://www.origamid.com/certificate/4c6b8a99"
            target="_blank"
            rel="noreferrer">
            {FaCertificate()}
          </a>
        )
      },
      {
        title: 'UI Design [34 Horas]',
        stage: (
          <a
            href="https://www.origamid.com/certificate/b15b0ebe"
            target="_blank"
            rel="noreferrer">
            Certificado
          </a>
        ),
        certificate: (
          <a
            href="https://www.origamid.com/certificate/b15b0ebe"
            target="_blank"
            rel="noreferrer">
            {FaCertificate()}
          </a>
        )
      },
      {
        title: 'CSS Flexbox [6 Horas]',
        stage: (
          <a
            href="https://www.origamid.com/certificate/8fa90288"
            target="_blank"
            rel="noreferrer">
            Certificado
          </a>
        ),
        certificate: (
          <a
            href="https://www.origamid.com/certificate/8fa90288"
            target="_blank"
            rel="noreferrer">
            {FaCertificate()}
          </a>
        )
      },
      {
        title: 'CSS Grid Layout [10 Horas]',
        stage: (
          <a
            href="https://www.origamid.com/certificate/4a38808e"
            target="_blank"
            rel="noreferrer">
            Certificado
          </a>
        ),
        certificate: (
          <a
            href="https://www.origamid.com/certificate/4a38808e"
            target="_blank"
            rel="noreferrer">
            {FaCertificate()}
          </a>
        )
      },
      {
        title: 'JavaScript [40 Horas]',
        stage: 'Concluído'
      },
      {
        title: 'HTML e CSS3 - 5 MÓDULOS [40 HORAS]',
        stage: 'Concluído'
      },
      {
        title: 'Algoritmo [40 HORAS]',
        stage: 'Concluído'
      },
      {
        title: 'GIT e GITHUB [20 HORAS]',
        stage: 'Concluído'
      }
    ]
  },
  {
    title: 'Cursos Intensivos',
    info: [
      {
        title: 'HTML, CSS, JS - Completo',
        stage: '136h total'
      },
      {
        title: 'UX Design & UI Design',
        stage: '56h'
      },
      {
        title: 'Front End para Iniciantes',
        stage: '72h'
      }
    ]
  }
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit={'hidden'}
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <h2 className="h2">
            Histórias <span className="text-accent">cativantes</span> nascem da
            dedicação ao design.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Há 1 ano atrás, comecei a trabalhar de freelancer como
            desenvolvedor. Desde então, fiz trabalho remoto para agências e
            colaborei em produtos digitais para uso empresarial e de consumo.
          </p>
          {/* counters */}
          <div>
            <div>
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4x1 font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={7} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Anos de experiencia
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4x1 font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Clientes satisfeitos.
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4x1 font-extrabold text-accent mb-2">
                  <CountUp start={0} end={23} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projetos finalizados.
                </div>
              </div>
              {/* certificates */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4x1 font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certificados garantidos.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div>{item.certificate}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
