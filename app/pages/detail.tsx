import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import api from '../asset/api'
import apiKey from '../asset/apiKey'
import imgPath from '../asset/imgPath'

interface imgSize {
  width?: string;
  height?: string;
}

export default function Detail() {
  const router = useRouter()
  const movieId = router.query.id;
  console.log(movieId);

  const [movie, setMovie] = useState([] as any);

  useEffect(() => {
    fetch(`${api}/movie/${movieId}?api_key=${apiKey}`)
      .then(res=>res.json())
      .then(data => {
        console.log(data);
        setMovie(data);
      })
  },[])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ImgWrap>
          <img src={`${imgPath}/${movie.backdrop_path}`} alt="poster" style={{ width: "100%" }} />
        </ImgWrap>
        <PlayBtn>
          <img
            src="/right-arrow.png"
            alt="arrow"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <div>Play</div>
        </PlayBtn>
        <TextWrap>
          <TextTitle>Previews</TextTitle>
          <TextDesc>
            {movie.overview}
            
            {/* Uta — the most beloved singer in the world. Her voice, which she
            sings with while concealing her true identity, has been described as
            “otherworldly.” She will appear in public for the first time at a
            live concert. As the venue fills with all kinds of Uta fans —
            excited pirates, the Navy watching closely, and the Straw Hats led
            by Luffy who simply came to enjoy her sonorous performance — the
            voice that the whole world has been waiting for is about to resound. */}
          </TextDesc>
        </TextWrap>
        <div style={{ height: "5rem" }} />
      </main>
      <Navigator />
    </div>
  );
}

const ImgWrap = styled.div`
  width: 400px;
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
