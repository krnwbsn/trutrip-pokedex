/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const path = require('path');

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  webpack(config, _options) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['@interfaces'] = path.join(__dirname, 'interfaces');
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');

    return config;
  },
});

module.exports = nextConfig;
