import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  overflow: scroll;
  overflow-x: auto;
`;

const TabList = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 2rem 0.5rem;
  background-color: transparent;
  gap: 2rem;

  @media (max-width: 1120px) {
    position: static;
    top: unset;
    left: unset;
  }
`;

const Tab = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.lightGrayColor};
  color: ${({ theme, "data-active": active }) =>
    active ? theme.color.whiteColor : theme.color.blackColor};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGrayColor};
  }

  &:focus {
    outline: none;
  }
`;

const BlockList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  margin-left: 8rem;
`;

const InputBlockList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  gap: 1rem;
  max-width: 90rem;
`;

const MethodBlockList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 90rem;
`;

export { Content, Tab, TabList, BlockList, InputBlockList, MethodBlockList };
