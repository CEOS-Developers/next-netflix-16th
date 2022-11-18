import Layout from '../../../components/ui/Layout';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoviePoster = styled.img`
  position: relative;
  width: 100%;
  height: 415px;
  margin-bottom: 13px;
`;

const PlayBox = styled.div`
  display: flex;
  align-items: center;
  width: 303px;
  height: 45px;
  background-color: #c4c4c4;
  border-radius: 5.625px;
  color: black;
  justify-content: center;
  margin-bottom: 20px;

  a {
    font-size: 21px;
    margin-left: 13px;
  }
`;

const Previews = styled.h3`
  font-size: 27px;
  margin-left: 32px;
  margin-right: auto;
  color: white;
  margin-bottom: 10px;
`;

const Text = styled.a`
  font-size: 11px;
  color: white;
  margin-left: 48.5px;
  margin-right: 48.5px;
`;

const detail = () => {
  const router = useRouter();
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setMovieDetail(router.query);
  }, [router.isReady]);

  return (
    <Layout>
      {movieDetail !== undefined ? (
        <Wrap>
          <MoviePoster src={movieDetail.poster.replace(/\"/g, '')} />
          <PlayBox>
            <BsFillPlayFill size={30} className="playBtn" />
            <a>Play</a>
          </PlayBox>
          <Previews>Previews</Previews>
          <Text>{movieDetail.preview}</Text>
        </Wrap>
      ) : (
        ''
      )}
    </Layout>
  );
};

export default detail;
