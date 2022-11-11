import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <Logo src="/img/home/logo.png" />
      <HeaderText href="#"> TV shows </HeaderText>
      <HeaderText href="#"> Movies </HeaderText>
      <HeaderText href="#"> My List </HeaderText>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  height: 5rem;
  z-index: 99;
  padding: 1rem 1rem 0 0;
`;
const Logo = styled.img`
  height: 3.5rem;
  width: 3.5rem;
`;
const HeaderText = styled.a`
  font-size: 1.1rem;
  font-weight: 400;
`;
