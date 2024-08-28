import styled from "styled-components";

const BlockDashboardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  z-index: 9999;
  gap: 10rem;
  padding: 2rem 0;
  width: 100%;
  top: 0%;
  right: 5%;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.color.lightGrayColor};
`;

const LineBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  gap: 2rem;
`;

export { BlockDashboardButtonContainer, LineBlockList };
