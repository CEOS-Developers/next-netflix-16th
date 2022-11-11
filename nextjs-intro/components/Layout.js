import styled from 'styled-components';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
`;
