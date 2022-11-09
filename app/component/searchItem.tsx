import styled from "styled-components";
import Image from "next/image";
import play2 from "../asset/img/icons/play2.svg";
import imgPath from "../asset/imgPath";

const SearchItem = ({ imgSrc, name }: { imgSrc: string; name: string }) => {
  return (
    <ItemWrap>
      <img src={`${imgPath}/${imgSrc}`} style={{ width: "146px" }} />
      <ItemTitle>{name}</ItemTitle>
      <Image src={play2} alt="close" />
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
  width: 200px;
  padding-left: 20px;
`;
