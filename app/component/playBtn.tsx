import Image from "next/image";
import styled from "styled-components";

const PlayBtn = ({ width }: { width: number }) => {
  return (
    <Play width={width}>
      <PlayImg src="/img/icons/play.svg" alt="playbtn" width={18} height={21} />
      <div>Play</div>
    </Play>
  );
};

export default PlayBtn;

const Play = styled.button<{ width?: number }>`
  width: ${(props) => props.width || 320}px;
  height: 45px;
  border: none;
  border-radius: 0.4rem;
  background: rgb(196, 196, 196);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;
const PlayImg = styled(Image)`
  margin-right: 0.7rem;
`;
