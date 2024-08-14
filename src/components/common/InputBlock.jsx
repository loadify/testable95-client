import { InputBlockContainer } from "../../style/BlockStyle";

const InputBlock = ({ parameter, onDragStart }) => {
  return (
    <InputBlockContainer draggable="true" onDragStart={onDragStart}>
      <input placeholder={parameter} />
    </InputBlockContainer>
  );
};

export default InputBlock;
