import { InputBlockContainer } from "../../style/BlockStyle";

const InputBlock = ({ parameter, onDragStart }) => {
  const handleDragStart = () => {
    onDragStart({
      type: "input",
      parameter: parameter,
    });
  };
  return (
    <InputBlockContainer draggable="true" onDragStart={handleDragStart}>
      <input placeholder={parameter} />
    </InputBlockContainer>
  );
};

export default InputBlock;
