import styled, { css } from 'styled-components';
import PlayButton from '../elements/PlayButton';

const PlayBar = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <ItemWrapper>
          <PlayBarImg src="/images/home/my-list.svg" />
          <PlayBarItem>My List</PlayBarItem>
        </ItemWrapper>
        <PlayButton width="110.62px" />
        <ItemWrapper>
          <PlayBarImg src="/images/home/info.svg" />
          <PlayBarItem>Info</PlayBarItem>
        </ItemWrapper>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PlayBar;

const Wrapper = styled.div`
  width: 375px;

  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 259px;
  height: 45px;

  margin-top: 13px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
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
