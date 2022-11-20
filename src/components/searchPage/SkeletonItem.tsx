import React from 'react';
import styled from 'styled-components';

const SkeletonItem = () => {
  return (
    <ItemWrapper>
      <SkeletonImage />
      <ItemTitle />
    </ItemWrapper>
  );
};

export default React.memo(SkeletonItem);

const ItemWrapper = styled.div`
  background-color: #424242;

  width: 375px;
  height: 76px;

  display: flex;
  align-items: center;

  margin-bottom: 3px;
`;

const SkeletonImage = styled.div`
  background: #191919;

  width: 146px;
  height: 76px;
  aspect-ratio: 146/76;

  border-radius: 2px;
`;

const ItemTitle = styled.div`
  height: 20px;
  width: 150px;

  margin-left: 19px;

  border-radius: 2px;

  background: #191919;
`;
