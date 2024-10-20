import useKeyboardEvent from "../hooks/useKeyboardEvent";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";

const MainPage = () => {
  useKeyboardEvent();

  return (
    <main>
      <BlockContainer />
      <BlockDashboard />
      <TestCodeDashboard />
    </main>
  );
};

export default MainPage;
