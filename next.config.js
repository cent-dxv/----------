/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    issuer: {
      and: [/\.(js|ts|jsx|tsx)$/],
    },
    use: ['@svgr/webpack'],
  });

  return config;
},
}

module.exports = nextConfig
