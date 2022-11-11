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

export default function NavBar() {
  const router = useRouter();
  return (
    <Nav>
      <Container>
        <Link href="/home">
          <div
            className={
              router.pathname === '/home' ? 'nav-link active' : 'nav-link'
            }
          >
            <FontAwesomeIcon icon={faHouse} size={'1x'} />
            <div className="nav-text">Home</div>
          </div>
        </Link>
        <Link href="/search">
          <div
            className={
              router.pathname === '/search' ? 'nav-link active' : 'nav-link'
            }
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size={'1x'} />
            <div className="nav-text">Search</div>
          </div>
        </Link>
        <Link href="/comming-soon">
          <div
            className={
              router.pathname === '/comming-soon'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            <FontAwesomeIcon icon={faPlay} size={'1x'} />
            <div className="nav-text">Comming Soon</div>
          </div>
        </Link>
        <Link href="/downloads">
          <div
            className={
              router.pathname === '/downloads' ? 'nav-link active' : 'nav-link'
            }
          >
            <FontAwesomeIcon icon={faArrowDown} size={'1x'} />
            <div className="nav-text">Downloads</div>
          </div>
        </Link>
        <Link href="/menu">
          <div
            className={
              router.pathname === '/menu' ? 'nav-link active' : 'nav-link'
            }
          >
            <FontAwesomeIcon icon={faBars} size={'1x'} />
            <div className="nav-text">More</div>
          </div>
        </Link>
      </Container>

      <style jsx>{`
        .active {
          color: white;
        }
        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        .nav-text {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 500;
          font-size: 8.2px;
        }
      `}</style>
    </Nav>
  );
}

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
