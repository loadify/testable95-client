import { ThemeProvider } from "styled-components";

import Main from "./pages/Main";

import GlobalStyle from "./style/GlobalStyle";
import Theme from "./style/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <h1>Testable 95</h1>
      <Main />
    </ThemeProvider>
  );
};

export default App;
