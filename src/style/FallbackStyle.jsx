import styled from "styled-components";

const FallbackText = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  color: ${({ theme }) => theme.color.whiteColor};
`;

export { FallbackText };
