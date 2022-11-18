import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import lottie from 'lottie-web';

import MyHead from '../components/MyHead';

export default function main() {
  const router = useRouter();

  const netflixContainer = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 6000);
    lottie.loadAnimation({
      container: netflixContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../public/netflix-logo.json'),
    });
  }, []);
  return (
    <div>
      <MyHead title="Netflix" />
      <Wrapper>
        <NoMore ref={netflixContainer}></NoMore>
      </Wrapper>
    </div>
  );
}
main.getInitialProps = async (ctx) => {
  const pathname = ctx.pathname;
  return { pathname };
};

const Wrapper = styled.div`
  width: 100%;
`;
const NoMore = styled.div`
  width: 30%;
  height: 100%;

  position: fixed;
  z-index: 1000;
`;
