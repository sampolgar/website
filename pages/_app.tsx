import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

// TODO - edit this page https://nextjs.org/docs/advanced-features/custom-app
