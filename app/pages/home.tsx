import styles from "../styles/Home.module.css";
import Navigator from "../component/navigation/footer";
import styled from "styled-components";
import Link from "next/link";

import { api } from "../asset/api-info";
import { apiKey } from "../asset/api-info";
import { imgPath } from "../asset/api-info";
import PlayBtn from "../component/playBtn";
import Header from "../component/navigation/header";

interface ImgShape {
  width?: number;
  height?: number;
  radius?: number;
}

export default function Home({
  now_playing,
  popular,
  top_rated,
  upcoming,
}: any) {
  const title = [
    { title: "Now Playing", path: now_playing },
    { title: "Top Rated", path: top_rated },
    { title: "Popular", path: popular },
    { title: "Upcoming", path: upcoming },
  ];

  const randomId = Math.floor(Math.random() * 10);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Link href={{ pathname: `/detail/${upcoming.results[randomId].id}` }}>
          <MainImg
            src={`${imgPath}/${upcoming.results[randomId].backdrop_path}`}
          />
        </Link>
        <InfoBox>
          <img src="/img/home/info1.svg" />
          <PlayBtn width={110} />
          <img src="/img/home/info3.svg" />
        </InfoBox>

        <div style={{ justifyContent: "start", marginBottom: "2rem" }}>
          <CategoryText fontsize={27}> Previews </CategoryText>
          <MovieList>
            {upcoming.results.map((item: any, idx: number) => (
              <Link
                href={{ pathname: `/detail/${item.id}` }}
                key={`PreLink_${idx}`}
              >
                <ImgWrap radius={50} key={`preImgWrap_${idx}`}>
                  <Img
                    src={`${imgPath}/${item.backdrop_path}`}
                    key={`preImg_${idx}`}
                  />
                </ImgWrap>
              </Link>
            ))}
          </MovieList>
        </div>

        {title.map((items: any, idx: number) => (
          <div key={`div_${idx}`} style={{ justifyContent: "start" }}>
            <CategoryText key={`catgText_${idx}`}> {items.title} </CategoryText>
            <MovieList>
              {items.path.results.map((item: any, idx: number) => (
                <Link
                  href={{ pathname: `/detail/${item.id}` }}
                  key={`catgLink_${idx}`}
                >
                  <ImgWrap width={6.44} height={10} key={`catgImgWrap_${idx}`}>
                    <Img
                      margin={-85}
                      src={`${imgPath}/${item.backdrop_path}`}
                      key={`catgImg_${idx}`}
                    />
                  </ImgWrap>
                </Link>
              ))}
            </MovieList>
          </div>
        ))}
        <div style={{ height: "5rem" }} />
      </main>
      <Navigator />
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch(`${api}/movie/now_playing?api_key=${apiKey}`);
  const now_playing = await res.json();

  res = await fetch(`${api}/movie/popular?api_key=${apiKey}`);
  const popular = await res.json();

  res = await fetch(`${api}/movie/top_rated?api_key=${apiKey}`);
  const top_rated = await res.json();

  res = await fetch(`${api}/movie/upcoming?api_key=${apiKey}`);
  const upcoming = await res.json();

  return { props: { now_playing, popular, top_rated, upcoming } };
}

const MainImg = styled.img`
  width: 400px;
  height: 460px;
  object-fit: cover;
  margin-top: -5rem;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  padding: 1.5rem 0;
`;

const CategoryText = styled.h3<{ fontsize?: number }>`
  font-size: ${(props) => props.fontsize || 21}px;
  margin: 1.5rem 0rem 0.5rem 1rem;
  font-family: "SF Pro Display";
  font-weight: 900;
`;

const MovieList = styled.div`
  display: flex;
  width: 400px;
  overflow-y: auto;
`;

const ImgWrap = styled.div<ImgShape>`
  width: ${(props) => props.width || 6.5}rem;
  height: ${(props) => props.height || 6.5}rem;
  border-radius: ${(props) => props.radius || 0}rem;
  margin-right: 0.5rem;
  overflow: hidden;
`;
const Img = styled.img<{ margin?: number }>`
  height: 100%;
  margin-left: ${(props) => props.margin || -35}%;
`;
