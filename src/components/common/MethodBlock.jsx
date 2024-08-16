import { MethodBlockContainer } from "../../style/BlockStyle";

const MethodBlock = ({ method, saveBlockData, id, setSelectedBlockId }) => {
  const handleDragStart = () => {
    const draggedBlock = {
      type: "method",
      method: method,
    };

    saveBlockData(draggedBlock);
  };

  const handleClickBlock = () => {
    const selectedBlockId = id;
    setSelectedBlockId(selectedBlockId);
  };

  return (
    <MethodBlockContainer
      draggable="true"
      onDragStart={handleDragStart}
      onClick={handleClickBlock}
    >
      <p className="method-block-name">{method}</p>
    </MethodBlockContainer>
  );
};

export default MethodBlock;
