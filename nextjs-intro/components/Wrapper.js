import styled from 'styled-components';

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 375px;
  height: 100vh;
  margin-right: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-right: 5.5rem;    
  }

`;
