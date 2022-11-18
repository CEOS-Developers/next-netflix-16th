import styled from 'styled-components';
import Layout from '../components/ui/Layout';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { FaRegPlayCircle } from 'react-icons/fa';
import { getNowPlaying } from './api/api';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function search({ nowPlayingData }) {
  const [searchMovie, setSearchMovie] = useState('');
  const [searchApi, setSearchApi] = useState(nowPlayingData);
  const [filter, setFilter] = useState();

  useEffect(() => {
    const onSearch = async (searchMovie) => {
      if (searchMovie !== undefined) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=f85ba1745021cb0f98ac340407ad592b&query=${searchMovie}`
        );
        const data = await response.json();
        const searchData = data.results;
        setSearchApi(searchData);
      }
    };

    if (searchApi !== undefined) {
      const filteredMovie = searchApi.filter((searched) => {
        if (searchMovie !== undefined) {
          return searched.title
            .toLowerCase()
            .includes(searchMovie.toLowerCase());
        }
      });
      if(searchMovie === ''){
        setFilter(undefined)
      }
      else
        setFilter(filteredMovie);
    }

    onSearch(searchMovie);
  }, [searchMovie, searchApi]);


  const clearInput = () => {
    setSearchMovie('');
  };
  

  return (
    <Layout>
      <InputBox>
        <AiOutlineSearch
          style={{
            color: '#C4C4C4',
            fontSize: '30px',
            height: '100%',
            textAlign: 'center',
            padding: '5px',
            marginLeft: '15px',
          }}
        />
        <Input
          placeholder="Search for movie"
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
        />
        <AiOutlineClose className="closeBtn" onClick={clearInput} />
      </InputBox>
      <Category>Top Searches</Category>
      <MovieContainer>
        {filter !== undefined
          ? filter.map((filtered) => (
              <Link
                href={{
                  pathname: `/home/${filtered.id}`,
                  query: {
                    poster: JSON.stringify(
                      `https://image.tmdb.org/t/p/original/${filtered.poster_path}`
                    ),
                    preview: JSON.stringify(filtered.overview),
                  },
                }}
                as={`home/${filtered.id}`}
              >
                <Movie key={filtered.id}>
                {filtered.poster_path  == null ? <ErrImg /> : 
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/original/${filtered.poster_path}`}
                  />
                }
                  <Title>{filtered.title}</Title>
                  <FaRegPlayCircle className="playBtn" />
                </Movie>
              </Link>
            ))
          : ''}
        {searchMovie === ''
          ? nowPlayingData.map((filtered) => (
              <Link
                href={{
                  pathname: `/home/${filtered.id}`,
                  query: {
                    poster: JSON.stringify(
                      `https://image.tmdb.org/t/p/original/${filtered.poster_path}`
                    ),
                    preview: JSON.stringify(filtered.overview),
                  },
                }}
                as={`home/${filtered.id}`}
              >
                <Movie key={filtered.id}>
                {filtered.poster_path  == null ? <ErrImg /> : 
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/original/${filtered.poster_path}`}
                  />
                }
                  <Title>{filtered.title}</Title>
                  <FaRegPlayCircle className="playBtn" />
                </Movie>
              </Link>
            ))
          : ''}
      </MovieContainer>
    </Layout>
  );
}

const InputBox = styled.div`
  background-color: #424242;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  margin-top: 44px;
  .closeBtn {
    color: white;
    width: 20px;
    height: 100%;
    text-align: right;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Input = styled.input`
  background-color: #424242;
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  color: white;
  font-size: 15.21px;
  ::placeholder {
    color: #c4c4c4;
    font-size: 15.21px;
  }
`;

const Category = styled.h3`
  font-size: 27px;
  margin-left: 12px;
  color: white;
  font-size: 24px;
  margin-left: 10px;
`;

const MovieContainer = styled.div``;

const Movie = styled.div`
  width: 100%;
  background-color: #424242;
  margin-bottom: 5px;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .playBtn {
    color: white;
    width: 23px;
    height: 100%;
    margin-left: 20px;
    margin-right: 20px;
    float: right;
  }
`;

const MoviePoster = styled.img`
  width: 146px;
  height: 76px;
  object-fit: cover;
`;

const ErrImg = styled.div`
  width: 146px;
  height: 76px;
  background-color: white;
`;

const Title = styled.span`
  font-size: 14.72px;
  color: white;
  margin-left: 10px;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export async function getServerSideProps() {
  const nowPlayingRes = await getNowPlaying();
  const nowPlayingData = nowPlayingRes.data.results;

  return {
    props: {
      nowPlayingData,
    },
  };
}
//vercel