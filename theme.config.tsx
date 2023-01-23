import Image from 'next/image';
import { Footer } from './components/footer';
import { Navbar } from 'nextra-theme-docs';
import { Github, Medium, Twitter, LinkedIn } from './components/social';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const Logo = ({ size }) => {
  return (
    <Image
      src='/images/social/avatar.png'
      alt='Sam Polgar'
      width={size}
      height={size}
    />
  );
};

export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Sam Polgar',
    };
  },
  faviconGlyph: '💡',
  head: ({ title, meta }) => {
    const ogImage =
      'https://user-images.githubusercontent.com/39210767/213995514-dc0ee16f-b22c-43ea-902c-9d41e08082eb.png';
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property='og:url' content={`https://sampolgar.com${asPath}`} />
        <meta
          property='og:title'
          content={frontMatter.title || 'Sam Polgar`s Site'}
        />
        <meta
          property='og:description'
          content={frontMatter.description || 'Sam Polgar`s Site'}
        />
        <meta name='og:description' content='Sam Polgar`s Website' />
        <meta name='description' content='Sam Polgar`s Website' />
        <meta name='og:image' content={ogImage} />
        <meta name='site:domain' content='https://www.sampolgar.com' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site:domain' content='https://twitter.com/0xsamp' />
        <meta name='twitter:url' content='https://twitter.com/0xsamp' />
        <meta name='twitter:image' content={ogImage} />
        <meta name='apple-mobile-web-app-title' content='Sam`s Portfolio' />
      </>
    );
  },
  docsRepositoryBase: 'https://github.com/sampolgar/website/tree/main/pages',
  gitTimestamp: false,
  search: {
    placeholder: 'Site Search',
  },
  editLink: {
    text: '',
  },
  feedback: {
    content: 'Feedback, Submit here!',
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  footer: {
    component: Footer,
  },
  logo: () => {
    return (
      <>
        <Logo size={35} />
      </>
    );
  },
  navbar: {
    component: Navbar,
    extraContent: (
      <>
        <Github />
        <Medium />
        <Twitter />
        <LinkedIn />
      </>
    ),
  },
};
