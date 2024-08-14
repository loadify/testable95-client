import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";
import Modal from "../components/common/Modal";

const Main = () => {
  return (
    <main>
      <Modal title="title" content="content" />
      <BlockContainer />
      <BlockDashboard />
      <TestCodeDashboard text="Loading" />
    </main>
  );
};

export default Main;
