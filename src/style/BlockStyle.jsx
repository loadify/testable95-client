import styled from "styled-components";

export const MethodBlockContainer = styled.div`
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    width: 10rem;
    background: ${({ theme }) => theme.color.barColor};
    color: ${({ theme }) => theme.color.whiteColor};
    border: 2px solid ${({ theme }) => theme.color.blackColor};
  }
`;

export const InputBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  width: 8rem;
  background: ${({ theme }) => theme.color.grayColor};
  color: ${({ theme }) => theme.color.whiteColor};
  border: 2px solid ${({ theme }) => theme.color.blackColor};
`;

export const LineBlockContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  padding-left: 0.5rem;
  width: 16rem;
  background: ${({ theme }) => theme.color.darkGrayColor};
  color: ${({ theme }) => theme.color.blackColor};
  border: 0.1rem solid ${({ theme }) => theme.color.blackColor};
  border-bottom: 0.2rem solid ${({ theme }) => theme.color.blackColor};
  border-right: 0.2rem solid ${({ theme }) => theme.color.blackColor};
`;
