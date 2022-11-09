import { IPoster } from '../../Interface/interface';
import styled from 'styled-components';
import { URL } from '../API/API';

function Poster({ randomMovieArray }: IPoster) {
  const number = Math.floor(Math.random() * 80);
  const randomMovie = randomMovieArray[number];

  return (
    <>
      <PosterImage src={`${URL.PostPath}/${randomMovie.poster_path}`} />
    </>
  );
}

export default Poster;

const PosterImage = styled.img`
  width: 375px;
  object-fit: cover;
`;
