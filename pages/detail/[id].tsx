import axios from 'axios';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { BASE_URL, getDetail, URL } from '../components/API/API';

function Detail({ movieDetail }: any) {
  //movieDatail 너무 많아서 interface 나중에 ㅎㅎ..
  
  return (
    <>
      <MovieImage src={`${URL.PostPath}${movieDetail.poster_path}`} />
      <Preview>Previews</Preview>
      <Overview>{movieDetail.overview}</Overview>
    </>
  );
}
export default Detail;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );

    const movieDetail = response.data;
    const detail = await getDetail(id);

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
`;

const Preview = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 20px;
  text-align: left;
  margin: 24px 0 24px 32px;
`;

const Overview = styled.div`
  font-size: 11px;
  margin-left: 32px;
  color: rgba(255, 255, 255, 0.83);
`;
