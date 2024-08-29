import useBlockStore from "../store/useBlockStore";
import useTutorialStore from "../store/useTutorialStore";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";
import TutorialModal from "../components/common/Tutorial";
import Button from "../components/common/Button";

import { TutorialButtonContainer } from "../style/TutorialStyle";

const Main = () => {
  const { handleKeyboardDelete } = useBlockStore();
  const { tutorials, showTutorial, setShowTutorial, handleShowTutorial } =
    useTutorialStore();

  return (
    <main onKeyDown={handleKeyboardDelete} tabIndex="0">
      <BlockContainer />
      <BlockDashboard />
      <TestCodeDashboard />
      {showTutorial ? (
        <TutorialModal
          title="Tutorial"
          tutorials={tutorials}
          onClose={() => setShowTutorial(false)}
        />
      ) : (
        <TutorialButtonContainer>
          <Button
            className="text-button"
            text="Tutorial"
            handleClick={handleShowTutorial}
          />
        </TutorialButtonContainer>
      )}
    </main>
  );
};

export default Main;
