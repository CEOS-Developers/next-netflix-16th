import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { IMovies } from '../../interfaces/interface';

const SearchItem = (props: IMovies) => {
  return (
    <ItemWrapper>
      {props.backdrop_path ? (
        <ItemImg
          src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
        />
      ) : (
        <SkeletonImage />
      )}
      <InfoWrapper>
        <ItemTitle>{props.original_title}</ItemTitle>
        <Link
          href={{
            pathname: `/home/${props.id}`,
            query: {
              title: props.original_title,
              description: props.overview,
              poster_path: `https://image.tmdb.org/t/p/original${props.poster_path}`,
            },
          }}
          as={`/home/${props.id}`}
        >
          <PlayImg src='/images/search/play-circle.svg' />
        </Link>
      </InfoWrapper>
    </ItemWrapper>
  );
};

export default React.memo(SearchItem);

const ItemWrapper = styled.div`
  background-color: #424242;

  width: 375px;
  height: 76px;

  display: flex;
  align-items: center;

  margin-bottom: 3px;
`;

const ItemImg = styled.img`
  background-color: #191919;

  box-sizing: content-box;

  width: 146px;
  height: 76px;
  aspect-ratio: 146/76;

  border: 0;
  border-radius: 2px;

  object-fit: cover;
`;

const SkeletonImage = styled.div`
  background: #191919;

  width: 146px;
  height: 76px;
  aspect-ratio: 146/76;

  border-radius: 2px;
`;

const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  height: 30px;
  width: 170px;

  font-style: normal;
  font-weight: 400;
  font-size: 14.7222px;
  line-height: 30px;

  letter-spacing: 0.751111px;

  padding-left: 19px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #ffffff;
`;

const PlayImg = styled.img`
  padding-right: 14.33px;
`;
