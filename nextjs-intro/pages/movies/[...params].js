import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import MyHead from '../../components/MyHead';

export default function Detail({ data }) {
  return (
    <Container>
      <MyHead title={data.original_title} />
      <MovieImg
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
      />
      <Contents>
        <MoviePlayBtn>
          <FontAwesomeIcon icon={faPlay} />
          <Link href={`/videos/${data.id}`} key={data.id}>
            Play
          </Link>
        </MoviePlayBtn>
        <MovieName>{data.original_title}</MovieName>
        <MovieText>{data.overview}</MovieText>
      </Contents>
    </Container>
  );
}

const API_KEY = process.env.API_KEY;

export async function getServerSideProps({ params: { params } }) {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${params[1]}?api_key=${API_KEY}`
    )
  ).json();

  return { props: { data } };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Contents = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MoviePlayBtn = styled.div`
  width: 100%;
  padding: 0.75rem;

  text-align: center;

  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 0.25rem;
  background: #c4c4c4;
`;

const MovieName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 26.75px;
  color: white;
`;

const MovieText = styled.div`
  color: white;
`;

const MovieImg = styled.img`
  width: 100%;
  height: 415px;
  object-fit: cover;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
`;
