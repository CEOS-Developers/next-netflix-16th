import styled from 'styled-components';
import Footer from '../../components/elements/Footer';
import Navigation from '../../components/elements/Navigation';
import { getNowPlaying, getTopRated, getPopular, getUpcoming } from '../../api/getMovies';
import CircularThumbnail from '../../components/homePage/CircularThumbnail';
import RectangularThumbnail from '../../components/homePage/RectangularThumbnail';
import MoviesListBar from '../../components/homePage/MoviesListBar';
import { useRecoilState } from 'recoil';
import {
  nowPlyingMoviesState,
  popularMoviesState,
  topRatedMoviesState,
  upComingMoviesState,
} from '../../states/homeState';
import { Column } from '../../components/elements/Column';
import BackgroundImage from '../../components/homePage/BackgroundImage';
import PlayBar from '../../components/homePage/PlayBar';
import { selectedContentState } from '../../states/footerState';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage = ({ nowPlayingData, topRatedData, popularData, upComingData }: any) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useRecoilState(nowPlyingMoviesState);
  const [topRatedMovies, setTopRatedMovies] = useRecoilState(topRatedMoviesState);
  const [popularMovies, setPopularMovies] = useRecoilState(popularMoviesState);
  const [upComingMovies, setUpComingMovies] = useRecoilState(upComingMoviesState);
  const [selectedIcon, setSelectedIcon] = useRecoilState(selectedContentState);
  const router = useRouter();
  const pageName = router.asPath.slice(1);

  useEffect(() => {
    setSelectedIcon(pageName);
  }, []);

  setNowPlayingMovies(nowPlayingData.results);
  setTopRatedMovies(topRatedData.results);
  setPopularMovies(popularData.results);
  setUpComingMovies(upComingData.results);

  const randomNowPlaying = nowPlayingData.results[Math.floor(Math.random() * nowPlayingData.results.length)];

  return (
    <HomePageContainer>
      <Navigation />
      <BackgroundImage
        id={randomNowPlaying.id}
        imageSrc={`https://image.tmdb.org/t/p/original${randomNowPlaying.backdrop_path}`}
      />
      <PlayBar />

      <Column gap="22px" marginTop="43px">
        <MoviesListBar title="Previews" gap="23px">
          {upComingMovies.map((movie) => {
            const imagePath = movie.backdrop_path;
            return (
              <CircularThumbnail
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/original${imagePath}`}
              />
            );
          })}
        </MoviesListBar>
        <MoviesListBar title="Now Playing" gap="14px" marginTop="6px">
          {nowPlayingMovies.map((movie) => {
            const imagePath = movie.backdrop_path;
            return (
              <RectangularThumbnail
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/original${imagePath}`}
              />
            );
          })}
        </MoviesListBar>
        <MoviesListBar title="Top Rated" gap="14px">
          {topRatedMovies.map((movie) => {
            const imagePath = movie.backdrop_path;
            return (
              <RectangularThumbnail
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/original${imagePath}`}
              />
            );
          })}
        </MoviesListBar>
        <MoviesListBar title="Popular" gap="14px">
          {popularMovies.map((movie) => {
            const imagePath = movie.backdrop_path;
            return (
              <RectangularThumbnail
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/original${imagePath}`}
              />
            );
          })}
        </MoviesListBar>
        <Footer />
      </Column>
    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContainer = styled.div`
  /* width: 375px; */
  height: auto;

  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

export async function getServerSideProps() {
  const nowPlayingData = await getNowPlaying();
  const topRatedData = await getTopRated();
  const popularData = await getPopular();
  const upComingData = await getUpcoming();

  return {
    props: {
      nowPlayingData,
      topRatedData,
      popularData,
      upComingData,
    },
  };
}
