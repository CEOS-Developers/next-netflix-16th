import styled from 'styled-components'
import { RiHome2Line, RiSearchLine } from 'react-icons/ri'
import { HiDownload } from 'react-icons/hi'
import { BsList } from 'react-icons/bs'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import Link from 'next/Link';
import {useRecoilState} from 'recoil';
import { NowState } from '../../../states/states'

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
  color: ${(props)=> props.Isnow == props.id ? 'white' : '#8c8787' };
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
  const [now,setNow] = useRecoilState(NowState);

  const ChangeNow = (e) =>{
    setNow(e.currentTarget.id)
  }
  return (
    <BtmNav>
      <Icon >
        <Link href='/home'>
          <Icon id='0' Isnow={now} onClick={ChangeNow}>
            <RiHome2Line size={25}  />
            <a >Home</a>
          </Icon>
        </Link>
      </Icon>

      <Icon >
        <Link href='/search' >
          <Icon id='1' Isnow={now} onClick={ChangeNow}>
            <RiSearchLine size={25} />
            <a>Search</a>
          </Icon>
        </Link>
      </Icon>
      <Icon id='2' Isnow={now} onClick={ChangeNow}>
        <MdOutlineVideoLibrary size={25} />
        <a>Coming Soon</a>
      </Icon>
      <Icon id='3' Isnow={now} onClick={ChangeNow}>
        <HiDownload size={25} />
        <a>Downloads</a>
      </Icon>
      <Icon id='4' Isnow={now} onClick={ChangeNow}>
        <BsList size={25} />
        <a>More</a>
      </Icon>
    </BtmNav>
  );
};

export default Footer;
