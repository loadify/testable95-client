import styled from "styled-components";

const TutorialButtonContainer = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  height: 20rem;
`;

const ContentContainer = styled.pre`
  display: flex;
  line-height: 2rem;
  font-weight: bold;
`;

export { TutorialButtonContainer, ImageContainer, ContentContainer };
