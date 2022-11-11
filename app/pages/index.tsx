import { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  useEffect(() => {
    setTimeout(function () {
      location.href = "home";
    }, 3400);
  });

  return (
    <Container>
      <GIF src="/img/netflix1.gif" />
    </Container>
  );
}

const Container = styled.div`
  display: relative;
`;
const GIF = styled.img`
  position: absolute;
  top: 20%;
  width: 100%;
`;
