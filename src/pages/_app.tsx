import GlobalStyle from '../styles/GlobalStyle';
import '../styles/fonts.css';
import { RecoilRoot } from 'recoil';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          http-equiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <GlobalStyle />
            <Component {...pageProps} />
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
