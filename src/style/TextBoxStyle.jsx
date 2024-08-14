import styled from "styled-components";

const TextBoxContainer = styled.div`
  margin: 1rem;
  background-color: ${({ theme }) => theme.color.darkGrayColor};
  border-top: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-left: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-right: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  border-bottom: 0.15rem solid ${({ theme }) => theme.color.blackColor};

  .hidden {
    overflow: hidden;
    height: 0;
    margin: 0;
  }
`;

const TextBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.barColor};
  color: ${({ theme }) => theme.color.whiteColor};
`;

const TextBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
  gap: 1.5rem;

  p {
    display: inline-block;
    width: 100%;
    background-color: inherit;
    color: ${({ theme }) => theme.color.whiteColor};
  }
`;

export { TextBoxContainer, TextBoxHeader, TextBoxContent };
