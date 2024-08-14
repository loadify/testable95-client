import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./style/GlobalStyle";
import { Theme } from "./style/Theme";

import Main from "./pages/Main";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <h1>Testy 95</h1>
      <Main />
    </ThemeProvider>
  );
};

export default App;
