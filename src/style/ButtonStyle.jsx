import styled from "styled-components";

const ButtonContainer = styled.div`
  button {
    border: 0.15rem solid ${({ theme }) => theme.color.whiteColor};
    border-right-color: ${({ theme }) => theme.color.blackColor};
    border-bottom-color: ${({ theme }) => theme.color.blackColor};
    background-color: ${({ theme }) => theme.color.lightGrayColor};
    font-size: ${({ theme }) => theme.fontSize.xxsmall};
    cursor: pointer;
  }

  button:active {
    border-right-color: ${({ theme }) => theme.color.whiteColor};
    border-bottom-color: ${({ theme }) => theme.color.whiteColor};
    border-left-color: ${({ theme }) => theme.color.blackColor};
    border-top-color: ${({ theme }) => theme.color.blackColor};
  }

  button:disabled {
    background-color: ${({ theme }) => theme.color.darkGrayColor};
  }

  .text-button {
    padding: 0.5rem 2rem;
  }

  .resize-button {
    margin: 0.1rem;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.xxxsmall};
  }
`;

export default ButtonContainer;
