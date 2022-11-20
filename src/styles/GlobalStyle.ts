import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
}

  body {
    font-family: 'SFProDisplay' !important;
    padding: 0;
    margin: 0;
    height: 100vh;

    /* width: 375px; */
    display: flex;
    justify-content: center !important;
    background-color: black;
    -ms-overflow-style: none;
    line-height: 1.5;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img{
    border: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  } 
`;
export default GlobalStyle;
