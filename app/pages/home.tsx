import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import logo from "../asset/home/logo.png"
import movEx from "../asset/movEx.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header>
          <Logo src={logo.src}/>
          <HeaderText> TV shows </HeaderText>
          <HeaderText> Movies </HeaderText>
          <HeaderText> My List </HeaderText>
        </Header>
        <MainImg src={movEx.src}/>
        <Navigator/>
      </main>
      
    </div>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 5rem;
  background-color: transparent;
  z-index:99;
`
const Logo = styled.img`
  height: 3.5rem;
  width: 3.5rem;
`
const HeaderText = styled.div`
  font-size: 1rem;
`
const MainImg = styled.img`
  width: 100%;
  margin-top: -5rem;
`
