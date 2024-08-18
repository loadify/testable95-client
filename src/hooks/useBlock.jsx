import { useState } from "react";

const useDragDrop = (initialLineBlocks) => {
  const [lineBlocks, setLineBlocks] = useState(initialLineBlocks);
  const [draggedBlock, setDraggedBlock] = useState(null);
  const [draggedLineIndex, setDraggedLineIndex] = useState(null);
  const [selectedBlockId, setSelectedBlockId] = useState(null);

  const hasDraggedBlock = draggedBlock !== null;
  const hasDraggedLineIndex = draggedLineIndex !== null;
  const hasSelectedBlockId = selectedBlockId !== null;

  const handleBlockDragStart = (block, lineIndex) => {
    setDraggedBlock(block);
    setDraggedLineIndex(lineIndex);
  };

  const handleBlockDrop = (targetLineIndex, targetBlockId = null) => {
    const hasTargetBlock = targetBlockId !== null;

    if (hasDraggedBlock) {
      setLineBlocks((prevLineBlocks) => {
        return prevLineBlocks.map((lineBlock, index) => {
          const isDraggedLine = index === draggedLineIndex;
          const isTargetLine = index === targetLineIndex;

          let newBlocks = [...lineBlock.blocks];

          if (isDraggedLine) {
            newBlocks = newBlocks.filter(
              (block) => block.id !== draggedBlock.id,
            );
          }

          if (isTargetLine) {
            if (hasTargetBlock) {
              const targetIndex = newBlocks.findIndex(
                (block) => block.id === targetBlockId,
              );

              newBlocks.splice(targetIndex, 0, {
                ...draggedBlock,
                id: Date.now(),
              });
            } else {
              newBlocks.push({ ...draggedBlock, id: Date.now() });
            }
          }

          return { ...lineBlock, blocks: newBlocks };
        });
      });

      setDraggedBlock(null);
      setDraggedLineIndex(null);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleLineBlockDragStart = (index) => {
    setDraggedLineIndex(index);
  };

  const handleLineBlockDrop = (targetIndex) => {
    if (hasDraggedLineIndex && draggedLineIndex !== targetIndex) {
      setLineBlocks((prevLineBlocks) => {
        const newLineBlocks = [...prevLineBlocks];
        const [draggedLineBlock] = newLineBlocks.splice(draggedLineIndex, 1);

        newLineBlocks.splice(targetIndex, 0, draggedLineBlock);

        return newLineBlocks;
      });
    }

    setDraggedLineIndex(null);
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

  const handleDeleteBlock = () => {
    if (hasDraggedBlock) {
      setLineBlocks((prevLineBlocks) =>
        prevLineBlocks.map((lineBlock) => ({
          ...lineBlock,
          blocks: lineBlock.blocks.filter(
            (block) => block.id !== draggedBlock.id,
          ),
        })),
      );

      setDraggedBlock(null);
      setDraggedLineIndex(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      if (hasSelectedBlockId) {
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
    }
  };

  return {
    lineBlocks,
    setLineBlocks,
    draggedBlock,
    handleBlockDragStart,
    handleBlockDrop,
    handleDragOver,
    handleLineBlockDragStart,
    handleLineBlockDrop,
    handleCreateLineBlock,
    handleDeleteBlock,
    handleKeyDown,
    setSelectedBlockId,
  };
};

export default useDragDrop;
