import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from '../api/api';
import Layout from '../../components/ui/Layout';
import TopNav from '../../components/ui/TopNav';
import MidBtn from '../../components/ui/MidBtn';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const nowPlayingRes = await getNowPlaying();
  const nowPlayingData = nowPlayingRes.data.results;

  const getPopularRes = await getPopular();
  const popularData = getPopularRes.data.results;

  const getTopRatedRes = await getTopRated();
  const topRatedData = getTopRatedRes.data.results;

  const getUpcomingRes = await getUpcoming();
  const upcomingData = getUpcomingRes.data.results;

  const randomIndex =
    popularData[Math.floor(Math.random() * popularData.length)];

  return {
    props: {
      nowPlayingData,
      popularData,
      topRatedData,
      upcomingData,
      randomIndex,
    },
  };
};

const home = ({
  nowPlayingData,
  popularData,
  topRatedData,
  upcomingData,
  randomIndex,
}) => {
  const [randomMovie, setRandomMovie] = useState('');
  useEffect(() => {
    setRandomMovie(randomIndex);
  }, []);

  return (
    <Layout>
      <TopNav />
      <RandomImg
        key={randomIndex.id}
        src={
          randomMovie.poster_path
            ? `https://image.tmdb.org/t/p/original/${randomMovie.poster_path}`
            : ''
        }
      />
      <div
        style={{
          color: 'white',
          fontSize: '15px',
          textAlign: 'center',
          marginBottom: '5px',
        }}
      >
        {randomIndex.title}
      </div>
      <MidBtn />
      <MoviesContainer>
        <Category>Previews</Category>
        <PosterContainer>
          {upcomingData.map((movie) => (
            <div key={movie.id}>
              <Link
                href={{
                  pathname: `/home/${movie.id}`,
                  query: {
                    poster: JSON.stringify(
                      `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    ),
                    preview: JSON.stringify(movie.overview),
                  },
                }}
                as={`home/${movie.id}`}
              >
                <PreviewMoviePoster
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </Link>
            </div>
          ))}
        </PosterContainer>

        <Category>Now Playing</Category>
        <PosterContainer>
          {nowPlayingData.map((movie) => (
            <div key={movie.id}>
              <Link
                href={{
                  pathname: `/home/${movie.id}`,
                  query: {
                    poster: JSON.stringify(
                      `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    ),
                    preview: JSON.stringify(movie.overview),
                  },
                }}
                as={`home/${movie.id}`}
              >
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </Link>
            </div>
          ))}
        </PosterContainer>

        <Category>Top Rated</Category>
        <PosterContainer>
          {topRatedData.map((movie) => (
            <div key={movie.id}>
              <Link
                href={{
                  pathname: `/home/${movie.id}`,
                  query: {
                    poster: JSON.stringify(
                      `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    ),
                    preview: JSON.stringify(movie.overview),
                  },
                }}
                as={`home/${movie.id}`}
              >
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </Link>
            </div>
          ))}
        </PosterContainer>

        <Category>Popular</Category>
        <PosterContainer>
          {popularData.map((movie) => (
            <div key={movie.id}>
              <Link
                href={{
                  pathname: `/home/${movie.id}`,
                  query: {
                    poster: JSON.stringify(
                      `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    ),
                    preview: JSON.stringify(movie.overview),
                  },
                }}
                as={`home/${movie.id}`}
              >
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </Link>
            </div>
          ))}
        </PosterContainer>
      </MoviesContainer>
    </Layout>
  );
};

export default home;

const RandomImg = styled.img`
  top: 0;
  width: 100%;
  max-height: 50%;
  // 그라데이션 적용안됨 .. 조언 부탁드립니다.
  /* background: linear-gradient(to bottom, 
        rgba(0,0,0,0),
        rgba(0,0,0,1),
    ); */
`;

const MoviesContainer = styled.div``;

const Category = styled.h3`
  font-size: 27px;
  margin-left: 12px;
  color: white;
`;

const PosterContainer = styled.div`
  display: float;
  overflow-y: auto;
`;

const MoviePoster = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 7px;

  width: 103px;
  height: 161px;
`;

const PreviewMoviePoster = styled.img`
  width: 102px;
  height: 102px;
  border-radius: 50%;
  margin-right: 7px;
  margin-left: 5px;
`;
