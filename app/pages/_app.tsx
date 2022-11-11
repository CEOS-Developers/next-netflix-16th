import React from "react";
import "../styles/globals.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <Component {...pageProps}/>
    </>
  );
};

export default App;
