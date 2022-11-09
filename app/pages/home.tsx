import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";

import logo from "../asset/home/logo.png";
import movEx from "../asset/movEx.png";
import info1 from "../asset/home/info1.svg";
import info2 from "../asset/home/info2.svg";
import info3 from "../asset/home/info3.svg";

import api from '../asset/api'
import apiKey from '../asset/apiKey'
import imgPath from '../asset/imgPath'

const title = ["Now Playing", "Top Rated", "Popular"];

export default function Home() {
  const [info, setInfo] = useState([] as any);

  useEffect(() => {
    fetch(`${api}/movie/now_playing?api_key=${apiKey}`)
      .then(res=>res.json())
      .then(data => {
        console.log(data);
        setInfo(data.results);
      })
  },[])

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
            {info.map((item : any) => (
              <Link href={{
                pathname: '/detail',
                query: {id:item.id}
              }}>
                <RoundImg src={`${imgPath}/${item.backdrop_path}`} />
              </Link>
            ))}
          </MovieList>
        </div>

        {title.map((title, count) => (
          <div style={{ justifyContent: "start" }}>
            <CategoryText> {title} </CategoryText>
            <MovieList>
            {info.map((item : any, idx : number) => (
              count*5+5<=idx && count*5+10 >idx?
              <Link href={`/detail?id=${item.id}`}>
                <SquareImg src={`${imgPath}/${item.backdrop_path}`} />
              </Link>
              : <></>
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
`;
const MainImg = styled.img`
  width: 100%;
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
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;
const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const RoundImg = styled.img`
  width: 7rem;
  height: 7rem;
  margin-left: 0.5rem;
  border-radius: 50rem;
`;
const SquareImg = styled.img`
  width: 6.5rem;
  height: 10rem;
  margin-left: 0.5rem;
`;
