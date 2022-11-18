import styled from 'styled-components';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderWrapper>
      <Link href={'/home'}>
        <BannerImg src={`/netflix.png`}></BannerImg>
      </Link>
      <Link href={'/tv-shows'}>
        <BannerTag>TV Shows</BannerTag>
      </Link>
      <Link href={'/movies'}>
        <BannerTag>Movies</BannerTag>
      </Link>
      <Link href={'/my-list'}>
        <BannerTag>My List</BannerTag>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 375px;
  padding: 1.5rem;

  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: white;

  position: fixed;
`;

const BannerTag = styled.div`
  color: white;
  font-size: 17.2px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BannerImg = styled.img`
  width: 2.5rem;
`;
