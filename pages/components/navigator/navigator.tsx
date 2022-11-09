import Link from 'next/link';
import styled from 'styled-components';

function Navigator() {
  return (
    <NavigatorWrapper>
      <Link href={'/main'}>
        <div>홈</div>
      </Link>
      <Link href={'/search'}>
        <div>검색</div>
      </Link>
    </NavigatorWrapper>
  );
}

export default Navigator;

const NavigatorWrapper = styled.div`
  display: flex;
  flex-direction: columns;
  position: sticky;
  background-color: red;
  bottom: 0;
  padding-bottom: 48px;
`;
