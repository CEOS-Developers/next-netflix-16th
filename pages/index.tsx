import { NextPageContext } from 'next/types';
import NetflixAnimation from './components/Netflix/Netflix';

export default function Home() {
  return <NetflixAnimation />;
}

Home.getInitialProps = async (context: NextPageContext) => {
  const pathname = context.pathname;

  return { pathname };
};
