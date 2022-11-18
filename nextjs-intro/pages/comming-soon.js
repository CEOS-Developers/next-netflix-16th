import MyHead from '../components/MyHead';
import { useInfiniteQuery } from 'react-query';

export default function comming() {
  const getMovieList = async ({ pageParam = 1 }) => {
    const movieData = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=aaf81bdfd64c8485a414ab01ef93d056&page=${pageParam}`
      )
    ).json();
    console.log(movieData);

    return movieData;
  };

  const {
    movieData, // data를 갖고 있는 배열
    error, // error 객체
    fetchNextPage, // 다음 페이지를 불러오는 함수
    hasNextPage, // 다음 페이지가 있는지 여부, Boolean
    isFetching, // 첫 페이지 fetching 여부, Boolean, 잘 안쓰인다
    isFetchingNextPage, // 추가 페이지 fetching 여부, Boolean
    status,
  } = useInfiniteQuery('movieList', getMovieList, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.page + 1;
    },
  });

  return (
    <div>
      <MyHead title="CommingSoon" />
      {status === 'loading' && <p>불러오는 중</p>}

      {status === 'error' && <p>{error.message}</p>}

      {
        status === 'success' && console.log(movieData)
        // movieData.results.map((movie) => (
        //   <div key={movie.id}>
        //     <h3>{movie.original_title}</h3>
        //   </div>
        // ))
      }

      <button onClick={() => fetchNextPage()}>더 불러오기</button>

      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
}
