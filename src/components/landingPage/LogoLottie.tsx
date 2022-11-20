import { useRouter } from 'next/router';
import lottie from '../../../public/images/logo-lottie.json';
import Lottie from 'react-lottie';
import styled from 'styled-components';

const LogoLottie = () => {
  const router = useRouter();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const homeRouter = setTimeout(() => {
    router.push('/home');
  }, 4000);

  return (
    <Wrapper>
      <Lottie options={defaultOptions} height={375} width={375} />
    </Wrapper>
  );
};

export default LogoLottie;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;
