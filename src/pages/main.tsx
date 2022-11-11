import styled from 'styled-components';
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getTrending,
} from '../API/API';
import MovieFetch from '../components/Main/Mainmovie';
import Poster from '../components/Main/Poster';
import { IMainMovie } from '../Interface/interface';

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
    const previewData = await getTrending();
    const popularData = await getPopular();
    const nowPlayingData = await getNowPlaying();
    const topRatedData = await getTopRated();

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
