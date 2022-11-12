import styled from "styled-components";
import Image from "next/image";
import {imgPath} from "../../asset/api-info";

const SearchItem = ({ imgSrc, name }: { imgSrc: string; name: string }) => {
  return (
    <ItemWrap>
      <img src={`${imgPath}/${imgSrc}`} style={{ width: "146px" }} />
      <ItemTitle>{name}</ItemTitle>
      <Image src="/img/icons/play2.svg" alt="close" width={24} height={24} />
    </ItemWrap>
  );
};

export default SearchItem;

const ItemWrap = styled.div`
  width: 400px;
  height: 76px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: rgb(66, 66, 66);
  margin: 2.5px 0;
`;

const ItemTitle = styled.div`
  width: 215px;
  padding-left: 20px;
  font-size: 15px;
`;
