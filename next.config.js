/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  pwa: {
    disable: true,
    dest: 'public',
  },
  typescript: {},
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  distDir: '.next',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "./lib/mixins.scss"; @import "./lib/variables.scss";`,
  },
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: { properties: ['^data-cy$'] },
  },
};
