import styled from "styled-components";

export const ButtonContainer = styled.div`
  button {
    border: 0.2rem solid ${({ theme }) => theme.color.whiteColor};
    border-right-color: ${({ theme }) => theme.color.blackColor};
    border-bottom-color: ${({ theme }) => theme.color.blackColor};
    background-color: ${({ theme }) => theme.color.lightGrayColor};
    font-size: ${({ theme }) => theme.fontSize.small};
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
    font-weight: bold;
  }
`;
