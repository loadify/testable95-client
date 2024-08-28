import useStore from "../store";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";

import Modal from "../components/common/Modal";
import ManualImage from "../assets/manual.png";
import Tutorial from "../components/common/Tutorial";
import Button from "../components/common/Button";

import { ManualButtonContainer } from "../style/ButtonStyle";

const Main = () => {
  const {
    handleKeyDown,
    showTutorial,
    showManual,
    setShowManual,
    setShowTutorial,
    handleShowTutorial,
    tutorials,
  } = useStore();

  return (
    <main onKeyDown={handleKeyDown} tabIndex="0">
      <BlockContainer />
      <BlockDashboard />
      <TestCodeDashboard />
      {showTutorial ? (
        <Tutorial
          title="Tutorial"
          tutorials={tutorials}
          onClose={() => setShowTutorial(false)}
        />
      ) : (
        <ManualButtonContainer>
          <Button
            className="text-button"
            text="Manual"
            handleClick={handleShowTutorial}
          />
        </ManualButtonContainer>
      )}
      {showManual && (
        <Modal
          title="Manual"
          content={ManualImage}
          handleConfirm={() => setShowManual(false)}
        />
      )}
    </main>
  );
};

export default Main;
