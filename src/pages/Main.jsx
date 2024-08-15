import { useState } from "react";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";
import Modal from "../components/common/Modal";

const Main = () => {
  const [dashboardBlocks, setDashboardBlocks] = useState([]);
  const [draggedBlock, setDraggedBlock] = useState(null);

  const handleDragStart = (block) => {
    setDraggedBlock(block);
  };

  const handleDrop = () => {
    if (draggedBlock) {
      setDashboardBlocks((prevBlocks) => [
        ...prevBlocks,
        { ...draggedBlock, id: Date.now() },
      ]);
      setDraggedBlock(null);
    }
  };

  return (
    <main>
      <Modal title="title" content="content" />
      <BlockContainer handleDragStart={handleDragStart} />
      <BlockDashboard blocks={dashboardBlocks} handleDrop={handleDrop} />
      <TestCodeDashboard text="Loading" />
    </main>
  );
};

export default Main;
