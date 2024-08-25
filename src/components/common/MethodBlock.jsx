import useStore from "../../store";

import { MethodBlockContainer } from "../../style/BlockStyle";

const MethodBlock = ({ method, saveBlockData, methodBlockId }) => {
  const { setSelectedBlockId } = useStore();

  const handleDragStart = (event) => {
    event.stopPropagation();

    const draggedBlock = {
      id: methodBlockId,
      type: "method",
      method: method,
    };

    saveBlockData(draggedBlock);
  };

  const handleClickBlock = () => {
    setSelectedBlockId(methodBlockId);
  };

  return (
    <MethodBlockContainer
      draggable="true"
      onDragStart={handleDragStart}
      onClick={handleClickBlock}
    >
      <p className="method-block-name" id={methodBlockId}>
        {method}
      </p>
    </MethodBlockContainer>
  );
};

export default MethodBlock;
