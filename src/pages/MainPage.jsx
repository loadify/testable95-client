import { useState } from "react";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <main>
      <BlockContainer />
      <BlockDashboard setIsLoading={setIsLoading} setIsError={setIsError} />
      <TestCodeDashboard isLoading={isLoading} isError={isError} />
    </main>
  );
};

export default MainPage;
