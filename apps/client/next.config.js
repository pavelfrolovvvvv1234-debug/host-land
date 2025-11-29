/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Отключаем ESLint во время production build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Отключаем проверку типов во время build (опционально)
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
