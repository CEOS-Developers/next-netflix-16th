import styled from 'styled-components';
import { Column } from '../../components/elements/Column';
import Footer from '../../components/elements/Footer';

const IdHomePage = () => {
  return (
    <Container>
      <ContentImage />
      <Footer />
    </Container>
  );
};

export default IdHomePage;

const Container = styled.div`
  width: 375px;
  height: auto;

  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 415px;
  background-color: aliceblue;
`;
