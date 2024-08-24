import { useState } from "react";

import useStore from "../store";

import BlockContainer from "../components/BlockContainer";
import BlockDashboard from "../components/BlockDashboard";
import TestCodeDashboard from "../components/TestCodeDashboard";
import Tutorial from "../components/common/Tutorial";

import firstStep from "../assets/tutorial/01.svg";
import secondStep from "../assets/tutorial/02.svg";
import thirdStep from "../assets/tutorial/03.svg";
import fourthStep from "../assets/tutorial/04.svg";
import fifthStep from "../assets/tutorial/05.svg";

const Main = () => {
  const { handleKeyDown } = useStore();
  const [showTutorial, setShowTutorial] = useState(true);

  const tutorials = [
    {
      image: firstStep,
      content:
        "왼쪽의 회색 블록에는 사용자가 원하는 값을 입력할 수 있습니다.오른쪽의 남색 블록으로 사용자가 원하는 동작을 선택할 수 있습니다.",
    },
    {
      image: secondStep,
      content: "Block Dashboard로 블록을 드래그할 수 있습니다.",
    },
    {
      image: thirdStep,
      content:
        "하나의 라인 블록에는 최소 하나의 남색 블록이 포함되어야 합니다.",
    },
    { image: fourthStep, content: "reset 버튼을 누르면 블록이 초기화됩니다." },
    {
      image: fifthStep,
      content: "create 버튼을 누르면 테스트 코드가 생성됩니다.",
    },
  ];

  return (
    <main onKeyDown={handleKeyDown} tabIndex="0">
      <BlockContainer />
      <BlockDashboard />
      <TestCodeDashboard />
      {showTutorial && (
        <Tutorial
          title="Tutorial"
          tutorials={tutorials}
          onClose={() => setShowTutorial(false)}
        />
      )}
    </main>
  );
};

export default Main;
