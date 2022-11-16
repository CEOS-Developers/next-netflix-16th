import styled from 'styled-components';
import Image from 'next/image';
import { IThumbnailProps } from '../../interfaces/interface';
import useInput from '../../hooks/useInput';
import { useEffect } from 'react';
import { searchMovies } from '../../api/getMovies';
import { useRecoilState } from 'recoil';
import { searchedMoviesState, searchWordState } from '../../states/searchState';

const SearchBox = () => {
  const search = useInput('');

  const [searchWord, setSearchWord] = useRecoilState(searchWordState);

  useEffect(() => {
    setSearchWord(search.value);
    const call = () => searchMovies(search.value);
  }, [search.value]);

  return (
    <Form>
      <SearchImg src='/images/search/search.svg' />
      <Input placeholder='Search for a movie' {...search} />
      <SearchImg src='/images/search/cancel.svg' />

      {/* <SearchButton /> */}
    </Form>
  );
};

export default SearchBox;

const Form = styled.form`
  width: 100%;
  height: 52px;

  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #424242;
`;

const Input = styled.input`
  width: 270px;
  height: 31px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 15.213px;
  line-height: 31px;

  letter-spacing: 0.206667px;

  border: none;
  margin: 11px 24px 10px 7.19px;

  color: #c4c4c4;
  background: none;
`;

const SearchImg = styled.img``;
