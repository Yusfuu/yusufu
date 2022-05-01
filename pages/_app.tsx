import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo, NextSeo } from 'next-seo';
import theme from '../styles/theme';
import seo from '../next-seo.config';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
