import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import SearchItem from "../component/searchItem";
import Image from "next/image";
import search from "../asset/img/icons/searchIcon.svg";
import close from "../asset/img/icons/close.svg";
import api from "../asset/api";
import apiKey from "../asset/apiKey";
import useInput from "../component/hooks/useInput";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(`${api}/movie/popular?api_key=${apiKey}`);
  const data = await res.json();

  return { props: { data: data } };
}

export default function Search({ data }: any) {
  const { text, handleChange, resetText } = useInput("");

  const movieData = data.results;

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
          {movieData
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
