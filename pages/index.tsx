import NetflixAnimation from './components/Netflix/netflix';

export default function Home() {
  return <NetflixAnimation />;
}

Home.getInitialProps = async (context: any) => {
  const pathname = context.pathname;

  return { pathname };
};
