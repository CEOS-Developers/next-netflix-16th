import MyHead from '../components/MyHead';
import styled from 'styled-components';

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
            <BannerImg>Logo</BannerImg>
            <BannerTag1>TvShows</BannerTag1>
            <BannerTag1>Movies</BannerTag1>
            <BannerTag1>My List</BannerTag1>
          </BannerTag2>
        </BoxBanner>
        <BoxMid>
          <BannerTag1>+</BannerTag1>
          <BannerButton>PLAY</BannerButton>
          <BannerTag1>More Info</BannerTag1>
        </BoxMid>
      </BoxContainer>
      <div className="container">
        <div className="movies-section">
          <div className="movies-name">Preview</div>
          <div className="movies-wrapper">
            {data.results.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="movies-section">
          <div className="movies-name">Popular</div>
          <div className="movies-wrapper">
            {data3.results.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="movies-section">
          <div className="movies-name">Now Playing</div>
          <div className="movies-wrapper">
            {data2.results.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </div>
  );
}

export async function getStaticProps() {
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
  flex-direction: row;
  position: relative;
`;
const BannerTag2 = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  display: flex;
  flex-direction: row;
`;

const BannerImg = styled.div`
  margin-left: 3px;
  margin-right: 80px;
`;

const BannerButton = styled.button``;
const BoxMid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RandomPic = styled.img`
  width: 4px;
  justify-content: center;
  align-items: center;
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
  margin-left: 500px;
`;

//BoxContainer부터해서 다 적용이 안된다 흑흑..일단 global-style에서 제외시킬 수 있으면 제외시키고 안되면 그냥 styled-components로 통일시켜야될것같당 화이튕!!
