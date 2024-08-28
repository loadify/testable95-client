import useBlockStore from "../store/useBlockStore";
import useTutorialStore from "../store/useTutorialStore";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";
import Tutorial from "../components/common/Tutorial";
import Button from "../components/common/Button";

import { ManualButtonContainer } from "../style/ButtonStyle";

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
    </main>
  );
};

export default Main;
