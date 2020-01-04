import { injectGlobal } from 'emotion';

const GlobalStyles = injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    position: relative;
  }
  
  body {
    height: 100%;
  }

  #app {
    height: 100%;
  }

  .App {
    height: 100%;
  }
`;

export default GlobalStyles;
