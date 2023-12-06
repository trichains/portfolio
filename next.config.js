/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/portfolio-trichains' : '',
  assetPrefix: isProd ? '/portfolio-trichains' : ''
};
