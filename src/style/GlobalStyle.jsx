import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    font-family: "MS Sans Serif", Tahoma, Geneva, sans-serif;
  }

  body {
    display: flex;
    margin: 2rem;
    background-color: ${({ theme }) => theme.color.backgroundColor};
  }

  input {
    border: 0.2rem solid ${({ theme }) => theme.color.blackColor};
    padding: 0.2rem;
    background-color: ${({ theme }) => theme.color.whiteColor};
  }

  input:focus {
    outline: none;
  }
`;
