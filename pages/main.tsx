import axios from 'axios';
import styled from 'styled-components';
import { API } from './components/API/API';
import MovieFetch from './components/Main/Mainmovie';
import Poster from './components/Main/Poster';
import { IMainMovie } from './Interface/interface';

function MainPage({
  previewData,
  popularData,
  nowPlayingData,
  topRatedData,
}: IMainMovie) {
  const randomMovieArray = [
    ...previewData,
    ...popularData,
    ...nowPlayingData,
    ...topRatedData,
  ];

  return (
    <>
      <Poster randomMovieArray={randomMovieArray} />

      <Title>Trending</Title>
      <MovieFetch movieData={previewData} trending={true} />

      <Title>Popular</Title>
      <MovieFetch movieData={popularData} />

      <Title>Now Playing</Title>
      <MovieFetch movieData={nowPlayingData} />

      <Title>Top Rated</Title>
      <MovieFetch movieData={topRatedData} />
    </>
  );
}

export default MainPage;

export async function getServerSideProps() {
  try {
    const response = await axios.get(`${API.Preview}`);
    const response2 = await axios.get(`${API.Popular}`);
    const response3 = await axios.get(`${API.NowPlaying}`);
    const response4 = await axios.get(`${API.TopRated}`);

    const previewData = response.data.results;
    const popularData = response2.data.results;
    const nowPlayingData = response3.data.results;
    const topRatedData = response4.data.results;

    return {
      props: {
        previewData,
        popularData,
        nowPlayingData,
        topRatedData,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

const Title = styled.div`
  line-height: 20px;
  margin: 22px 14px 16px;
  font-weight: 700;
  font-size: 26px;
`;
