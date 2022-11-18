import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

const BtnBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 45px;
  margin-top: 10px;
`;

const IconBox = styled.div`
  cursor: pointer;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  a {
    font-size: 10px;
  }
`;

const PlayBox = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  background-color: #c4c4c4;
  border-radius: 5.625px;
  color: black;
  justify-content: space-evenly;

  a {
    font-size: 20px;
  }
`;

const MidBtn = () => {
  return (
    <BtnBox>
      <IconBox>
        <AiOutlinePlus size={25} />
        <a>My List</a>
      </IconBox>
      <PlayBox>
        <BsFillPlayFill size={25} className="playBtn" />
        <a>Play</a>
      </PlayBox>
      <IconBox>
        <AiOutlineInfoCircle size={25} />
        <a>Info</a>
      </IconBox>
    </BtnBox>
  );
};

export default MidBtn;
