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
    pointer-events: none;
    cursor: not-allowed;
  }

  .text-button {
    padding: 0.5rem 2rem;
  }

  .resize-button {
    margin: 0.1rem;
    padding: 0.1rem 0.2rem 0.1rem;
    font-weight: 900;
    font-size: ${({ theme }) => theme.fontSize.xxsmall};
  }
`;

export default ButtonContainer;
