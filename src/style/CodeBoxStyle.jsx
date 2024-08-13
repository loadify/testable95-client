import styled from "styled-components";

export const CodeBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.color.whiteColor};
  width: 30%;

  div::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }

  div::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.lightGrayColor};
  }

  div::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.grayColor};
    border: 0.1rem solid ${({ theme }) => theme.color.blackColor};
  }

  div::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.color.darkGrayColor};
  }

  div::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.color.grayColor};
  }
`;

export const CodeBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  height: 10rem;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.small};
  overflow: scroll;
  overflow-x: auto;

  p {
    background-color: inherit;
    color: ${({ theme }) => theme.color.blackColor};
  }
`;
