import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faPlay,
  faArrowDown,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  return (
    <Nav>
      <Container>
        <Link href="/home">
          <NavItem current={router.pathname === '/home'}>
            <FontAwesomeIcon icon={faHouse} size={'1x'} />
            <NavText>Home</NavText>
          </NavItem>
        </Link>
        <Link href="/search">
          <NavItem current={router.pathname === '/search'}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={'1x'} />
            <NavText>Search</NavText>
          </NavItem>
        </Link>
        <Link href="/comming-soon">
          <NavItem current={router.pathname === '/comming-soon'}>
            <FontAwesomeIcon icon={faPlay} size={'1x'} />
            <NavText>Comming Soon</NavText>
          </NavItem>
        </Link>
        <Link href="/downloads">
          <NavItem current={router.pathname === '/downloads'}>
            <FontAwesomeIcon icon={faArrowDown} size={'1x'} />
            <NavText>Downloads</NavText>
          </NavItem>
        </Link>
        <Link href="/menu">
          <NavItem current={router.pathname === '/menu'}>
            <FontAwesomeIcon icon={faBars} size={'1x'} />
            <NavText>More</NavText>
          </NavItem>
        </Link>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 375px;
  height: 48px;

  position: fixed;
  bottom: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  background: #121212;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.current && 'white'};
`;

const NavText = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 500;
  font-size: 8.2px;
`;

export default NavBar;
