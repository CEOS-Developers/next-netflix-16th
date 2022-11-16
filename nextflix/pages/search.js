import styled from 'styled-components';
import Layout from '../components/ui/Layout'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';
import {FaRegPlayCircle} from 'react-icons/fa';
import { getNowPlaying } from './api/api'
import {useState} from 'react';

export async function getServerSideProps () {
  const nowPlayingRes = await getNowPlaying()
  const nowPlayingData = nowPlayingRes.data.results

  return {
    props: {
      nowPlayingData,
    }
  }
}

const search = ({nowPlayingData}) => {
  const [searchMovie, setSearchMovie] = useState('');
  const filteredMovie = nowPlayingData.filter((searched) => {
    return searched.title.toLowerCase().includes(searchMovie.toLowerCase());
  });
  const clearInput = () => {
    setSearchMovie('');
  }

    return (
      <Layout>
        <InputBox>
          <AiOutlineSearch style={{color: '#C4C4C4', fontSize: '30px', height:'100%', textAlign:'center', padding:'5px', marginLeft:'15px'}} />
          <Input placeholder="Search for movie" value={searchMovie} onChange={(e) => {
            setSearchMovie(e.target.value);
        }} />
          <AiOutlineClose className='closeBtn' onClick={clearInput} />
        </InputBox>
        <Category>Top Searches</Category>
        <MovieContainer>
        {filteredMovie.map((filtered) => (
            <Movie key={filtered.id}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/original/${filtered.poster_path}`}
              />
              <Title>
                {filtered.title}
              </Title>
              <FaRegPlayCircle className='playBtn' />
            </Movie>
          ))}
        </MovieContainer>
      </Layout>
    )
}

const InputBox =  styled.div`
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
  ::placeholder  {
    color: #C4C4C4;
    font-size: 15.21px;
  }
`;

const Category = styled.h3`
  font-size: 27px;
  margin-left: 12px;
  color: white;
  font-size: 24px;
  margin-left: 10px;
`

const MovieContainer = styled.div`

`

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
    margin-right: 20px;
    float: right;
  }
`;

const MoviePoster = styled.img`
  width: 146px;
  height: 76px;
  object-fit: cover;
`;

const Title = styled.span`
  font-size: 14.72px;
  color: white;
  margin-left: 10px;
  width: 200px;
`;

export default search;