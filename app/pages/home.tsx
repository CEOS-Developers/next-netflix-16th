import styles from "../styles/Home.module.css";
import Navigator from "../component/navigation/footer";
import styled from "styled-components";
import Link from "next/link";

import api from "../asset/api";
import apiKey from "../asset/apiKey";
import imgPath from "../asset/imgPath";
import PlayBtn from "../component/playBtn";
import Header from "../component/navigation/header";

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
        <Header />
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
              <Link href={`/detail?id=${item.id}`} key={idx}>
                <ImgWrap radius={50} key={idx}>
                  <Img src={`${imgPath}/${item.backdrop_path}`} key={idx} />
                </ImgWrap>
              </Link>
              // <Link href={`/detail?id=${item.id}`}>
              //     <RoundImg src={`${imgPath}/${item.backdrop_path}`} />
              // </Link>
            ))}
          </MovieList>
        </div>

        {title.map((items: any, idx: number) => (
          <div key={idx} style={{ justifyContent: "start" }}>
            <CategoryText key={idx}> {items.title} </CategoryText>
            <MovieList>
              {items.path.results.map((item: any, idx: number) => (
                <Link href={`/detail?id=${item.id}`} key={idx}>
                  <ImgWrap width={6.44} height={10} key={idx}>
                    <Img
                      margin={-85}
                      src={`${imgPath}/${item.backdrop_path}`}
                      key={idx}
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
  let res = await fetch(`${api}/latest?api_key=${apiKey}`);
  const latest = await res.json();

  res = await fetch(`${api}/now_playing?api_key=${apiKey}`);
  const now_playing = await res.json();

  res = await fetch(`${api}/popular?api_key=${apiKey}`);
  const popular = await res.json();

  res = await fetch(`${api}/top_rated?api_key=${apiKey}`);
  const top_rated = await res.json();

  res = await fetch(`${api}/upcoming?api_key=${apiKey}`);
  const upcoming = await res.json();

  return { props: { latest, now_playing, popular, top_rated, upcoming } };
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
