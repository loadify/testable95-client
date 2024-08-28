import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 0.3rem;
  text-align: center;
  margin-bottom: 2rem;
  border: 0.15rem solid ${({ theme }) => theme.color.blackColor};
  font-weight: bold;

  &: focus {
    outline: none;
  }
`;

export { FormContainer, SelectBox };
