const { withFaust, getWpHostname } = require('@faustwp/core');

module.exports = {
  compress: false,
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = withFaust(module.exports);
