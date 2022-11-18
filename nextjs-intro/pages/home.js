import Link from 'next/link';
import MyHead from '../components/MyHead';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faPlus } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';

export default function home({ data, data2, data3 }) {
  const randomPic = Number([Math.floor(Math.random() * data.results.length)]);

  return (
    <>
      <MyHead title="Home" />
      <BoxContainer>
        <BoxBanner>
          <RandomPic
            src={`https://image.tmdb.org/t/p/original/${data.results[randomPic].poster_path}`}
          />
          <Header />
        </BoxBanner>
        <BannerText>#2 in Nigeria Today</BannerText>
        <BoxMid>
          <BannerTag>
            <FontAwesomeIcon icon={faPlus} size={'1x'} />
            MyList
          </BannerTag>
          <BannerButton>
            <LittleImg src={`/play.png`} />
            <Link
              href={`/videos/${data.results[randomPic].id}`}
              key={data.results[randomPic].id}
            >
              PLAY
            </Link>
          </BannerButton>
          <BannerTag>
            <FontAwesomeIcon icon={faCircleExclamation} size={'1x'} />
            More Info
          </BannerTag>
        </BoxMid>
        <TemplateWrapper>
          <TemplateName>Preview</TemplateName>
          <RowTemplate>
            {data.results.map((movie) => (
              <Link
                href={`/movies/${movie.original_title}/${movie.id}`}
                key={movie.id}
              >
                <MovieImg
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </Link>
            ))}
          </RowTemplate>
        </TemplateWrapper>
        <TemplateWrapper>
          <TemplateName>Popular</TemplateName>
          <RowTemplate>
            {data3.results.map((movie) => (
              <Link
                href={`/movies/${movie.original_title}/${movie.id}`}
                key={movie.id}
              >
                <MovieImg2
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </Link>
            ))}
          </RowTemplate>
        </TemplateWrapper>
        <TemplateWrapper>
          <TemplateName>Now Playing</TemplateName>
          <RowTemplate>
            {data2.results.map((movie) => (
              <Link
                href={`/movies/${movie.original_title}/${movie.id}`}
                key={movie.id}
              >
                <MovieImg2
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </Link>
            ))}
          </RowTemplate>
        </TemplateWrapper>
      </BoxContainer>
    </>
  );
}

const API_KEY = process.env.API_KEY;

export async function getServerSideProps() {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    )
  ).json();
  const data2 = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    )
  ).json();
  const data3 = await (
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  ).json();

  return {
    props: {
      data,
      data2,
      data3,
    },
  };
}
const BoxContainer = styled.div`
  width: 375px;
`;

const BoxBanner = styled.nav`
  width: 100%;

  display: flex;
  text-align: center;
  color: white;

  position: relative;
`;

const RandomPic = styled.img`
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

const BannerText = styled.div`
  padding: 1rem;

  font-weight: 700;
  font-size: 13.72px;
  color: white;

  text-align: center;
`;

const BoxMid = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const BannerTag = styled.div`
  color: white;
  font-size: 17.2px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const BannerButton = styled.button`
  width: 7rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #c4c4c4;
  border-radius: 5.625px;
`;

const TemplateWrapper = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TemplateName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 26.75px;
  color: white;
`;

const RowTemplate = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  gap: 0.5rem;
`;

const MovieImg = styled.img`
  width: 102px;
  height: 102px;

  border-radius: 50%;
  object-fit: cover;
`;

const MovieImg2 = styled.img`
  width: 103px;
  height: 177px;
`;

const LittleImg = styled.img`
  width: 20px;
  height: 20px;
`;
