import styled from 'styled-components';
import { Column } from '../../components/elements/Column';
import Footer from '../../components/elements/Footer';
import PlayButton from '../../components/elements/PlayButton';
import { DetailPageProps } from '../../interfaces/interface';
import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const { description, poster_path }: any = router.query;

  return (
    <Container>
      <ContentWrapper>
        <ContentImage src={poster_path} alt="포스터 이미지" />
        <PlayButton width="303px" marginTop="13px" />
      </ContentWrapper>
      <TextWrapper>
        <div className="detail-title">Previews</div>
        <div className="detail-description">{description}</div>
      </TextWrapper>
      <Footer />
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 375px;
  padding-bottom: 60px;
`;

const ContentWrapper = styled.div`
  width: 375px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 415px;
  background-color: aliceblue;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  color: white;
  gap: 24px;

  & .detail-description {
    opacity: 83%;
  }
`;
