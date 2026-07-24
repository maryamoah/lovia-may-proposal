/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  async rewrites() {
    return [
      {
        source: '/images/walk-side-by-side.jpg',
        destination: '/images/walk-side-by-side.jpeg',
      },
      {
        source: '/images/promise-to-hold-your-hand.jpg',
        destination: '/images/promise-to-hold-your-hand.jpeg',
      },
      {
        source: '/images/felt-at-home-together.jpg',
        destination: '/images/felt-at-home-together.jpeg',
      },
    ];
  },
};

export default nextConfig;
