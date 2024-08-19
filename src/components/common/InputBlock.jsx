import { useState } from "react";
import useStore from "../../store";
import { InputBlockContainer } from "../../style/BlockStyle";

const InputBlock = ({
  parameter,
  saveBlockData,
  draggedValue,
  inputBlockId,
}) => {
  const { setSelectedBlockId } = useStore();
  const [inputValue, setInputValue] = useState(draggedValue || "");

  const handleDragStart = (event) => {
    event.stopPropagation();

    const draggedBlock = {
      id: inputBlockId,
      type: "input",
      parameter: parameter,
      value: inputValue,
    };

    setInputValue("");
    saveBlockData(draggedBlock);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickBlock = () => {
    setSelectedBlockId(inputBlockId);
  };

  return (
    <InputBlockContainer
      draggable="true"
      onDragStart={handleDragStart}
      onClick={handleClickBlock}
    >
      <input
        placeholder={parameter}
        onChange={handleInputChange}
        value={inputValue}
      />
    </InputBlockContainer>
  );
};

export default InputBlock;
