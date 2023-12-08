import Head from 'next/head';
import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="trichains - Portfólio" />
        <meta
          property="og:description"
          content="Explore meu portfólio e descubra projetos que refletem minha dedicação e abordagem criativa."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/Y80DfL1/trichains.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trichains.vercel.app" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
