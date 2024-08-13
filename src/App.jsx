import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./style/GlobalStyle";

import Main from "./pages/Main";
import Theme from "./style/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
