import Link from 'next/link';
import styled from 'styled-components';
import { IMovie } from '../../Interface/interface';
import { URL } from '../../API/API';
import { IMovieFetch } from '../../Interface/interface';

function MovieFetch({ movieData, trending }: IMovieFetch) {
  return (
    <MovieWrapper>
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
    </MovieWrapper>
  );
}

export default MovieFetch;

const MovieWrapper = styled.div`
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
