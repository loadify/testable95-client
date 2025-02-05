import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    font-family: "MS Sans Serif", Tahoma, Geneva, sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    margin: 2rem;
    background-color: ${({ theme }) => theme.color.backgroundColor};
  }

  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    font-weight: bold;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxsmall};
  }

  main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    gap: 1rem;
  }

  input {
    padding: 0.2rem;
    width: 7rem;
    border: 0.2rem solid ${({ theme }) => theme.color.blackColor};
    background-color: ${({ theme }) => theme.color.whiteColor};
  }

  input:focus {
    outline: none;
  }

  div::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }

  div::-webkit-scrollbar-track {
    border-top: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
    border-left: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
    border-right: 0.15rem solid ${({ theme }) => theme.color.blackColor};
    border-bottom: 0.15rem solid ${({ theme }) => theme.color.blackColor};
    background: ${({ theme }) => theme.color.lightGrayColor};
  }

  div::-webkit-scrollbar-thumb {
    border-top: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
    border-left: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
    border-right: 0.15rem solid ${({ theme }) => theme.color.blackColor};
    border-bottom: 0.15rem solid ${({ theme }) => theme.color.blackColor};
    background: ${({ theme }) => theme.color.grayColor};
  }

  div::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.color.darkGrayColor};
  }

  div::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.color.grayColor};
  }
`;

export default GlobalStyle;
