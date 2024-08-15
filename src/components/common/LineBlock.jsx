import InputBlock from "./InputBlock";
import MethodBlock from "./MethodBlock";

import {
  BlockListContainer,
  LineBlockContainer,
  OrderNumber,
} from "../../style/BlockStyle";

const LineBlock = ({
  index,
  blocks,
  handleLineBlockDragStart,
  handleBlockDrop,
  handleLineBlockDragOver,
  handleLineBlockDrop,
}) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "lineblock");

    handleLineBlockDragStart(index);
  };

  const updateDrop = (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData("text/plain");

    if (data === "lineblock") {
      handleLineBlockDrop(index);
    } else {
      handleBlockDrop(index);
    }
  };

  return (
    <LineBlockContainer
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleLineBlockDragOver}
      onDrop={updateDrop}
    >
      <BlockListContainer>
        <OrderNumber>{index}</OrderNumber>
        {blocks.map((block) => {
          switch (block.type) {
            case "input":
              return (
                <InputBlock
                  key={block.id}
                  parameter={block.parameter}
                  draggedValue={block.value}
                />
              );
            case "method":
              return <MethodBlock key={block.id} method={block.method} />;
            default:
              return null;
          }
        })}
      </BlockListContainer>
    </LineBlockContainer>
  );
};

export default LineBlock;
