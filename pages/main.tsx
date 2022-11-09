import axios from 'axios';
import { API } from './components/API/API';
import MovieFetch from './components/Main/mainMovieFetch';
import Poster from './components/Main/Poster';

function MainPage({
  previewData,
  popularData,
  nowPlayingData,
  topRatedData,
}: any) {
  const randomMovieArray = [
    ...previewData,
    ...popularData,
    ...nowPlayingData,
    ...topRatedData,
  ];

  return (
    <>
      <Poster randomMovieArray={randomMovieArray} />
      <div>Trending</div>
      <MovieFetch movieData={previewData} />

      <div>Popular</div>
      <MovieFetch movieData={popularData} />

      <div>Now Playing</div>
      <MovieFetch movieData={nowPlayingData} />

      <div>Top Rated</div>
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
