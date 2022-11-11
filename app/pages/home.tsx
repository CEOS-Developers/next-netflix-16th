import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import Link from "next/link";

import api from "../asset/api";
import apiKey from "../asset/apiKey";
import imgPath from "../asset/imgPath";
import PlayBtn from "../component/playBtn";

interface ImgShape {
  width?: number;
  height?: number;
  radius?: number;
}

export default function Home({
  latest,
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

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header>
          <Logo src="/img/home/logo.png" />
          <HeaderText> TV shows </HeaderText>
          <HeaderText> Movies </HeaderText>
          <HeaderText> My List </HeaderText>
        </Header>
        <MainImg src="https://image.tmdb.org/t/p/original/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg" />

        <InfoBox>
          <img src="/img/home/info1.svg" />
          <PlayBtn width={110} />
          <img src="/img/home/info3.svg" />
        </InfoBox>

        <div style={{ justifyContent: "start", marginBottom: "2rem" }}>
          <CategoryText fontsize={27}> Previews </CategoryText>
          <MovieList>
            {upcoming.results.map((item: any, idx: number) => (
              <Link href={`/detail?id=${item.id}`}>
                <ImgWrap radius={50}>
                  <Img src={`${imgPath}/${item.backdrop_path}`} />
                </ImgWrap>
              </Link>
              // <Link href={`/detail?id=${item.id}`}>
              //     <RoundImg src={`${imgPath}/${item.backdrop_path}`} />
              // </Link>
            ))}
          </MovieList>
        </div>

        {title.map((items) => (
          <div style={{ justifyContent: "start" }}>
            <CategoryText> {items.title} </CategoryText>
            <MovieList>
              {items.path.results.map((item: any, idx: number) => (
                <Link href={`/detail?id=${item.id}`}>
                  <ImgWrap width={6.44} height={10}>
                    <Img
                      margin={-85}
                      src={`${imgPath}/${item.backdrop_path}`}
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
  let res = await fetch(`${api}/movie/latest?api_key=${apiKey}`);
  const latest = await res.json();

  res = await fetch(`${api}/movie/now_playing?api_key=${apiKey}`);
  const now_playing = await res.json();

  res = await fetch(`${api}/movie/popular?api_key=${apiKey}`);
  const popular = await res.json();

  res = await fetch(`${api}/movie/top_rated?api_key=${apiKey}`);
  const top_rated = await res.json();

  res = await fetch(`${api}/movie/upcoming?api_key=${apiKey}`);
  const upcoming = await res.json();

  return { props: { latest, now_playing, popular, top_rated, upcoming } };
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  height: 5rem;
  z-index: 99;
  padding: 1rem 1rem 0 0;
`;
const Logo = styled.img`
  height: 3.5rem;
  width: 3.5rem;
`;
const HeaderText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
`;
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

const CategoryText = styled.div<{ fontsize?: number }>`
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
