import styled from "styled-components";

export const CodeBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CodeBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 80%;
  height: 20rem;
  background-color: ${({ theme }) => theme.color.whiteColor};
  border: 0.1rem solid ${({ theme }) => theme.color.blackColor};
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
  overflow: scroll;
  overflow-x: auto;
  gap: 1rem;

  p {
    background-color: inherit;
    color: ${({ theme }) => theme.color.blackColor};
  }
`;
