import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  gap: 4rem;
  width: 50rem;
  height: 20rem;

  img {
    width: 50rem;
  }
`;

const ContentContainer = styled.pre`
  display: flex;
  line-height: 2rem;
  font-weight: bold;
`;

export { ImageContainer, ContentContainer };
