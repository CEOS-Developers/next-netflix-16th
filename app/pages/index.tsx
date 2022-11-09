import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import netflix from "../asset/netflix1.gif";
import styled from "styled-components";

export default function Home() {

  useEffect(() => {
    setTimeout(function(){
      location.href='home';
    }, 3600)
  });

  return (
    <Container>
      <GIF src={netflix.src}/>
    </Container>
  );
}

const Container = styled.div`
  display: relative;
`
const GIF = styled.img`
  position: absolute;
  top: 20%;
  width: 100%;
`
