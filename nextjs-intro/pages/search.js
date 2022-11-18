import { useEffect, useState } from 'react';
import MovieModal from '../components/Modal';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

import MyHead from '../components/MyHead';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

//setSearchResults를 원래 Toprated로 하고 새로 받아오는 값을 set으로 해줘서 계속 바꿔주는 것으로 해보기?

export default function search({ TopRated }) {
  const getMovieList = ({ pageParam = OFFSET }) =>
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`,
        {
          // axios.get(url, config),
          // url전체를 템플릿 리터럴로 넘기든 config의 params로 넘기든 취향에 맞게 넘기자.
          params: {
            limit: OFFSET,
            offset: pageParam,
          },
        }
      )
      .then((res) => res?.movieData);

  const {
    movieData, // 💡 data.pages를 갖고 있는 배열
    error, // error 객체
    fetchNextPage, // 💡 다음 페이지를 불러오는 함수
    hasNextPage, // 다음 페이지가 있는지 여부, Boolean
    isFetching, // 첫 페이지 fetching 여부, Boolean, 잘 안쓰인다
    isFetchingNextPage, // 추가 페이지 fetching 여부, Boolean
    status,
  } = useInfiniteQuery('movieList', getMovieList, {
    getNextPageParam: (lastPage, page) => (hasNextPage ? Number : 0),
  });

  const OFFSET = 30;

  // const { search, handleChange, resetChat, searches } = useInput('');
  // const [modalState, setModal] = useState(false);
  // const [curMovie, setCurMov] = useState({});

  // const newData = searches.results;

  // const openModal = (movie) => {
  //   setModal(true);
  //   setCurMov(movie);
  // };

  // //searchsms 한단어부터 시작 이걸 async로 넘겨줘서 query값으로 가져오기
  // const data = TopRated.results;

  return (
    <div>
      <MyHead title="Search" />

      {status === 'loading' && <p>불러오는 중</p>}

      {status === 'error' && <p>{error.message}</p>}

      {status === 'success' &&
        movieData.results.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.original_title}</h3>
          </div>
        ))}

      <button onClick={() => fetchNextPage()}>더 불러오기</button>

      {isFetchingNextPage && <p>계속 불러오는 중</p>}

      {/* <SearchForm>
        <SmallImg src="/searchglass.png"></SmallImg>
        <Search
          value={search}
          onChange={handleChange}
          placeholder={'Search for movie'}
        ></Search>
        <CloseBut onClick={resetChat}>
          <img src="/close.png"></img>
        </CloseBut>
      </SearchForm>
      <MainHead>Top Searches</MainHead>

      {newData === undefined ? (
        <Container>
          {data
            .filter((input) =>
              input.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((movie) => (
              <div key={movie.id}>
                <MovieCon onClick={() => openModal(movie)}>
                  <MovieImg
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                  <PlayImg src="/play-button.png"></PlayImg>
                </MovieCon>
              </div>
            ))}
          {modalState && <MovieModal {...curMovie} setModalOpen={setModal} />}
        </Container>
      ) : (
        <Container>
          {newData.map((movie) => (
            <div key={movie.id}>
              <MovieCon onClick={() => openModal(movie)}>
                <MovieImg
                  src={
                    movie.backdrop_path === null
                      ? `/netflix2.png`
                      : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  }
                />
                <MovieTitle>{movie.title}</MovieTitle>
                <PlayImg src="/play-button.png"></PlayImg>
              </MovieCon>
            </div>
          ))}

          {modalState && <MovieModal {...curMovie} setModalOpen={setModal} />}
        </Container>
      )} */}
    </div>
  );
}
const PlayImg = styled.img`
  margin-left: 26.3px;
`;
const MovieTitle = styled.div`
  overflow: hidden;
  width: 160px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 15px;
`;
const CloseBut = styled.div``;
const SmallImg = styled.img`
  width: 15.63px;
  height: 15.63px;
  margin-left: 22.19px;
  margin-right: 18.19px;
`;

const MainHead = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
  color: white;
  font-weight: bold;
`;
const API_KEY = process.env.API_KEY;

export async function getServerSideProps() {
  const TopRated = await (
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  ).json();
  return {
    props: {
      TopRated,
    },
  };
}

const Search = styled.input`
  width: 270px;
  height: 31px;
  background-color: gray;
  border: 0;
  ::placeholder {
    color: lightgray;
  }
`;
const SearchForm = styled.form`
  margin-top: 40px;
  width: 375px;
  height: 52px;
  background-color: gray;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  overflow: auto;
`;

const MovieCon = styled.ul`
  width: 375px;
  height: 76px;
  border-color: white;
  display: flex;
  flex-direction: row;
  overflow: auto;
  color: white;
  background-color: gray;
  margin-bottom: 5px;
  align-items: center;
  font-size: 14px;
`;
const MovieImg = styled.img`
  width: 146px;
  height: 76px;

  object-fit: cover;
  background: black;

  margin-right: 10px;

  display: block;
`;
