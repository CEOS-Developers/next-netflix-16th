import { useState, useEffect, useRef, use } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';

import MyHead from '../components/MyHead';
import Header from '../components/Header';

export default function Comming() {
  const getMovieList = async ({ pageParam = 0 }) => {
    const movieData = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=aaf81bdfd64c8485a414ab01ef93d056&page=${
          pageParam + 1
        }`
      )
    ).json();

    return movieData;
  };

  const {
    data, // data를 갖고 있는 배열
    error, // error 객체
    fetchNextPage, // 다음 페이지를 불러오는 함수
    hasNextPage, // 다음 페이지가 있는지 여부, Boolean
    isFetching, // 첫 페이지 fetching 여부, Boolean, 잘 안쓰인다
    isFetchingNextPage, // 추가 페이지 fetching 여부, Boolean
    status,
  } = useInfiniteQuery('movieList', getMovieList, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.page <= lastPage.total_pages ? lastPage.page + 1 : 1;
    },
  });

  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    console.log(inView);
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <MyHead title="CommingSoon" />
      <Header />
      <Container>
        <Content>
          {status === 'loading' && <p>불러오는 중</p>}
          {status === 'error' && <p>{error.message}</p>}
          {status === 'success' &&
            data.pages.map((page) =>
              page.results.map((movie) => (
                <div key={movie.id}>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                </div>
              ))
            )}
        </Content>
        {isFetchingNextPage ? <div>loading...</div> : <div ref={ref}></div>}
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5rem 1rem 1rem;

  overflow: auto;
`;

const Content = styled.div`
  color: white;
`;

const MovieTitle = styled.div`
  padding: 1rem;
`;
