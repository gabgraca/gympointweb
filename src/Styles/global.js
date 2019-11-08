import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline:0;
  }

  html, body, #root {
    height: 100%;

  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #f5f5f5;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    height: 45px;
    background: #ee4d64;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    &:hover{
      background: ${darken(0.03, '#ee4d64')};
    }
  }
`;
