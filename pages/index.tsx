import NetflixAnimation from './components/Netflix/netflix';

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
