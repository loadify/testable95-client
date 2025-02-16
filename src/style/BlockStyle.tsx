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
    padding: 1rem 0.5rem;
    height: 2rem;
    width: 9rem;
    font-size: ${({ theme }) => theme.fontSize.xxsmall};
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 8.4rem;
  padding: 1rem 0.8rem;
  background: ${({ theme }) => theme.color.grayColor};
  color: ${({ theme }) => theme.color.whiteColor};
  border: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  position: relative;

  &:active {
    border-color: ${({ theme }) => theme.color.redColor};
  }

  .parameter {
    font-size: ${({ theme }) => theme.fontSize.xxsmall};
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
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

  .border {
    opacity: 50%;
    border: 5px solid blue;
  }
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
