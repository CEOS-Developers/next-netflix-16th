import styled from 'styled-components';
import { RiHome2Line, RiSearchLine } from 'react-icons/ri';
import { HiDownload } from 'react-icons/hi';
import { BsList } from 'react-icons/bs';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { NowState } from '../../../states/states';

const BtmNav = styled.footer`
  width: 400px;
  height: 8vh;
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 998;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Icon = styled.div`
  cursor: pointer;
  color: ${(props) => (props.Isnow == props.id ? 'white' : '#8c8787')};
  // color : grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  a {
    font-size: 10px;
  }
  :active {
    color: white;
  }
`;

const Footer = () => {
  const routing = { 0: '/home', 1: '/search' };
  const [now, setNow] = useRecoilState(NowState);

  const router = useRouter();

  const ChangeNow = (e) => {
    setNow(e.currentTarget.id);
    router.push(routing[e.currentTarget.id]);
  };

  const ChangeIsNow = (e) => {
    setNow(e.currentTarget.id);
  };
  return (
    <BtmNav>
      <Icon id="0" Isnow={now} onClick={ChangeNow}>
        <RiHome2Line size={25} />
        <a>Home</a>
      </Icon>

      <Icon id="1" Isnow={now} onClick={ChangeNow}>
        <RiSearchLine size={25} />
        <a>Search</a>
      </Icon>
      <Icon id="2"  Isnow={now} onClick={ChangeIsNow}>

        <MdOutlineVideoLibrary size={25} />
        <a>Coming Soon</a>
      </Icon>
      <Icon id="3" Isnow={now} onClick={ChangeIsNow}>
        <HiDownload size={25} />
        <a>Downloads</a>
      </Icon>
      <Icon id="4" Isnow={now} onClick={ChangeIsNow}>
        <BsList size={25} />
        <a>More</a>
      </Icon>
    </BtmNav>
  );
};

export default Footer;
