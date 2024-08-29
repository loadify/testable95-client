import { useState } from "react";

import useBlockStore from "../../store/useBlockStore";

import { InputBlockContainer } from "../../style/BlockStyle";

const InputBlock = ({
  parameter,
  saveBlockData,
  draggedValue,
  inputBlockId,
}) => {
  const { setSelectedBlockId, updateBlockValue } = useBlockStore();
  const [inputValue, setInputValue] = useState(draggedValue || "");

  const handleDragStart = (event) => {
    event.stopPropagation();

    const draggedBlock = {
      id: inputBlockId,
      type: "input",
      parameter: parameter,
      value: inputValue,
    };

    if (!draggedBlock.id) {
      setInputValue("");
    }

    saveBlockData(draggedBlock);
  };

  const handleInputChange = (event) => {
    const targetValue = event.target.value;

    setInputValue(targetValue);
    updateBlockValue(inputBlockId, targetValue);
  };

  const handleClickBlock = () => {
    setSelectedBlockId(inputBlockId);
  };

  return (
    <InputBlockContainer
      draggable="true"
      onDragStart={handleDragStart}
      onClick={handleClickBlock}
      id={inputBlockId}
    >
      <p className="parameter">{inputBlockId && inputValue ? parameter : ""}</p>
      <input
        placeholder={parameter}
        onChange={handleInputChange}
        value={inputValue}
      />
    </InputBlockContainer>
  );
};

export default InputBlock;
