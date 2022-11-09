import Link from 'next/link';
import styled from 'styled-components';
import { IMovie, IMovieData } from '../../Interface/interface';
import { URL } from '../API/API';


function MovieFetch({ movieData }: IMovieData) {
  if (!movieData) return null;

  return (
    <TrendingWrapper>
      {movieData.map((movieItem: IMovie) => (
        <MovieItemWrapper key={movieItem.id}>
            <Link href={`/detail/${movieItem.id}`}>
          <div>
            <MovieImage src={`${URL.PostPath}/${movieItem.poster_path}`} />
          </div></Link>
        </MovieItemWrapper>
      ))}
    </TrendingWrapper>
  );
}

export default MovieFetch;

const TrendingWrapper = styled.div`
  display: flex;
  flex-direction: columns;
  width: 103px;
  height: 161px;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;
const MovieImage = styled.img`
  width: 103px;
  height: 161px;
  cursor: pointer;
  border-radius: 2px;
`;

export const MovieItemWrapper = styled.div`
  cursor: pointer;
  margin-right: 7px;
`;
