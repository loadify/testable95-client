import { useState } from "react";

import useStore from "../../store";

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
  handleBlockDragStart,
  handleBlockDrop,
  handleLineBlockDragStart,
  handleLineBlockDrop,
}) => {
  const { handleBlockDragOver, draggedBlock } = useStore();
  const [targetBlock, setTargetBlock] = useState(null);

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
      handleBlockDrop(draggedBlock, targetBlock);
      targetBlock.classList.remove("border");
    }
  };

  const handleDragEnter = (event) => {
    setTargetBlock(event.target);

    const hasDroppedPosition =
      event.target &&
      event.target !== targetBlock &&
      event.target.tagName !== "INPUT";

    if (hasDroppedPosition) {
      event.target.classList.add("dropped-position");
    }

    if (targetBlock) {
      targetBlock.classList.remove("dropped-position");
    }
  };

  const handleDragEnd = (event) => {
    event.target.classList.remove("dropped-position");
  };

  return (
    <LineBlockContainer
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleBlockDragOver}
      onDrop={updateDrop}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
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
                  saveBlockData={handleBlockDragStart}
                  draggedValue={block.value}
                  inputBlockId={block.id}
                  draggable
                  onDragStart={(event) => {
                    event.stopPropagation();
                    handleBlockDragStart(block.id, index);
                  }}
                />
              );
            case "method":
              return (
                <MethodBlock
                  key={block.id}
                  method={block.method}
                  saveBlockData={handleBlockDragStart}
                  methodBlockId={block.id}
                  draggable
                  onDragStart={(event) => {
                    event.stopPropagation();
                    handleBlockDragStart(block.id, index);
                  }}
                />
              );
            default:
              return null;
          }
        })}
      </BlockListContainer>
    </LineBlockContainer>
  );
};

export default LineBlock;
