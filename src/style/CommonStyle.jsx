import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-top: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-left: 0.1rem solid ${({ theme }) => theme.color.whiteColor};
  border-right: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  border-bottom: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  background-color: ${({ theme }) => theme.color.lightGrayColor};

  .dashboard-content {
    justify-content: space-between;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.color.barColor};
  color: ${({ theme }) => theme.color.whiteColor};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 90vh;
  overflow: scroll;
  overflow-x: auto;

  .test-code-text {
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    color: ${({ theme }) => theme.color.whiteColor};
  }

  .copy {
    position: absolute;
    bottom: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 4rem;
`;

export { Section, Header, Content, ButtonContainer };
