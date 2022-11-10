import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import Link from "next/link";

import logo from "../asset/img/home/logo.png";
import movEx from "../asset/img/movEx.png";
import info1 from "../asset/img/home/info1.svg";
import info2 from "../asset/img/home/info2.svg";
import info3 from "../asset/img/home/info3.svg";

import api from "../asset/api";
import apiKey from "../asset/apiKey";
import imgPath from "../asset/imgPath";

export default function Home( { latest, now_playing, popular, top_rated, upcoming } : any) {

  const title = [
    {"title": "Now Playing", "path": now_playing},
    {"title": "Top Rated", "path":top_rated},
    {"title": "Popular", "path": popular},
    {"title": "Upcoming", "path": upcoming},
  ]

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header>
          <Logo src={logo.src} />
          <HeaderText> TV shows </HeaderText>
          <HeaderText> Movies </HeaderText>
          <HeaderText> My List </HeaderText>
        </Header>
        <MainImg src={movEx.src} />

        <InfoBox>
          <img src={info1.src} />
          <img src={info2.src} />
          <img src={info3.src} />
        </InfoBox>

        <div style={{ justifyContent: "start" }}>
          <CategoryText> Previews </CategoryText>
          <MovieList>
            {upcoming.results.map((item : any, idx : number) => (
              <Link href={`/detail?id=${item.id}`}>
                  <RoundImg src={`${imgPath}/${item.backdrop_path}`} />
              </Link>
            ))}
          </MovieList>
        </div>

        {title.map((items) => (
          <div style={{ justifyContent: "start" }}>
            <CategoryText> {items.title} </CategoryText>
            <MovieList>
            {items.path.results.map((item : any, idx : number) => (
              <Link href={`/detail?id=${item.id}`}>
                <div style={{ width: "6.5rem", height: "10rem", marginRight: "0.5rem", overflow: "hidden"}}>
                  <SquareImg src={`${imgPath}/${item.backdrop_path}`} />
                </div>
              </Link>
            ))}
            </MovieList>
          </div>
        ))}

        <div style={{ height: "5rem" }} />

        <Navigator />
      </main>
    </div>
  );
}

export async function getServerSideProps() {

  let res = await fetch(`${api}/movie/latest?api_key=${apiKey}`)
  const latest = await res.json()
 
  res = await fetch(`${api}/movie/now_playing?api_key=${apiKey}`)
  const now_playing = await res.json()

  res = await fetch(`${api}/movie/popular?api_key=${apiKey}`)
  const popular = await res.json()

  res = await fetch(`${api}/movie/top_rated?api_key=${apiKey}`)
  const top_rated = await res.json()

  res = await fetch(`${api}/movie/upcoming?api_key=${apiKey}`)
  const upcoming = await res.json()

  return { props: { latest, now_playing, popular, top_rated, upcoming } }
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 5rem;
  background-color: transparent;
  z-index: 99;
`;
const Logo = styled.img`
  height: 3.5rem;
  width: 3.5rem;
`;
const HeaderText = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;
const MainImg = styled.img`
  width: 400px;
  margin-top: -5rem;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 2rem;
`;

const CategoryText = styled.div`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
  font-family: "SF Pro Display";
  font-weight: 700;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  overflow-y: auto;
`;

const RoundImg = styled.img`
  width: 7rem;
  height: 7rem;
  margin-left: 0.5rem;
  border-radius: 50rem;
`;
const SquareImg = styled.img`
  height: 100%;
  margin-left: -85%;
`;
