import { useEffect } from "react";

import useStore from "../store";

import useLoading from "../hooks/useLoading";

import CodeBox from "./common/CodeBox";
import Button from "./common/Button";
import TextBox from "./common/TextBox";
import Modal from "./common/Modal";

import { Section, Header, Content } from "../style/CommonStyle";

const TestCodeDashboard = () => {
  const {
    lineBlocks,
    showCopyModal,
    openCopyModal,
    closeCopyModal,
    showErrorModal,
    openErrorModal,
    closeErrorModal,
    isTextButtonDisabled,
    updateButtonState,
  } = useStore();

  const { content, isLoading, showCodeBox, testCodes } = useLoading();

  useEffect(() => {
    updateButtonState(lineBlocks, showCodeBox);
  }, [lineBlocks, showCodeBox, updateButtonState]);

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
      <Content>
        {!isLoading && !showCodeBox && <TextBox title="Text Box" />}
        {isLoading && <h3 className="test-code-text">{content}</h3>}
        {showCodeBox && <CodeBox testCode={testCodes} />}
        <Button
          type="text"
          text="copy"
          isDisabled={isTextButtonDisabled.copy}
          handleClick={openCopyModal}
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
