import Link from 'next/link';
import styled from 'styled-components';
import { BlockLike } from 'typescript';
import { IMovie, IMovieData } from '../../Interface/interface';
import { URL } from '../API/API';

function MovieFetch({ movieData, trending }: any) {
  if (!movieData) return null;

  return (
    <TrendingWrapper>
      {movieData.map((movieItem: IMovie) => (
        <MovieItemWrapper key={movieItem.id}>
          <Link href={`/detail/${movieItem.id}`}>
            <MovieImage
              src={`${URL.PostPath}/${movieItem.poster_path}`}
              trending={trending}
            />
          </Link>
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
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;
const MovieImage = styled.img<{ trending: boolean }>`
  width: 103px;
  height: ${({ trending }) => (trending ? `90px` : `161px`)};
  cursor: pointer;
  border-radius: ${({ trending }) => (trending ? `50%` : `2px`)};
  object-fit: cover;
`;

export const MovieItemWrapper = styled.div`
  cursor: pointer;
  margin-right: 7px;
`;
