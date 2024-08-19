import useStore from "../store";

import Button from "./common/Button";
import LineBlock from "./common/LineBlock";
import Modal from "./common/Modal";

import useModal from "../hooks/useModal";
import useButtonState from "../hooks/useButtonState";

import { handleBlocks } from "../services/blocks";

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

const BlockDashboard = () => {
  const {
    lineBlocks,
    setLineBlocks,
    setTestCodes,
    handleBlockDragStart,
    handleBlockDrop,
    handleLineBlockDragStart,
    handleLineBlockDrop,
    handleCreateLineBlock,
  } = useStore();

  const [showResetModal, openResetModal, closeResetModal] = useModal();
  const [showCreateModal, openCreateModal, closeCreateModal] = useModal();

  const isTextButtonDisabled = useButtonState(lineBlocks);

  const resetBlocks = () => {
    setLineBlocks([
      {
        id: Date.now(),
        blocks: [],
      },
    ]);
  };

  const handleCreateConfirm = async () => {
    const collectedLineBlockInfo = lineBlocks.map((lineBlock, index) => ({
      lineBlockId: lineBlock.id,
      blocks: lineBlock.blocks,
      index: index + 1,
    }));

    const userBlocks = await handleBlocks(collectedLineBlockInfo);
    setTestCodes(userBlocks);

    resetBlocks();
    closeCreateModal();
  };

  const handleResetConfirm = () => {
    resetBlocks();
    closeResetModal();
  };

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
              handleBlockDragStart={(block) =>
                handleBlockDragStart(block, lineBlockIndex)
              }
              handleBlockDrop={() => handleBlockDrop(lineBlockIndex)}
              handleLineBlockDragStart={() =>
                handleLineBlockDragStart(lineBlockIndex)
              }
              handleLineBlockDrop={() => handleLineBlockDrop(lineBlockIndex)}
            />
          ))}
        </LineBlockList>
        <ButtonContainer>
          <Button
            type="text"
            text="reset"
            isDisabled={isTextButtonDisabled.reset}
            handleClick={openResetModal}
          />
          <Button
            type="text"
            text="create"
            isDisabled={isTextButtonDisabled.create}
            handleClick={openCreateModal}
          />
        </ButtonContainer>
      </Content>
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
