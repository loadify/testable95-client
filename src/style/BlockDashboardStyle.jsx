import styled from "styled-components";

const BlockDashboardButtonContainer = styled.div`
  display: flex;
  position: sticky;
  z-index: 9999;
  gap: 10rem;
  top: 0%;
  right: 5%;
  margin-bottom: 2rem;
`;

const LineBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 15% 0;
  gap: 2rem;
`;

export { BlockDashboardButtonContainer, LineBlockList };
