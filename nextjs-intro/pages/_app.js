import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Wrapper from '../components/Wrapper';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return pageProps && pageProps.pathname === '/' ? (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <GlobalStyle />
        <Component {...pageProps} />
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  ) : (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
