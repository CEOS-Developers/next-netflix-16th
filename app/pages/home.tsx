import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";
import styled from "styled-components";
import logo from "../asset/home/logo.png"
import movEx from "../asset/movEx.png"

const title = ['Now Playing', 'Top Rated', 'Popular'];
const picture = [movEx, movEx, movEx, movEx, movEx, movEx, movEx, movEx];

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

        <CategoryBox>
          <CategoryText> Previews </CategoryText>
            <MovieList>
              {picture.map((pic)=>(
                <RoundImg src={pic.src}/>
                ))
              }
            </MovieList>
        </CategoryBox>


        {title.map((item)=>(
          <CategoryBox>
            <CategoryText> {item} </CategoryText>
            <MovieList>
              {picture.map((pic)=>(
                <SquareImg src={pic.src}/>
                ))
              }
            </MovieList>
          </CategoryBox>
        ))}

        <div style={{height: "5rem"}}/>
        
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

const CategoryBox = styled.div`
  flex-direction: column;
  align-items: start;
`

const CategoryText = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`
const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
`

const RoundImg = styled.img`
  width: 7rem;
  height: 7rem;
  margin-left: 0.5rem;
  border-radius: 50rem;
`
const SquareImg = styled.img`
  width: 6.5rem;
  height: 10rem;
  margin-left: 0.5rem;
`
