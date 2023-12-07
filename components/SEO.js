import { DefaultSeo } from 'next-seo';

const SEO = () => {
  const title = 'trichains - Portfólio';
  const description =
    'Explore meu portfólio e descubra projetos que refletem minha dedicação e abordagem criativa.';
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
