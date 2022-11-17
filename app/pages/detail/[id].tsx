import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import Navigator from "../../component/navigation/footer";

import PlayBtn from "../../component/playBtn";

import { api } from "../../asset/api-info";
import { apiKey } from "../../asset/api-info";
import { imgPath } from "../../asset/api-info";

export default function Detail({ detail }: any) {
  return (
    <div className={styles.container}>
      <Img src={`${imgPath}/${detail.backdrop_path}`} alt="poster" />

      <PlayBtn width={320} />

      <TextWrap>
        <TextTitle>Previews</TextTitle>
        <TextDesc>{detail.overview}</TextDesc>
      </TextWrap>

      <div style={{ height: "5rem" }} />
      <Navigator />
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  const movieId = context.query.id;

  let res = await fetch(`${api}/movie/${movieId}?api_key=${apiKey}`);
  const detail = await res.json();

  return { props: { detail } };
};

const Img = styled.img`
  height: 415px;
  width: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const TextWrap = styled.div`
  width: 100%;
  padding: 50px 10px 0 10px;
`;
const TextTitle = styled.div`
  font-size: 26.75px;
  font-weight: 700;
  padding 0 10px;
  padding-top: 10px;
`;
const TextDesc = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.83);
  padding: 0 30px;
  padding-top: 10px;
`;
