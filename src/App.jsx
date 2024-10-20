import { ThemeProvider } from "styled-components";

import MainPage from "./pages/MainPage";

import GlobalStyle from "./style/GlobalStyle";
import Theme from "./style/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
