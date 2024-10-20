import styled from "styled-components";

const TopButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  z-index: 9999;
  gap: 10rem;
  padding-top: 2rem;
  width: 100%;
  top: 0%;
  right: 5%;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.color.lightGrayColor};
`;

const BottomButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  gap: 10rem;
  padding: 2rem 0;
  width: 100%;
  bottom: 0%;
  background-color: ${({ theme }) => theme.color.lightGrayColor};
`;

const LineBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export { TopButtonContainer, BottomButtonContainer, LineBlockList };
