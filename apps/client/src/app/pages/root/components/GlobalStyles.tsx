import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
  }
`;
