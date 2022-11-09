import { IPoster } from '../../Interface/interface';
import styled from 'styled-components';
import { URL } from '../API/API';
import Netflix from '../assets/netflix.png';
import Image from 'next/image';

function Poster({ randomMovieArray }: IPoster) {
  const number = Math.floor(Math.random() * 80);
  const randomMovie = randomMovieArray[number];

  return (
    <>
      <PosterImage src={`${URL.PostPath}/${randomMovie.poster_path}`} />
      <NetflixImage>
        <Image
          src={Netflix}
          alt="Picture of the author"
          width={57}
          height={57}
        />
        <Menu>TV shows</Menu>
        <Menu>Movies</Menu>
        <Menu>My List</Menu>
      </NetflixImage>
    </>
  );
}

export default Poster;

const PosterImage = styled.img`
  width: 375px;
  object-fit: cover;
`;

const NetflixImage = styled.div`
  position: relative;
  bottom: 550px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: transparent;
`;

const Menu = styled.span`
  text-align: center;
  line-height: 57px;
  margin-right: 20px;
`;
