import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --navy-90: #223954;
    --navy-100: #132D4A;
    --navy-200: #042040;
  }

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

  #root {
    display: flex;
  }
`;
