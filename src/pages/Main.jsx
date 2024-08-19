import useStore from "../store";
import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";

const Main = () => {
  const { handleKeyDown } = useStore();

  return (
    <main onKeyDown={handleKeyDown} tabIndex="0">
      <BlockContainer />
      <BlockDashboard />
      <TestCodeDashboard text="Loading" />
    </main>
  );
};

export default Main;
