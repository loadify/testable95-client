import styled from "styled-components";

const MethodBlockContainer = styled.li`
  .method-block-name {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    background: ${({ theme }) => theme.color.barColor};
    color: ${({ theme }) => theme.color.whiteColor};
    border: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  }
`;

const InputBlockContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.62rem 1rem;
  background: ${({ theme }) => theme.color.grayColor};
  color: ${({ theme }) => theme.color.whiteColor};
  border: 0.15rem solid ${({ theme }) => theme.color.blackColor};
`;

const LineBlockContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  padding-left: 0.5rem;
  width: 16rem;
  background: ${({ theme }) => theme.color.darkGrayColor};
  color: ${({ theme }) => theme.color.blackColor};
  border-top: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-left: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-right: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  border-bottom: 0.15rem solid ${({ theme }) => theme.color.blackColor};
`;

export { MethodBlockContainer, InputBlockContainer, LineBlockContainer };
