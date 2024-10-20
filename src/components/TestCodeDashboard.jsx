import { useEffect } from "react";

import useLineBlocksStore from "../store/useLineBlockStore";
import useModalStore from "../store/useModalStore";
import useButtonStore from "../store/useButtonStore";

import useLoading from "../hooks/useLoading";

import CodeBox from "./common/CodeBox";
import Button from "./common/Button";
import Modal from "./common/Modal";

import { Section, Header, Content } from "../style/CommonStyle";

const TestCodeDashboard = () => {
  const {
    showCopyModal,
    openCopyModal,
    closeCopyModal,
    showErrorModal,
    openErrorModal,
    closeErrorModal,
  } = useModalStore();
  const { lineBlocks } = useLineBlocksStore();
  const { isTextButtonDisabled, updateButtonState } = useButtonStore();

  const { content, isLoading, showCodeBox, testCodes } = useLoading();

  useEffect(() => {
    updateButtonState(lineBlocks, showCodeBox);
  }, [lineBlocks, showCodeBox, updateButtonState]);

  const updateCopy = () => {
    openCopyModal();
  };

  const handleCopyConfirm = async () => {
    try {
      await navigator.clipboard.writeText(testCodes);
    } catch (error) {
      closeCopyModal();
      openErrorModal();
    }
    closeCopyModal();
  };

  return (
    <Section>
      <Header>
        <h2>Test Code Dashboard</h2>
      </Header>
      <Content className="testcode-dashboard-content">
        {isLoading && <h3 className="test-code-text">{content}</h3>}
        {!isLoading && showCodeBox && <CodeBox testCode={testCodes} />}
        <Button
          className="text-button copy"
          text="copy"
          isDisabled={isTextButtonDisabled.copy}
          handleClick={updateCopy}
        />
      </Content>
      {showCopyModal && (
        <Modal
          title="Copy"
          content="복사가 완료되었습니다."
          handleConfirm={handleCopyConfirm}
          handleCancle={closeCopyModal}
        />
      )}
      {showErrorModal && (
        <Modal
          title="Error"
          content="복사에 실패하였습니다."
          handleConfirm={closeErrorModal}
          handleCancle={closeErrorModal}
        />
      )}
    </Section>
  );
};

export default TestCodeDashboard;
