import styled from 'styled-components';
import Logo from '../../../public/images/Netflix-logo.png';
import Image from 'next/image';

const TopNavbar = styled.nav`
  position: absolute;
  margin-top: 10%;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  opacity: 100;
  margin-left: 10px;
  margin-right: 20px;
  z-index: 998;

  a {
    text-align: center;
    color: white;
    height: 54px;
    margin-right: 25px;
    font-weight: 400;
    font-size: 17.1968px;
    cursor: pointer;
    margin-top: 10px;
  }
`;

const Home = styled.div`
  cursor: pointer;
  margin-left: 10px;
  margin-top: 0px;
`;

const TopNav = () => {
  return (
    <TopNavbar>
      <Home>
        <Image src={Logo} alt="netflix logo" width={30} height={40} />
      </Home>
      <a>TV Shows</a>
      <a>Movies</a>
      <a>My List</a>
    </TopNavbar>
  );
};
export default TopNav;
