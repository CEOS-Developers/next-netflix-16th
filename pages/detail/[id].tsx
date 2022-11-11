import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { getDetail, URL } from '../components/API/API';
import PlayButton from '../components/Share/PlayButton';

function Detail({ movieDetail }: any) {
  //movieDatail 너무 많아서 interface 나중에 ㅎㅎ..

  if (!movieDetail) return null;
  return (
    <>
      <MovieImage src={`${URL.PostPath}${movieDetail.poster_path}`} />
      <PlayButton />
      <Preview>Previews</Preview>
      <Overview>{movieDetail.overview}</Overview>
    </>
  );
}
export default Detail;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;

  try {
    const movieDetail = await getDetail(id);

    return {
      props: { movieDetail },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

const MovieImage = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: 1px;
  margin-bottom: 20px;
`;

const Preview = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 20px;
  text-align: left;
  margin: 24px 0 24px 16px;
`;

const Overview = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.83);
  margin-left: 32px;
`;
