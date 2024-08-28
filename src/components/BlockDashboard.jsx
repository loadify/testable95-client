import { useEffect } from "react";

import useStore from "../store";

import Button from "./common/Button";
import LineBlock from "./common/LineBlock";
import Modal from "./common/Modal";

import { handleBlocks } from "../services/blocks";

import {
  BlockDashboardButtonContainer,
  LineBlockList,
} from "../style/BlockDashboardStyle";
import { Section, Content, Header } from "../style/CommonStyle";

const BlockDashboard = () => {
  const {
    lineBlocks,
    setTestCodes,
    handleBlockDragStart,
    handleBlockDrop,
    handleLineBlockDragStart,
    handleLineBlockDrop,
    handleCreateLineBlock,
    handleResetLineBlocks,
    showTemplateModal,
    openTemplateModal,
    closeTemplateModal,
    showResetModal,
    openResetModal,
    closeResetModal,
    showCreateModal,
    openCreateModal,
    closeCreateModal,
    isTextButtonDisabled,
    updateButtonState,
    setIsCreateClicked,
    resetAudio,
    setSelectedTemplate,
  } = useStore();

  useEffect(() => {
    updateButtonState(lineBlocks);
  }, [lineBlocks, updateButtonState]);

  const handleCreateConfirm = async () => {
    setIsCreateClicked(true);

    const collectedLineBlockInfo = lineBlocks.map((lineBlock, index) => ({
      lineBlockId: lineBlock.id,
      blocks: lineBlock.blocks,
      index: index + 1,
    }));

    const userBlocks = await handleBlocks(collectedLineBlockInfo);

    setTestCodes(userBlocks.formattedTestCodes);

    closeCreateModal();
    handleResetLineBlocks();
    setIsCreateClicked(false);
  };

  const handleResetConfirm = () => {
    handleResetLineBlocks();
    closeResetModal();

    resetAudio.play();
  };

  return (
    <Section>
      <Header>
        <h2>Block Dashboard</h2>
      </Header>
      <Content className="dashboard-content">
        <BlockDashboardButtonContainer>
          <Button
            className="text-button"
            text="template"
            isDisabled={isTextButtonDisabled.test}
            handleClick={openTemplateModal}
          />
          <Button
            className="text-button"
            text="next"
            isDisabled={isTextButtonDisabled.next}
            handleClick={handleCreateLineBlock}
          />
        </BlockDashboardButtonContainer>
        <LineBlockList>
          {lineBlocks.map((lineBlock, lineBlockIndex) => (
            <LineBlock
              key={lineBlock.id}
              index={lineBlockIndex + 1}
              blocks={lineBlock.blocks}
              handleBlockDragStart={(block) =>
                handleBlockDragStart(block, lineBlockIndex)
              }
              handleBlockDrop={(draggedBlock, targetBlock) =>
                handleBlockDrop(lineBlockIndex, draggedBlock.id, targetBlock.id)
              }
              handleLineBlockDragStart={() =>
                handleLineBlockDragStart(lineBlockIndex)
              }
              handleLineBlockDrop={() => handleLineBlockDrop(lineBlockIndex)}
            />
          ))}
        </LineBlockList>
        <BlockDashboardButtonContainer>
          <Button
            className="text-button"
            text="reset"
            isDisabled={isTextButtonDisabled.reset}
            handleClick={openResetModal}
          />
          <Button
            className="text-button"
            text="create"
            isDisabled={isTextButtonDisabled.create}
            handleClick={openCreateModal}
          />
        </BlockDashboardButtonContainer>
      </Content>
      {showTemplateModal && (
        <Modal
          title="Template"
          content="원하는 테스트 시나리오를 선택하세요."
          handleConfirm={setSelectedTemplate}
          handleCancel={closeTemplateModal}
        />
      )}
      {showResetModal && (
        <Modal
          title="Reset"
          content="초기화 하시겠습니까?"
          handleConfirm={handleResetConfirm}
          handleCancel={closeResetModal}
        />
      )}
      {showCreateModal && (
        <Modal
          title="Create"
          content="생성 하시겠습니까?"
          handleConfirm={handleCreateConfirm}
          handleCancel={closeCreateModal}
        />
      )}
    </Section>
  );
};

export default BlockDashboard;
