import { MethodBlockContainer } from "../../style/BlockStyle";

const MethodBlock = ({ method, saveBlockData }) => {
  const handleDragStart = () => {
    const draggedBlock = {
      type: "method",
      method: method,
    };

    saveBlockData(draggedBlock);
  };
  return (
    <MethodBlockContainer draggable="true" onDragStart={handleDragStart}>
      <p className="method-block-name">{method}</p>
    </MethodBlockContainer>
  );
};

export default MethodBlock;
