import styled from 'styled-components';

const Navigation = () => (
  <Wrapper>
    <Logo src="/images/logo.svg" />
    <NavItem>TV Shows</NavItem>
    <NavItem>Movies</NavItem>
    <NavItem>My List</NavItem>
  </Wrapper>
);

export default Navigation;

const Wrapper = styled.nav`
  position: absolute;
  top: 0;

  z-index: 1;

  margin: 24px 16px 24px 16px;

  width: 338px;
  height: 57px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 57px;
  height: 57px;

  cursor: pointer;
`;

const NavItem = styled.div`
  line-height: 30.45px;
  font-size: 17.2px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
`;
