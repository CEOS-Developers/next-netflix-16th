import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import SearchItem from "../component/searchItem";
import Image from "next/image";
import search from "../asset/icons/searchIcon.svg";
import close from "../asset/icons/close.svg";
import api from "../asset/api";
import apiKey from "../asset/apiKey";
import imgPath from "../asset/imgPath";
import { useEffect, useState } from "react";

export default function Home() {
  const [info, setInfo] = useState([] as any);

  useEffect(() => {
    const movie_id = 550;
    // https://developers.themoviedb.org/3/movies/get-movie-images : 영화이미지
    // fetch(`${api}/movie/${movie_id}/images?api_key=${apiKey}`)
    // fetch(`${api}/movie/${movie_id}?api_key=${apiKey}`)
    // fetch(`${api}/movie/latest?api_key=${apiKey}`)

    // 최신 영화 이미지 리스트 나옴. 영화 19개
    // fetch(`${api}/movie/now_playing?api_key=${apiKey}`)

    fetch(`${api}/movie/now_playing?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data.results);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Wrap>
          <ImgWrap>
            <Image src={search} alt="search" />
          </ImgWrap>
          <Input type="text" placeholder="Search for movies" />
          <ImgWrap>
            <Image src={close} alt="close" />
          </ImgWrap>
        </Wrap>

        <div>
          <Title>Top Searches</Title>
          {info.map((movie: any) => (
            <SearchItem name={movie.title} imgSrc={movie.backdrop_path} />
          ))}
        </div>

        <Navigator />
      </main>
    </div>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(66, 66, 66);
  width: 100%;
  height: 52px;
  margin: 44px 0 10px 0;
`;

const ImgWrap = styled.div`
  width: 18px;
  height: 18px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 15px;
`;
const Input = styled.input`
  border: none;
  background: transparent;
  color: #fff;
  width: 280px;
  height: 30px;
  margin: 0 20px;
`;
