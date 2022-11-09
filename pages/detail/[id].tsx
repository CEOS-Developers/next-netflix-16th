import axios from 'axios';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { BASE_URL, getDetail, URL } from '../components/API/API';

function Detail({ movieDetail }: any) {
  if (!movieDetail) return null;

  return (
    <>
      <div>detail</div>
      <>
        <MovieImage src={`${URL.PostPath}${movieDetail.poster_path}`} />
        <h2>Previews</h2>
        <h4>{movieDetail?.original_title || movieDetail?.original_name}</h4>
        <div>{movieDetail.overview}</div>
      </>
    </>
  );
}
export default Detail;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

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

export const MovieImage = styled.img`
  height: 100px;
  width: 103px;
  cursor: pointer;
  border-radius: 1px;
`;
