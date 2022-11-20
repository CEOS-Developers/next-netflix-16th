import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchWordState } from '../../states/searchState';
import { useInfiniteScrollSearchQuery } from '../../components/searchPage/useInfiniteScrollQuery';
import { useInView } from 'react-intersection-observer';
import SkeletonItem from '../../components/searchPage/SkeletonItem';
import SearchItem from '../../components/searchPage/SearchItem';
import styled from 'styled-components';
import { useDebounce } from '../../hooks/useDebounce';

const SearchList = () => {
  const [searchWord, setSearchWord] = useRecoilState(searchWordState);
  const debouncedSearchWord = useDebounce(searchWord, 500);
  const [ref, isView] = useInView();
  let arr = new Array(20).fill(1);

  const { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible, isLoading } =
    useInfiniteScrollSearchQuery(debouncedSearchWord);

  useEffect(() => {
    if (isView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [isView, getBoard]);

  return (
    <div>
      <ListTitle>Top Searches</ListTitle>
      {!isLoading
        ? // 데이터를 불러오는데 성공하고 데이터가 0개가 아닐 때 렌더링
          getBoardIsSuccess && getBoard!.pages
          ? getBoard!.pages.map((page_data: any, page_num: any) => {
              const board_page = page_data.board_page;

              return board_page?.map((item: any, idx: any) => {
                if (
                  // 마지막 요소에 ref 달아주기
                  getBoard!.pages.length - 1 === page_num &&
                  board_page.length - 1 === idx
                ) {
                  return (
                    // 마지막 요소에 ref 넣기 위해 div로 감싸기
                    <div ref={ref} key={item.board_id}>
                      <SkeletonItem key={item.board_id} />
                    </div>
                  );
                } else {
                  return <SearchItem key={item.board_id} {...item} />;
                }
              });
            })
          : null
        : arr.map((arr, index) => {
            return <SkeletonItem key={index} />;
          })}
    </div>
  );
};

export default SearchList;

const ListTitle = styled.h1`
  font-size: 27px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07339449226856232px;

  margin: 0;
  padding: 21px 10px 21px 10px;

  color: #ffffff;
`;
