import styled from 'styled-components';
import { Column } from '../../components/elements/Column';
import Footer from '../../components/elements/Footer';
import PlayButton from '../../components/elements/PlayButton';
import { DetailPageProps } from '../../interfaces/interface';

const DetailPage = ({ title, description }: DetailPageProps) => {
  return (
    <Container>
      <ContentImage />
      <PlayButton width="303px" />
      <TextWrapper>
        <div>{title} title</div>
        <div style={{ padding: '0px 20px' }}>{description} description</div>
      </TextWrapper>
      <Footer />
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 375px;
  /* height: auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 415px;
  background-color: aliceblue;
`;

const TextWrapper = styled.div`
  padding: 32px;
  color: white;
`;
