import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";

import api from '../asset/api'
import apiKey from '../asset/apiKey'
import imgPath from '../asset/imgPath'
import Image from "next/image";
import play from "../asset/img/icons/play.svg";

interface imgSize {
  width?: string;
  height?: string;
}

export default function Detail({detail}:any) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ImgWrap>
          <img src={`${imgPath}/${detail.backdrop_path}`} alt="poster" style={{ height: "30rem", marginLeft:"-55%" }} />
        </ImgWrap>
        <PlayBtn>
          <Image src={play} alt="playbtn" />
          <div>Play</div>
        </PlayBtn>
        <TextWrap>
          <TextTitle>Previews</TextTitle>
          <TextDesc>
            {detail.overview}
          </TextDesc>
        </TextWrap>
        <div style={{ height: "5rem" }} />
      </main>
      <Navigator />
    </div>
  );
}

export const getServerSideProps = async(context:any)=> {
  const movieId = context.query.id;

  let res = await fetch(`${api}/movie/${movieId}?api_key=${apiKey}`)
  const detail = await res.json()

  return { props: { detail } }
}

const ImgWrap = styled.div`
  width: 400px;
  height: 30rem;
  overflow: hidden;
`;

const PlayBtn = styled.button`
  color: #000;
  width: 320px;
  height: 45px;
  border: none;
  border-radius: 0.4rem;
  background: rgb(196, 196, 196);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  font-size: 18px;
  font-weight: 600;
`;

const TextWrap = styled.div`
  width: 100%;
  padding: 50px 10px 0 10px;
`;
const TextTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 10px;
`;
const TextDesc = styled.div`
  font-size: 11px;
  padding: 10px 30px 0 30px;
`;
