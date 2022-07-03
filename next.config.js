/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const path = require('path');

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    fallbacks: {
      document: '/pages/_offline.tsx',
    },
  },
  optimizeFonts: false,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  webpack(config, _options) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['@interfaces'] = path.join(__dirname, 'interfaces');
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');
    config.resolve.alias['@context'] = path.join(__dirname, 'context');

    return config;
  },
});

module.exports = nextConfig;
