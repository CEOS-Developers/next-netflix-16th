import lottie, { AnimationItem } from 'lottie-web';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

function NetflixAnimation() {
  const netflixContainer = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const netflix : any = lottie.loadAnimation({
      container: netflixContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('./netflix.json'),
    });

    netflix.onComplete = function () {
      router.push('/main');
    };
  }, []);

  return (
    <Wrapper>
      <Netflix ref={netflixContainer} />
    </Wrapper>
  );
}
const Netflix = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 372px;
`;

export default NetflixAnimation;
