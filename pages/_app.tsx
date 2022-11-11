import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Wrapper } from './styles/Wrapper';
import Navigator from './components/Navigator/navigator';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      {pageProps && pageProps.pathname !== '/' && <Navigator />}
    </>
  );
}
