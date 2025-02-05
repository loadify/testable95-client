import styled from "styled-components";

const SplashPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.backgroundColor};
`;

const SplashPageTitle = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
`;

export { SplashPageContainer, SplashPageTitle };
