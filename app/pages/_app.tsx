import React from "react";
import Link from "next/link";
import "../styles/globals.css";

const App = ({ Component }: any) => {
  return (
    <>
      <ul>
        <li>
          <Link href="/home">home</Link>
        </li>
        <li>
          <Link href="/search">search</Link>
        </li>
        <li>
          <Link href="/detail">detail</Link>
        </li>
      </ul>
      <Component />
    </>
  );
};

export default App;
