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
`;

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
`;
