import { IPoster } from '../../Interface/interface';
import styled from 'styled-components';
import { URL } from '../API/API';
import Netflix from '../assets/netflix.png';
import Image from 'next/image';
import Postfooter from './Posterfooter';

function Poster({ randomMovieArray }: IPoster) {
  const number = Math.floor(Math.random() * 80);
  const randomMovie = randomMovieArray[number];

  return (
    <>
      <PosterImage src={`${URL.PostPath}/${randomMovie.poster_path}`} />
      <MenuWrapper>
        <Image src={Netflix} alt="Netflix" width={57} height={57} />
        <Menu>TV shows</Menu>
        <Menu>Movies</Menu>
        <Menu>My List</Menu>
      </MenuWrapper>
      <Postfooter />
    </>
  );
}

export default Poster;

const PosterImage = styled.img`
  width: 375px;
  object-fit: cover;
`;

const MenuWrapper = styled.nav`
  position: absolute;
  width: 375px;
  bottom: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: transparent;
`;

const Menu = styled.span`
  text-align: center;
  line-height: 57px;
  margin-right: 20px;
  font-weight: 400;
  font-size: 17px;
`;
