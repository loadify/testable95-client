import { InputBlockContainer } from "../../style/BlockStyle";

const InputBlock = ({ parameter }) => {
  return (
    <InputBlockContainer>
      <input placeholder={parameter} />
    </InputBlockContainer>
  );
};

export default InputBlock;
