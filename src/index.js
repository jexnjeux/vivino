import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Lato', sans-serif;
    color: #111111;
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
