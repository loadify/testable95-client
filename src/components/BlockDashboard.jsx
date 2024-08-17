import { useState, useEffect } from "react";

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
  setSelectedBlockId,
}) => {
  const [draggedLineBlockIndex, setDraggedLineBlockIndex] = useState(null);
  const [isTextButtonDisabled, setIsTextButtonDisabled] = useState({
    next: false,
    reset: true,
    create: true,
  });

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

  useEffect(() => {
    const hasMethodBlock = lineBlocks.every((lineBlock) =>
      lineBlock.blocks.some((block) => block.type === "method"),
    );
    setIsTextButtonDisabled((prevStates) => ({
      ...prevStates,
      next: !hasMethodBlock,
    }));
  }, [lineBlocks]);

  return (
    <Section>
      <Header>
        <h2>Block Dashboard</h2>
      </Header>
      <Content>
        <NextButtonContainer>
          <Button
            type="text"
            text="next"
            isDisabled={isTextButtonDisabled.next}
            handleClick={handleCreateLineBlock}
          />
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
              setSelectedBlockId={setSelectedBlockId}
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
