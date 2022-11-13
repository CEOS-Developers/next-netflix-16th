import React from "react";
import "../styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <title>Netfilx</title>
        <link rel="icon" href="https://ifh.cc/g/bCkXTX.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;