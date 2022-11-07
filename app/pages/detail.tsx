import styled from "styled-components";
import styles from "../styles/Home.module.css";

export default function Detail() {
  return (
    <div className={styles.container}>
      {/* <main className={styles.main}>DetailPage</main> */}
      <ImgWrap>
        <Img src="/poster.jpg" alt="poster" />
      </ImgWrap>
      <PlayBtnWrap>
        <PlayBtn>Play</PlayBtn>
      </PlayBtnWrap>
      <TextWrap>
        <TextTitle>Previews</TextTitle>
        <TextDesc>
          Uta — the most beloved singer in the world. Her voice, which she sings
          with while concealing her true identity, has been described as
          “otherworldly.” She will appear in public for the first time at a live
          concert. As the venue fills with all kinds of Uta fans — excited
          pirates, the Navy watching closely, and the Straw Hats led by Luffy
          who simply came to enjoy her sonorous performance — the voice that the
          whole world has been waiting for is about to resound.
        </TextDesc>
      </TextWrap>
    </div>
  );
}

const ImgWrap = styled.div`
  width: 400px;
  height: 415px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

const PlayBtnWrap = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
  padding: 10px;
`;

const PlayBtn = styled.button`
  color: #000;
  background: gray;
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 1rem;
  text-align: center;
`;

const TextWrap = styled.div`
  width: 100%;
  padding: 10px;
`;
const TextTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  padding: 10px;
`;
const TextDesc = styled.div`
  font-size: 12px;
  padding: 10px 40px;
`;
