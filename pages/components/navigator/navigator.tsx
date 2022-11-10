import Link from 'next/link';
import styled from 'styled-components';
import Home from '../assets/home.png';
import Search from '../assets/search.png';
import SelectSearch from '../assets/selectSearch.png';
import SelectHome from '../assets/selectHome.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ComingSoon from '../assets/commingsoon.png';
import More from '../assets/more.png';
import Download from '../assets/download.png';
import NavigatorItem from './NavigatorItem';

function Navigator() {
  const router = useRouter();

  const pathArray = [
    {
      id: 1,
      path: '/main',
      notSelected: Home,
      Selected: SelectHome,
      name: 'Home',
    },
    {
      id: 2,
      path: '/search',
      notSelected: Search,
      Selected: SelectSearch,
      name: 'Search',
    },
    {
      id: 3,
      path: '/comingsoon',
      notSelected: ComingSoon,
      Selected: ComingSoon,
      name: 'Coming Soon',
    },
    {
      id: 4,
      path: '/download',
      notSelected: Download,
      Selected: Download,
      name: 'Download',
    },
    {
      id: 5,
      path: '/more',
      notSelected: More,
      Selected: More,
      name: 'More',
    },
  ];

  return (
    <NavigatorWrapper>
      {pathArray.map((item) => {
        const selected = router.pathname === item.path;
        return (
          <>
            {item.id === 1 || item.id === 2 ? (
              <Link
                href={`${item.path}`}
                key={`${item.id}`}
                style={{ textDecoration: 'none' }}
              >
                <NavigatorItem item={item} selected={selected} />
              </Link>
            ) : (
              <NavigatorItem item={item} selected={selected} />
            )}
          </>
        );
      })}
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
