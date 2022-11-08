import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import SearchItem from "../component/searchItem";
import Image from "next/image";
import search from "../asset/icons/searchIcon.svg"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Wrap>
          <ImgWrap>
            {/* <img src="/search.png" alt="search" /> */}
            <Image
              src={search}
              alt="search"
              width={15}
              height={15}
            />
          </ImgWrap>
          <Input type="text" placeholder="Search for movies" />
          {/* <ImgWrap>
            <img src="/search.png" alt="search" />
          </ImgWrap> */}
        </Wrap>

        <div>
          <Title>Top Searches</Title>
          <SearchItem />
          <SearchItem />
          <SearchItem />
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
