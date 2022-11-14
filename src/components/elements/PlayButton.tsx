import styled, { css } from 'styled-components';

type ButtonType = {
  width: string;
};

//TODO any 타입 수정
const PlayButton = ({ width }: ButtonType) => {
  return (
    <PlayButtonWrapper width={width}>
      <PlayBarImg src="/images/home/play-button.svg" isButton={true} />
      <PlayBarItem isButton={true}>Play</PlayBarItem>
    </PlayButtonWrapper>
  );
};

export default PlayButton;

const PlayButtonWrapper = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 45px;

  border: 0;
  outline: 0;

  background-color: #c4c4c4;
  border-radius: 5.625px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const PlayBarImg = styled.img<{ isButton?: boolean }>`
  width: 24px;
  height: 24px;

  ${(props) =>
    props.isButton &&
    css`
      width: 18px;
      height: 21.6px;
    `}
`;

const PlayBarItem = styled.div<{ isButton?: boolean }>`
  font-size: 13.64px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04px;
  text-align: center;
  color: #ffffff;

  ${(props) =>
    props.isButton &&
    css`
      color: #000;
      font-size: 20.46px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: -0.06px;
    `}
`;
