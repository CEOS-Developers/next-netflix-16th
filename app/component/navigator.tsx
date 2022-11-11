import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const naviList = [
  { id: 0, src: "navi1", text: "Home", link: "/home" },
  { id: 1, src: "navi2", text: "Search", link: "/search" },
  { id: 2, src: "navi3", text: "Coming Soon", link: "" },
  { id: 3, src: "navi4", text: "Downloads", link: "" },
  { id: 4, src: "navi5", text: "More", link: "" },
];

const Navigator = () => {
  const pathName = useRouter();

  return (
    <Container>
      <>
        {naviList.map((item, idx) => (
          <NaviContainer key={idx}>
            <Link href={item.link}>
              {pathName.pathname === item.link ? (
                <>
                  <Image
                    src={`/img/navigator/select_${item.src}.svg`}
                    alt="navi"
                    width={18}
                    height={18}
                  />
                  <NaviText color="#fff"> {item.text} </NaviText>
                </>
              ) : (
                <>
                  <Image
                    src={`/img/navigator/${item.src}.svg`}
                    alt="navi"
                    width={18}
                    height={18}
                  />
                  <NaviText> {item.text} </NaviText>
                </>
              )}
            </Link>
          </NaviContainer>
        ))}
      </>
    </Container>
  );
};

export default Navigator;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 4rem;
  background-color: #121212;
  position: fixed;
  bottom: 0;
`;
const NaviContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

const NaviText = styled.div<{ color?: string }>`
  font-size: 0.6rem;
  margin-top: 0.3rem;
  color: ${(props) => props.color || "#878787"};
`;
