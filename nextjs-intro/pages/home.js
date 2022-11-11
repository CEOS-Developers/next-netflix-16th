import MyHead from '../components/MyHead';
import styled from 'styled-components';
import { ServerStyleSheet } from 'styled-components';
import Head from 'next/head';

export default function home({ data, data2, data3 }) {
  const randomPic = Number([Math.floor(Math.random() * data.results.length)]);
  console.log(randomPic);
  return (
    <>
      <MyHead title="Home" />
      <BoxContainer>
        <BoxBanner>
          <RandomPic
            src={`https://image.tmdb.org/t/p/original/${data.results[randomPic].poster_path}`}
          />
          <BannerTag2>
            <BannerImg src={`/netflix.png`}></BannerImg>
            <BannerTag1>TV Shows</BannerTag1>
            <BannerTag1>Movies</BannerTag1>
            <BannerTag1>My List</BannerTag1>
          </BannerTag2>
        </BoxBanner>
        <BoxMid>
          <BannerTag1>MyList</BannerTag1>
          <BannerButton>
            <LittleImg src={`/play.png`} />
            PLAY
          </BannerButton>
          <BannerTag1>More Info</BannerTag1>
        </BoxMid>
        <TemplateWrapper>
          <TemplateName>Preview</TemplateName>
          <RowTemplate>
            {data.results.map((movie) => (
              <div key={movie.id}>
                <MovieImg
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </div>
            ))}
          </RowTemplate>
        </TemplateWrapper>
        <TemplateWrapper>
          <TemplateName>Popular</TemplateName>
          <RowTemplate>
            {data3.results.map((movie) => (
              <div key={movie.id}>
                <MovieImg2
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </div>
            ))}
          </RowTemplate>
        </TemplateWrapper>
        <TemplateWrapper>
          <TemplateName>Now Playing</TemplateName>
          <RowTemplate>
            {data2.results.map((movie) => (
              <div key={movie.id}>
                <MovieImg2
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </div>
            ))}
          </RowTemplate>
        </TemplateWrapper>
      </BoxContainer>
    </>
  );
}

export async function getServerSideProps() {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
  ).json();
  const data2 = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
  ).json();
  const data3 = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
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

const BannerTag2 = styled.div`
  width: 375px;
  padding: 1.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
`;

const BannerImg = styled.img`
  width: 2.5rem;
`;

const BoxMid = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const BannerTag1 = styled.div`
  color: white;
  font-size: 17.2px;
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
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 26.75px;
  color: white;
`;

const RowTemplate = styled.div`
  display: flex;
  justify-content: center;
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
