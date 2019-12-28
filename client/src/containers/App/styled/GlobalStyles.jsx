import { injectGlobal } from 'emotion';

const GlobalStyles = injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    position: relative;
  }
  
  body {
    margin-bottom: 80px;
  }
`;

export default GlobalStyles;
