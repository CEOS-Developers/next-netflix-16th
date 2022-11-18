import MyHead from '../components/MyHead';
import styled from 'styled-components';
import Header from '../components/Header';

export default function movies({ data }) {
  return (
    <div>
      <MyHead title="Movies" />
      <Header />
      <MovieWrapper>
        {data.results.map((movie) => (
          <Movie key={movie.id}>
            <MovieImg
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            <MovieContent>
              <MovieName>{movie.original_name}</MovieName>
              <MovieText>{movie.overview}</MovieText>
            </MovieContent>
          </Movie>
        ))}
      </MovieWrapper>
    </div>
  );
}

const API_KEY = process.env.API_KEY;

export async function getServerSideProps() {
  const data = await (
    await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
  ).json();

  return { props: { data } };
}

const MovieWrapper = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Movie = styled.div`
  display: flex;
  gap: 2rem;
`;

const MovieImg = styled.img`
  width: 103px;
  height: 177px;
  object-fit: cover;
`;

const MovieContent = styled.div`
  width: 100%;
  height: 177px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MovieName = styled.div`
  font-size: 1.25rem;
  color: white;
`;

const MovieText = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;
