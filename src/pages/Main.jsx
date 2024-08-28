import useStore from "../store";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";
import Tutorial from "../components/common/Tutorial";
import Button from "../components/common/Button";

import { ManualButtonContainer } from "../style/ButtonStyle";

const Main = () => {
  const {
    handleKeyDown,
    tutorials,
    showTutorial,
    setShowTutorial,
    handleShowTutorial,
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
    </main>
  );
};

export default Main;
