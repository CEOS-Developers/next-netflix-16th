import Link from 'next/link';
import styled from 'styled-components';
import { URL } from '../API/API';

function MovieFetch({ movieData }: any) {
  if (!movieData) return null;

  return (
    <TrendingWrapper>
      {movieData.map((movieItem: any) => (
        <MovieItemWrapper key={movieItem.id}>
          <div>
            <MovieImage src={`${URL.PostPath}/${movieItem.poster_path}`} />
          </div>
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
  border-radius: 1px;
  margin-top: 20px;
  :hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

export const MovieItemWrapper = styled.div`
  cursor: pointer;
  margin-right: 7px;
`;
