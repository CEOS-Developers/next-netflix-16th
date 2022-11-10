import Link from 'next/link';
import styled from 'styled-components';
import Home from '../assets/home.png';
import Search from '../assets/search.png';
import SelectSearch from '../assets/selectSearch.png';
import SelectHome from '../assets/selectHome.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';

function Navigator() {
  const router = useRouter();

 
      <Link href={`/search`} style={{ textDecoration: 'none' }}>
              <Image
                src={router.pathname === '/search' ? SelectSearch : Search}
                alt=""
                width={20}
                height={17}
              />
              <Name>search</Name>
          </Link>
    </NavigatorWrapper>
  );
}

export default Navigator;

const NavigatorWrapper = styled.div`
  display: flex;
  flex-direction: columns;
  position: sticky;
  background-color: #121212;
  bottom: 0;
`;

const MenuWrapper = styled.div<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? 'white' : 'grey')};
  text-decoration: none;
  text-decortion-line : none;
`;

const Name = styled.div`
  text-decoration: none;
  text-decortion-line : none;
  color: white;
`;
