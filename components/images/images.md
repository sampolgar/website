<!-- ---
how to call images
export const twoImages = [
  {
    src: '/images/blog/web3-protocols-not-apps/discord.png',
    alt: 'Aether vs Discord',
    caption: 'Aether vs Discord',
    height: 1000,
    width: 500,
  },
  {
    src: '/images/blog/web3-protocols-not-apps/aether.png',
    alt: 'Aether vs Discord',
    caption: 'Aether vs Discord',
    height: 1000,
    width: 500,
  },
];

export const threeImages = [
  {
    src: '/images/blog/web3-protocols-not-apps/discord.png',
    alt: 'Aether vs Discord',
    caption: 'Aether vs Discord',
    height: 1000,
    width: 500,
  },
  {
    src: '/images/blog/web3-protocols-not-apps/aether.png',
    alt: 'Aether vs Discord',
    caption: 'Aether vs Discord',
    height: 1000,
    width: 500,
  },
  {
    src: '/images/blog/web3-protocols-not-apps/aether.png',
    alt: 'Aether vs Discord',
    caption: 'Aether vs Discord',
    height: 1000,
    width: 500,
  },
];

<OneImage
  src='/images/blog/web3-protocols-not-apps/discordvsaether.png'
  alt='Aether vs Discord'
  caption='Aether vs Discord'
  height={1000}
  width={500}
/>

<BlogTwoImages />

export const BlogTwoImages = () => {
  return <TwoImages images={twoImages} />;
};

<BlogThreeImages />

export const BlogThreeImages = () => {
  return <ThreeImages images={threeImages} />;
}; -->
