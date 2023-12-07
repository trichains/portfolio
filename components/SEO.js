import { DefaultSeo } from 'next-seo';

const SEO = () => {
  const title = 'trichains - Portfólio';
  const description =
    'Sou Cristhian, um desenvolvedor web e mobile, além de designer UI/UX. Navegue por meu portfólio e descubra projetos refinados que refletem minha dedicação em transformar ideias em realidade digital. Com habilidades sólidas e uma abordagem criativa, estou pronto para enfrentar desafios e contribuir para soluções tecnológicas de ponta. Vamos colaborar e criar algo extraordinário juntos.';
  const url = 'https://trichains.vercel.app/';
  const imageUrl = 'https://i.ibb.co/MMv3FFh/3c.png';

  return (
    <DefaultSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: imageUrl, alt: title }]
      }}
    />
  );
};

export default SEO;
