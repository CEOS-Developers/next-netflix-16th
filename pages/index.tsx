import NetflixAnimation from './components/netflix/netflix';

export default function Home() {
  return (
    <>
      <NetflixAnimation />
    </>
  );
}

Home.getInitialProps = async (ctx: any) => {
  const pathname = ctx.pathname;

  return { pathname };
};
