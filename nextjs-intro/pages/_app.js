import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Wrapper from '../components/Wrapper';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (pageProps && pageProps.pathname) === '/' ? (
    <Wrapper>
      <GlobalStyle />
      <Component {...pageProps} />
    </Wrapper>
  ) : (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
