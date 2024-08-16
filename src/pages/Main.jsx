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

  return (
    <main>
      <Modal title="title" content="content" />
      <BlockContainer handleDragStart={handleDragStart} />
      <BlockDashboard
        lineBlocks={lineBlocks}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
        handleCreateLineBlock={handleCreateLineBlock}
        handleLineBlockReorder={handleLineBlockReorder}
      />
      <TestCodeDashboard text="Loading" />
    </main>
  );
};

export default Main;
