import { useState } from "react";

import Button from "./common/Button";
import LineBlock from "./common/LineBlock";

import {
  NextButtonContainer,
  LineBlockList,
} from "../style/BlockDashboardStyle";
import {
  Section,
  Header,
  Content,
  ButtonContainer,
} from "../style/CommonStyle";

const BlockDashboard = ({
  lineBlocks,
  handleDragStart,
  handleDrop,
  handleCreateLineBlock,
  handleLineBlockReorder,
}) => {
  const [draggedLineBlockIndex, setDraggedLineBlockIndex] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleLineBlockDragStart = (index) => {
    setDraggedLineBlockIndex(index);
  };

  const handleLineBlockDrop = (dropLineBlockIndex) => {
    const isDragged = draggedLineBlockIndex !== null;
    const isChangedIndex = draggedLineBlockIndex !== dropLineBlockIndex;

    if (isDragged && isChangedIndex) {
      handleLineBlockReorder(draggedLineBlockIndex, dropLineBlockIndex);
    }

    setDraggedLineBlockIndex(null);
  };

  return (
    <Section>
      <Header>
        <h2>Block Dashboard</h2>
      </Header>
      <Content>
        <NextButtonContainer>
          <Button type="text" text="next" handleClick={handleCreateLineBlock} />
        </NextButtonContainer>
        <LineBlockList>
          {lineBlocks.map((lineBlock, lineBlockIndex) => (
            <LineBlock
              key={lineBlock.id}
              index={lineBlockIndex + 1}
              blocks={lineBlock.blocks}
              handleBlockDragStart={handleDragStart}
              handleBlockDrop={() => handleDrop(lineBlock.id)}
              handleLineBlockDragStart={() =>
                handleLineBlockDragStart(lineBlockIndex)
              }
              handleLineBlockDragOver={handleDragOver}
              handleLineBlockDrop={() => handleLineBlockDrop(lineBlockIndex)}
            />
          ))}
        </LineBlockList>
        <ButtonContainer>
          <Button type="text" text="reset" />
          <Button type="text" text="create" />
        </ButtonContainer>
      </Content>
    </Section>
  );
};

export default BlockDashboard;
