import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedContentState } from '../../states/footerState';
import ComingSoonIcon from '../icons/ComingSoonIcon';
import DownloadsIcon from '../icons/DownloadsIcon';
import HomeIcon from '../icons/HomeIcon';
import MoreIcon from '../icons/More';
import SearchIcon from '../icons/SearchIcon';

const Footer = () => {
  const [selectedIcon, setSelectedIcon] = useRecoilState(selectedContentState);
  const router = useRouter();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedContent = e.currentTarget.name;
    if (selectedContent === 'home' || selectedContent === 'search')
      router.push(`/${selectedContent}`);
  };

  return (
    <Wrapper>
      <ItemWrapper>
        <HomeIcon
          onClick={handleOnClick}
          isSelected={selectedIcon === 'home'}
        />
        <FooterItem isSelected={selectedIcon === 'home'}>Home</FooterItem>
      </ItemWrapper>
      <ItemWrapper>
        <SearchIcon
          onClick={handleOnClick}
          isSelected={selectedIcon === 'search'}
        />
        <FooterItem isSelected={selectedIcon === 'search'}>Search</FooterItem>
      </ItemWrapper>
      <ItemWrapper>
        <ComingSoonIcon
          onClick={handleOnClick}
          isSelected={selectedIcon === 'coming-soon'}
        />
        <FooterItem isSelected={selectedIcon === 'comming-soon'}>
          Coming Soon
        </FooterItem>
      </ItemWrapper>
      <ItemWrapper>
        <DownloadsIcon
          onClick={handleOnClick}
          isSelected={selectedIcon === 'downloads'}
        />
        <FooterItem isSelected={selectedIcon === 'downloads'}>
          Downloads
        </FooterItem>
      </ItemWrapper>
      <ItemWrapper>
        <MoreIcon
          onClick={handleOnClick}
          isSelected={selectedIcon === 'more'}
        />
        <FooterItem isSelected={selectedIcon === 'more'}>More</FooterItem>
      </ItemWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;

  width: 375px;
  height: 53px;

  background-color: #121212;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 320px;

  cursor: pointer;
`;

const FooterImg = styled.img`
  width: 24px;
  height: 24px;
`;

const FooterItem = styled.div<{ isSelected: boolean }>`
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.26px;
  text-align: center;
  color: ${(props) => (props.isSelected ? '#ffffff' : '#8C8787')};

  margin-top: 3px;
`;
