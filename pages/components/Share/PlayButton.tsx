import styled from 'styled-components';
import Image from 'next/image';
import Play from '../assets/play.png';
import { IPlayButton } from '../../Interface/interface';

function PlayButton({width} : IPlayButton) {
  return (
    <Button width={width}>
      <Image src={Play} alt="play" width={18} height={21} />
      <Span>Play</Span>
    </Button>
  );
}

export default PlayButton;

const Button = styled.div<{width:string}>`
  background: #c4c4c4;
  border-radius: 5.625px;
  width: ${({ width }) => (width || `303px`)};
  height: 45px;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  color: black;
  margin: 0 auto;
`;

const Span = styled.span`
  margin-left: 15px;
`;
