import MyHead from '../components/MyHead';
import styled from 'styled-components';
import { ServerStyleSheet } from 'styled-components';
import Head from 'next/head';

export default function home({ data, data2, data3 }) {
  const randomPic = Number([Math.floor(Math.random() * data.results.length)]);
  console.log(randomPic);
  return (
    <div>
      <MyHead title="Home" />
      <BoxContainer>
        <BoxBanner>
          <RandomPic
            src={`https://image.tmdb.org/t/p/original/${data.results[randomPic].poster_path}`}
          />
          <BannerTag2>
            <BannerImg src={`/netflix.png`}></BannerImg>
            <BannerTag1>TvShows</BannerTag1>
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
        <div className="movies-name">Preview</div>
        <RowTemplate>
          {data.results.map((movie) => (
            <div key={movie.id}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </div>
          ))}
        </RowTemplate>
        <div className="movies-name">Popular</div>
        <RowTemplate>
          {data3.results.map((movie) => (
            <div key={movie.id}>
              <MovieImg2
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </div>
          ))}
        </RowTemplate>
        <div className="movies-name">Now Playing</div>
        <RowTemplate>
          {data2.results.map((movie) => (
            <div key={movie.id}>
              <MovieImg2
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </div>
          ))}
        </RowTemplate>

        <style jsx>{`
          .movies-section {
            width: 100%;
            padding: 0.5rem 0 0.5rem;

            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .movies-name {
            font-family: 'SF Pro Display';
            font-style: normal;
            font-weight: 700;
            font-size: 20.9212px;
            color: white;
          }

          .movies-wrapper {
            width: 100%;
            display: flex;
            gap: 7px;

            overflow: auto;
          }

          img {
            width: 103px;
            height: 161px;
          }
        `}</style>
      </BoxContainer>
    </div>
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
const LittleImg = styled.img`
  width: 20px;
  height: 20px;
`;
const MovieImg2 = styled.img`
  width: 80px;
  height: 90px;
  margin-left: 10px;
`;
const MovieImg = styled.img`
  width: 80px;
  height: 90px;
  border-radius: 50%;
  margin-left: 10px;
`;
const RowTemplate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BoxBanner = styled.nav`
  display: flex;
  text-align: center;
  flex-direction: row;
  color: white;
  // margin-left: 30px;

  margin-right: 40px;
  position: relative;
`;

const BannerTag1 = styled.div`
  -webkit-box-pack: justify;
  justify-content: space-between;
  background: transparent;

  z-index: 2;
  padding-right: 20px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
`;
const BannerTag2 = styled.div`
  position: absolute;
  top: 5%;
  left: 3%;
  display: flex;
  flex-direction: row;
`;

const BannerImg = styled.img`
  margin-left: 3px;
  margin-right: 80px;
  width: 40px;
  height: 50px;
`;

const BannerButton = styled.button`
  //position: absolute;
  width: 110.62px;
  height: 45px;
  left: 137px;
  top: 428px;
  display: flex;
  flex-direction: row;
  background: #c4c4c4;
  border-radius: 5.625px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
`;
const BoxMid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RandomPic = styled.img`
  width: 400px;
  justify-content: center;
  align-items: center;
  fill: Linear Gradient rgba(0, 0, 0, 0.45) 0% rgba(0, 0, 0, 0) 87.26% #000000
    100%;
`;

const BoxContainer = styled.div`
  //border: 3px solid;
  //padding: 30px;
  width: 380;
  height: 500;
  //border-color: red;
  background-color: black;
  width: 400px;
  height: 1400px;
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: 610px;
`;

//BoxContainer부터해서 다 적용이 안된다 흑흑..일단 global-style에서 제외시킬 수 있으면 제외시키고 안되면 그냥 styled-components로 통일시켜야될것같당 화이튕!!
