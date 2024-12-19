import useLineBlockStore from "../store/useLineBlockStore";
import useDragStore from "../store/useDragStore";
import useTestCodeStore from "../store/useTestCodeStore";
import useModalStore from "../store/useModalStore";

import Button from "./common/Button";
import LineBlock from "./common/LineBlock";
import Modal from "./common/Modal";

import { handleBlocks } from "../services/blocks";

import { hasBlock, hasMethodBlock } from "../utils/validators";

import {
  TopButtonContainer,
  BottomButtonContainer,
  LineBlockList,
} from "../style/BlockDashboardStyle";
import { Section, Content, Header } from "../style/CommonStyle";

const BlockDashboard = ({ setIsLoading, setIsError }) => {
  const { lineBlocks, handleCreateLineBlock, handleResetLineBlocks } =
    useLineBlockStore();
  const {
    handleBlockDragStart,
    handleBlockDrop,
    handleLineBlockDragStart,
    handleLineBlockDrop,
  } = useDragStore();
  const { setTestCodes } = useTestCodeStore();

  const {
    showTemplateModal,
    openTemplateModal,
    closeTemplateModal,
    showResetModal,
    openResetModal,
    closeResetModal,
    showCreateModal,
    openCreateModal,
    closeCreateModal,
    setSelectedTemplate,
    openErrorModal,
  } = useModalStore();

  const handleCreateConfirm = async () => {
    closeCreateModal();
    setIsLoading(true);

    try {
      const collectedLineBlockInfo = lineBlocks.map((lineBlock, index) => ({
        lineBlockId: lineBlock.id,
        blocks: lineBlock.blocks,
        index: index + 1,
      }));

      const userBlocks = await handleBlocks(collectedLineBlockInfo);

      setTestCodes(userBlocks.formattedTestCodes);
      handleResetLineBlocks();
    } catch (error) {
      openErrorModal();
      setIsLoading(false);
      setIsError(true);
    }

    setIsLoading(false);
  };

  const handleResetConfirm = () => {
    handleResetLineBlocks();
    closeResetModal();
  };

  return (
    <Section>
      <Header>
        <h2>블록 작업 공간</h2>
      </Header>
      <Content className="dashboard-content">
        <TopButtonContainer>
          <Button
            className="text-button"
            text="템플릿"
            handleClick={openTemplateModal}
          />
          <Button
            className="text-button"
            text="라인 블록 생성"
            isDisabled={!hasMethodBlock(lineBlocks)}
            handleClick={handleCreateLineBlock}
          />
        </TopButtonContainer>
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
        <BottomButtonContainer>
          <Button
            className="text-button"
            text="초기화"
            isDisabled={!hasBlock(lineBlocks)}
            handleClick={openResetModal}
          />
          <Button
            className="text-button"
            text="테스트 코드 생성"
            isDisabled={!hasMethodBlock(lineBlocks)}
            handleClick={openCreateModal}
          />
        </BottomButtonContainer>
      </Content>
      {showTemplateModal && (
        <Modal
          title="템플릿 선택"
          content="원하는 테스트 시나리오를 선택하세요."
          handleConfirm={setSelectedTemplate}
          handleCancel={closeTemplateModal}
        />
      )}
      {showResetModal && (
        <Modal
          title="초기화"
          content="초기화 하시겠습니까?"
          handleConfirm={handleResetConfirm}
          handleCancel={closeResetModal}
        />
      )}
      {showCreateModal && (
        <Modal
          title="테스트 코드 생성"
          content="생성 하시겠습니까?"
          handleConfirm={handleCreateConfirm}
          handleCancel={closeCreateModal}
        />
      )}
    </Section>
  );
};

export default BlockDashboard;
