import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import SearchItem from "../component/searchItem";
import Image from "next/image";
import search from "../asset/img/icons/searchIcon.svg";
import close from "../asset/img/icons/close.svg";
import api from "../asset/api";
import apiKey from "../asset/apiKey";
import { useEffect, useState } from "react";
import useInput from "../component/hooks/useInput";
import Link from "next/link";

// async function getData() {
//   const movieItems = await fetch(`${api}/movie/now_playing?api_key=${apiKey}`);
//   console.log(movieItems.json());

//    return movieItems.json();
// }

export default function Search({ data }: any) {
  const [info, setInfo] = useState([] as any);
  const { text, handleChange, resetText } = useInput("");

  // const data = getData();
  console.log(data);

  useEffect(() => {
    fetch(`${api}/movie/now_playing?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
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
          <Input
            value={text}
            onChange={handleChange}
            placeholder="Search for movies"
          />
          <ImgWrap onClick={resetText}>
            <Image src={close} alt="close" />
          </ImgWrap>
        </Wrap>

        <div>
          <Title>Top Searches</Title>
          {info
            .filter((i: any) =>
              i.title.toLowerCase().includes(text.toLowerCase())
            )
            .map((movie: any) => (
              <Link
                href={{
                  pathname: "/detail",
                  query: { id: movie.id },
                }}
              >
                <SearchItem name={movie.title} imgSrc={movie.backdrop_path} />
              </Link>
            ))}
        </div>

        <Navigator />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${api}/movie/now_playing?api_key=${apiKey}`);
  const data = await res.json();

  return { props: { data: data } };
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
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
