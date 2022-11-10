import Head from 'next/head';

export default function MyHead({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
      <link rel="stylesheet" type="text/css" href="style.css"></link>
    </Head>
  );
}
