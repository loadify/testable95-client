import styled from "styled-components";

export const TextBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.color.darkGrayColor};
  border: 0.2rem solid ${({ theme }) => theme.color.blackColor};
`;

export const TextBoxTitle = styled.span`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: 2rem;
  background-color: inherit;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const TextBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.barColor};
  color: ${({ theme }) => theme.color.whiteColor};
  border-bottom: 0.2rem solid ${({ theme }) => theme.color.blackColor};
`;

export const TextBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  gap: 1.5rem;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.medium};

  p {
    width: 100%;
    display: inline-block;
    background-color: inherit;
    color: ${({ theme }) => theme.color.whiteColor};
  }
`;
