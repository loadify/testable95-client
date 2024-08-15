import styled from "styled-components";

const BlockListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MethodBlockContainer = styled.li`
  .method-block-name {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    height: 2rem;
    background: ${({ theme }) => theme.color.barColor};
    color: ${({ theme }) => theme.color.whiteColor};
    border: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  }
  .method-block-name:active {
    border-color: ${({ theme }) => theme.color.redColor};
  }
`;

const InputBlockContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 1rem 0.8rem;
  background: ${({ theme }) => theme.color.grayColor};
  color: ${({ theme }) => theme.color.whiteColor};
  border: 0.15rem solid ${({ theme }) => theme.color.blackColor};

  &:active {
    border-color: ${({ theme }) => theme.color.redColor};
  }
`;

const LineBlockContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  padding-left: 0.5rem;
  min-width: 20rem;
  background: ${({ theme }) => theme.color.darkGrayColor};
  color: ${({ theme }) => theme.color.blackColor};
  border-top: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-left: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-right: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  border-bottom: 0.15rem solid ${({ theme }) => theme.color.blackColor};
`;

const OrderNumber = styled.div`
  margin-right: 0.5rem;
`;

export {
  BlockListContainer,
  MethodBlockContainer,
  InputBlockContainer,
  LineBlockContainer,
  OrderNumber,
};
