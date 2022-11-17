import styles from "../styles/Home.module.css";
import useInput from "../component/hooks/useInput";
import Navigator from "../component/navigation/footer";
import styled from "styled-components";
import SearchItem from "../component/search/searchItem";
import Image from "next/image";
import Link from "next/link";

import { api } from "../asset/api-info";
import { apiKey } from "../asset/api-info";
import { useEffect, useState } from "react";

export default function Search({ data }: any) {
  const { text, handleChange, resetText } = useInput("");
  const [movieData, setMovie] = useState(data.results);
  let searchRes, searchDt;

  useEffect(() => {
    async function searchData() {
      searchRes = await fetch(
        `${api}/search/movie?api_key=${apiKey}&query=${text}`
      );
      searchDt = await searchRes.json();
      setMovie(searchDt.results);
    }
    if (text != "") searchData();
  }, [text]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchBar>
          <ImgWrap>
            <Image
              src="/img/icons/searchIcon.svg"
              alt="search"
              width={19}
              height={19}
            />
          </ImgWrap>
          <Input
            value={text}
            onChange={handleChange}
            placeholder="Search for a show, movie, genre, e.t.c"
          />
          <ImgWrap onClick={resetText}>
            <Image
              src="/img/icons/close.svg"
              alt="close"
              width={19}
              height={19}
            />
          </ImgWrap>
        </SearchBar>

        <ListWrap>
          <Title>Top Searches</Title>
          {movieData
            .filter((i: any) =>
              i.title.toLowerCase().includes(text.toLowerCase())
            )
            .map((movie: any, idx: number) =>
              movie.backdrop_path === null ? (
                <></>
              ) : (
                <Link
                  href={{
                    pathname: `/detail/${movie.id}`,
                  }}
                  key={`link_${idx}`}
                >
                  <SearchItem
                    name={movie.title}
                    imgSrc={movie.backdrop_path}
                    key={`searchItem_${idx}`}
                  />
                </Link>
              )
            )}
        </ListWrap>
      </main>
      <Navigator />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${api}/movie/popular?api_key=${apiKey}`);
  const data = await res.json();

  return { props: { data: data } };
};

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(66, 66, 66);
  width: 100%;
  height: 52px;
  margin: 44px 0 15px 0;
`;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  font-size: 15px;
  border: none;
  background: transparent;
  color: #fff;
  width: 270px;
  height: 31px;
  margin: 0 20px;
  outline: none; // 인풋 포커스 했을때 border 안생기게
`;

const ListWrap = styled.div`
  overflow-y: auto;
  height: calc(100vh - 11rem);
`;
const Title = styled.h3`
  font-size: 26.7482px;
  font-weight: 700;
  text-align: left;
  margin: 13px 0;
`;
