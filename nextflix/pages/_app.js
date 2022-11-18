import '../styles/globals.css';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>Nextflix</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
