import { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  useEffect(() => {
    setTimeout(function () {
      location.href = "home";
    }, 2010);
  });

  return (
    <Container>
      <GIF src="/img/netflix2.gif" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GIF = styled.img`
  width: 60%;
`;
