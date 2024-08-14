import { MethodBlockContainer } from "../../style/BlockStyle";

const MethodBlock = ({ method, onDragStart }) => {
  return (
    <MethodBlockContainer draggable="true" onDragStart={onDragStart}>
      <p className="method-block-name">{method}</p>
    </MethodBlockContainer>
  );
};

export default MethodBlock;
