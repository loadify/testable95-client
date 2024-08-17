import { useState } from "react";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";
import Modal from "../components/common/Modal";

const Main = () => {
  const [lineBlocks, setLineBlocks] = useState([
    {
      id: Date.now(),
      blocks: [],
    },
  ]);
  const [draggedBlock, setDraggedBlock] = useState(null);
  const [selectedBlockId, setSelectedBlockId] = useState(null);

  const handleDragStart = (block) => {
    setDraggedBlock(block);
  };

  const handleDrop = (targetBlockId) => {
    if (draggedBlock !== null) {
      setLineBlocks((prevLineBlocks) =>
        prevLineBlocks.map((lineBlock) => {
          if (lineBlock.id !== targetBlockId) {
            return lineBlock;
          }

          return {
            ...lineBlock,
            blocks: [...lineBlock.blocks, { ...draggedBlock, id: Date.now() }],
          };
        }),
      );
    }
    setDraggedBlock(null);
  };

  const handleCreateLineBlock = () => {
    setLineBlocks((prevLineBlocks) => [
      ...prevLineBlocks,
      {
        id: Date.now(),
        blocks: [],
      },
    ]);
  };

  const handleLineBlockReorder = (dragIndex, dropIndex) => {
    setLineBlocks((prevLineBlocks) => {
      const newLineBlocks = [...prevLineBlocks];
      const [draggedLineBlock] = newLineBlocks.splice(dragIndex, 1);

      newLineBlocks.splice(dropIndex, 0, draggedLineBlock);

      return newLineBlocks;
    });
  };

  const handleDeleteBlock = () => {
    if (selectedBlockId !== null) {
      setLineBlocks((prevLineBlocks) =>
        prevLineBlocks.map((lineBlock) => ({
          ...lineBlock,
          blocks: lineBlock.blocks.filter(
            (block) => block.id !== selectedBlockId,
          ),
        })),
      );
      setSelectedBlockId(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      handleDeleteBlock();
    }
  };

  return (
    <main onKeyDown={handleKeyDown} tabIndex="0">
      <Modal title="title" content="content" />
      <BlockContainer
        handleDragStart={handleDragStart}
        setSelectedBlockId={setSelectedBlockId}
      />
      <BlockDashboard
        lineBlocks={lineBlocks}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
        handleCreateLineBlock={handleCreateLineBlock}
        handleLineBlockReorder={handleLineBlockReorder}
        setSelectedBlockId={setSelectedBlockId}
        handleDeleteBlock={handleDeleteBlock}
      />
      <TestCodeDashboard text="Loading" />
    </main>
  );
};

export default Main;
