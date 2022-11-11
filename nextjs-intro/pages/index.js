import { useEffect, useRef, useState } from 'react';
import MyHead from '../components/MyHead';
import { useRouter } from 'next/router';
import head from 'next/head';
import styled from 'styled-components';
import lottie from 'lottie-web';

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
  align-items: center;
  justify-content: center;
  background-color: black;
`;
const NoMore = styled.div`
  width: 20%;
  height: 100%;
  background-color: black;

  //margin: 0 auto;
  position: fixed;
  //margin: 0 auto;
  z-index: 1000;
`;
