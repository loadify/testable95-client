import { MethodBlockContainer } from "../../style/BlockStyle";

const MethodBlock = ({ method, onDragStart }) => {
  const handleDragStart = () => {
    onDragStart({
      type: "method",
      method: method,
    });
  };
  return (
    <MethodBlockContainer draggable="true" onDragStart={handleDragStart}>
      <p className="method-block-name">{method}</p>
    </MethodBlockContainer>
  );
};

export default MethodBlock;
