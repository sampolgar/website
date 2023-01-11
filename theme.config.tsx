import { DocsThemeConfig } from 'nextra-theme-docs';
import { Footer } from './components/footer';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Sam Polgar',
    };
  },
  faviconGlyph: '💡',
  head: (
    <>
      <meta property='og:title' content='Sam Portfolio' />
      <meta property='og:description' content='Sam Portfolio' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='theme-color' content='#ffffff' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Language' content='en' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Sam Polgar`s Website' />
      <meta name='og:description' content='Sam Polgar`s Website' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site:domain' content='https://twitter.com/0xsamp' />
      <meta name='twitter:url' content='https://twitter.com/0xsamp' />
      <meta name='apple-mobile-web-app-title' content='Nextra' />
    </>
  ),
  logo: (
    <>
      <span style={{ marginLeft: '2em', fontWeight: 800 }}>Sam Polgar</span>
    </>
  ),
  project: {
    link: 'https://github.com/sampolgar/website',
  },
  docsRepositoryBase: 'https://github.com/sampolgar/website/tree/main/pages',
  footer: {
    component: <Footer />,
  },
  gitTimestamp: false,
  search: {
    placeholder: 'Site Search',
  },
  darkMode: false,
  editLink: {
    text: '',
  },
  feedback: {
    content: 'Feedback, Submit here!',
  },
  banner: {
    key: '0.1 release',
    text: (
      <p>
        Thanks for visiting! This site is about a week from completion, see you
        here again soon!
      </p>
    ),
  },
  nextThemes: {
    forcedTheme: 'dark',
  },

  // primaryHue: { dark: 100, light: 200 },
};

export default config;
