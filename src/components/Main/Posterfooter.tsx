import PlayButton from '../Share/PlayButton';
import List from '../assets/list.png';
import Info from '../assets/info.png';
import Image from 'next/image';
import styled from 'styled-components';

function Postfooter() {
  return (
    <Footer>
      <IconWrapper>
        <Image src={List} alt="list" width={20} height={20} />
        <Menu>My lists</Menu>
      </IconWrapper>
      <PlayButton width="110px" />
      <IconWrapper>
        <Image src={Info} alt="info" width={20} height={20} />
        <Menu>info</Menu>
      </IconWrapper>
    </Footer>
  );
}

export default Postfooter;

const Footer = styled.div`
  display: flex;
  justigy-content: space-between;
  margin: 13px 64px 0 64px;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Menu = styled.span`
  font-size: 13px;
  line-height: 20px;
`;
