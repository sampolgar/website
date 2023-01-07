import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <span>Sam Polgar</span>,
  project: {
    link: 'https://github.com/sampolgar/website',
  },
  docsRepositoryBase: 'https://github.com/sampolgar/website/tree/main/pages',
  footer: {
    text: 'Sam Polgar',
  },
  gitTimestamp: false,
};

export default config;

//TODO - update links here as per https://github.com/shuding/cobe/blob/main/website/theme.config.js
