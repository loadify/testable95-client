import { useState } from "react";

import { InputBlockContainer } from "../../style/BlockStyle";

const InputBlock = ({ parameter, saveBlockData, draggedValue }) => {
  const [inputValue, setInputValue] = useState(draggedValue || "");

  const handleDragStart = () => {
    const draggedBlock = {
      type: "input",
      parameter: parameter,
      value: inputValue,
    };

    saveBlockData(draggedBlock);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <InputBlockContainer draggable="true" onDragStart={handleDragStart}>
      <input
        placeholder={parameter}
        onChange={handleInputChange}
        value={inputValue}
      />
    </InputBlockContainer>
  );
};

export default InputBlock;
