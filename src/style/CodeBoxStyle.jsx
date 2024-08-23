import styled from "styled-components";

const CodeBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const CodeBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 20rem;
  background-color: ${({ theme }) => theme.color.whiteColor};
  border: 0.1rem solid ${({ theme }) => theme.color.blackColor};
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
  font-weight: bold;
  overflow: scroll;
  overflow-x: auto;
  gap: 1rem;
  white-space: pre-wrap;

  p {
    background-color: inherit;
    color: ${({ theme }) => theme.color.blackColor};
  }
`;

export { CodeBoxContainer, CodeBoxContent };
