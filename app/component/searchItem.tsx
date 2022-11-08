import styled from "styled-components";

const SearchItem = () => {
  return (
    <ItemWrap>
      <img src="/poster.jpg" style={{ width: "146px" }} />
      <ItemTitle>Terrifier 2</ItemTitle>
      <img src="/search.png" style={{ width: "28px", height: "28px" }} />
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
