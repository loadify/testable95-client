import styled from "styled-components";

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrayColor};
  border-top: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-left: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-right: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  border-bottom: 0.15rem solid ${({ theme }) => theme.color.blackColor};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
  gap: 1.5rem;

  img {
    width: 50rem;

    @media (max-height: 1000px) {
      width: 30rem;
    }

    @media (max-height: 700px) {
      width: 20rem;
    }
  }

  .modal-content {
    display: inline-block;
    margin-top: 1rem;
    width: 100%;
    background-color: inherit;
    color: ${({ theme }) => theme.color.blackColor};
  }
`;

export { ModalBackground, ModalContainer, ModalContent };
