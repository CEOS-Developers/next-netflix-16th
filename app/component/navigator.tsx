import styles from '../styles/Home.module.css'
import styled from "styled-components";

import navi1 from '../asset/navigator/navi1.png';
import navi2 from '../asset/navigator/navi2.png';
import navi3 from '../asset/navigator/navi3.png';
import navi4 from '../asset/navigator/navi4.png';
import navi5 from '../asset/navigator/navi5.png';
import Link from "next/link";

const naviList = [
  {id:0, src: navi1.src, text: "Home", link: "/home"},
  {id:1, src: navi2.src, text: "Search", link: "/search"},
  {id:2, src: navi3.src, text: "Coming Soon", link: "/home"},
  {id:3, src: navi4.src, text: "Downloads", link: "/home"},
  {id:4, src: navi5.src, text: "More", link: "/detail"}
]

const Navigator = () => {
  return (
    <Container>
      <>
        {naviList.map((item, idx)=> (
          <NaviContainer key={idx}>
            <Link href={item.link}>
              <NaviIcon src={item.src}/>
              <NaviText> {item.text} </NaviText>
            </Link>
          </NaviContainer>
          ))
        }
      </>
    </Container>
  )
}

export default Navigator;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  height: 5rem;
  background-color: #121212;
  
`
const NaviContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5rem;
  text-align: center;
  padding: 1rem;
`

const NaviIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`
const NaviText = styled.div`
  font-size: 0.6rem;
  margin-top: 0.2rem;
`
