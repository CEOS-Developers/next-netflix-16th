import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Wrapper } from './styles/Wrapper';
import Navigator from './components/navigator/navigator';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
        {pageProps && pageProps.pathname !== '/' && <Navigator />}
      </Wrapper>
    </>
  );
}
