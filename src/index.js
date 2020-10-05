import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
 
  * {
  box-sizing: border-box;
  }
  a {
  text-decoration: none;
  color: inherit;
  }
  img {
    max-width: 100%;
  }
  button,
  input {
    outline: 0;
    border: 0;
    background: none;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Lato', sans-serif;
    color: #111111;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const themes = {
  themeBlack: "#111111",
  themeGreen: "#028E76",
  themeRed: "#A31323",
  themeOrange: "#F7F3F0",
  backgroundColor: "#FAFAFA",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...themes }}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
