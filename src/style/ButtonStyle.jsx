import styled from "styled-components";

const ManualButtonContainer = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
`;

const ButtonContainer = styled.button`
  padding: 0.5rem 2rem;
  border: 0.15rem solid ${({ theme }) => theme.color.whiteColor};
  border-right-color: ${({ theme }) => theme.color.blackColor};
  border-bottom-color: ${({ theme }) => theme.color.blackColor};
  background-color: ${({ theme }) => theme.color.lightGrayColor};
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
  cursor: pointer;

  &:active {
    border-right-color: ${({ theme }) => theme.color.whiteColor};
    border-bottom-color: ${({ theme }) => theme.color.whiteColor};
    border-left-color: ${({ theme }) => theme.color.blackColor};
    border-top-color: ${({ theme }) => theme.color.blackColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.darkGrayColor};
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export { ManualButtonContainer, ButtonContainer };
