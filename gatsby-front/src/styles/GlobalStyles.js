import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    --red: #FF4949;
    --black: #202020;
    --bg_event: rgb(75, 41, 19);
    --border: 2px solid #474a4d;
    --border-radius: 8px;
    --white: #fff;
    --offWhite: #edededcb;
    --grey: #efefef;
    --maxWidth: 1450px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.2);
    --bg: rgb(102, 56, 25);
    --bg_link: hsl(34, 66%, 33%);
    --link_hover: rgba(134, 80, 9, 0.2);
    --navSize: 12rem;
    --sm: 479;
    --speed: 500ms;
    --yellow: #ffc600;

    font-size: 1.4rem;
    min-height: 100vh;
    background-color: var(--black);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--offWhite);
  }

  .center {
    text-align: center;
  }
`;
