import useBlock from "../hooks/useBlock";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";

const Main = () => {
  const {
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
  } = useBlock([{ id: Date.now(), blocks: [] }]);
  return (
    <main onKeyDown={handleKeyDown} tabIndex="0">
      <BlockContainer
        handleDragStart={handleBlockDragStart}
        handleDragOver={handleDragOver}
        handleDeleteBlock={handleDeleteBlock}
        setSelectedBlockId={setSelectedBlockId}
      />
      <BlockDashboard
        lineBlocks={lineBlocks}
        setLineBlocks={setLineBlocks}
        draggedBlock={draggedBlock}
        handleBlockDragStart={handleBlockDragStart}
        handleBlockDrop={handleBlockDrop}
        handleDragOver={handleDragOver}
        handleLineBlockDragStart={handleLineBlockDragStart}
        handleLineBlockDrop={handleLineBlockDrop}
        handleCreateLineBlock={handleCreateLineBlock}
        setSelectedBlockId={setSelectedBlockId}
      />
      <TestCodeDashboard text="Loading" />
    </main>
  );
};

export default Main;
