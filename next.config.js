/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;
