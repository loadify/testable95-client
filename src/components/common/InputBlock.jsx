import { InputBlockContainer } from "../../style/BlockStyle";

const InputBlock = ({ parameter, saveBlockData }) => {
  const handleDragStart = () => {
    saveBlockData({
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
