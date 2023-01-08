import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { Footer } from '@components/footer';

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ marginLeft: '2em', fontWeight: 800 }}>Sam Polgar</span>
    </>
  ),
  head: () => {
    const { title } = useConfig();
    const { route } = useRouter();

    return (
      <>
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta name='description' content='Sam Polgar`s Website' />
        <meta name='og:description' content='Sam Polgar`s Website' />
        <meta name='twitter:card' content='summary_large_image' />
        {/* <meta name='twitter:image' content={socialCard} /> */}
        <meta name='twitter:site:domain' content='https://twitter.com/0xsamp' />
        <meta name='twitter:url' content='https://twitter.com/0xsamp' />
        <meta
          name='og:title'
          content={title ? title + ' – Nextra' : 'Nextra'}
        />
        {/* <meta name='og:image' content={socialCard} /> */}
        <meta name='apple-mobile-web-app-title' content='Nextra' />
        <link rel='icon' href='/public/favicons/favicon.png' type='image/png' />
        <link
          rel='icon'
          href='/public/favicons/favicon.png'
          type='image/png'
          media='(prefers-color-scheme: dark)'
        />
      </>
    );
  },
  // navbar: {
  //   component: <a href='https://nextra.site'>Nextra</a>,
  // },
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
};

export default config;
