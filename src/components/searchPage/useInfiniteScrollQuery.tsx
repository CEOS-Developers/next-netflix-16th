import { useInfiniteQuery } from '@tanstack/react-query';
import client from '../../api/client';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export function useInfiniteScrollQuery() {
  const getInitialData = async ({ pageParam = 1 }) => {
    const res = await client.get(`movie/popular?api_key=${API_KEY}&page=${pageParam}`);

    return {
      board_page: res.data.results,
      current_page: pageParam,
      isLast: res.data.total_pages === pageParam, //미쳤다.
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
    isLoading: isLoading,
  } = useInfiniteQuery(['popular'], getInitialData, {
    getNextPageParam: (lastPage: any, pages: any) => {
      if (!lastPage.isLast) return lastPage.current_page + 1;
      return undefined;
    },
  });

  return { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible, isLoading };
}

export function useInfiniteScrollSearchQuery(debouncedSearchWord: string) {
  const getSearchData = async ({ pageParam = 1, searchWord = debouncedSearchWord }) => {
    const res = await client.get(`search/movie/?api_key=${API_KEY}&query=${searchWord}&page=${pageParam}`);

    return {
      board_page: res.data.results,
      current_page: pageParam,
      isLast: res.data.total_pages === pageParam, //미쳤다.
      current_word: debouncedSearchWord,
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
    isLoading: isLoading,
  } = useInfiniteQuery(['search', debouncedSearchWord], getSearchData, {
    getNextPageParam: (lastPage: any, pages: any) => {
      if (!lastPage.isLast) return lastPage.current_page + 1;
      return undefined;
    },
  });

  return {
    getBoard,
    getNextPage,
    getBoardIsSuccess,
    getNextPageIsPossible,
    isLoading,
  };
}
