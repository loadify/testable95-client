import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrayColor};
  border: 0.2rem solid ${({ theme }) => theme.color.blackColor};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.barColor};
  color: ${({ theme }) => theme.color.whiteColor};
  border-bottom: 0.2rem solid ${({ theme }) => theme.color.blackColor};
`;

export const ModalTitle = styled.span`
  display: flex;
  align-items: center;
  background-color: inherit;
  padding-left: 0.5rem;
  height: 2rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem;
  gap: 3rem;
  text-align: center;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.large};

  p {
    width: 100%;
    display: inline-block;
    background-color: inherit;
    color: ${({ theme }) => theme.color.blackColor};
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  gap: 4rem;
  background-color: inherit;
`;
