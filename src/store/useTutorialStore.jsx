import { create } from "zustand";

import blockDescription from "../assets/tutorial/01.svg";
import blockDragInfo from "../assets/tutorial/02.svg";
import lineBlockRule from "../assets/tutorial/03.svg";
import resetButtonUsage from "../assets/tutorial/04.svg";
import createButtonUsage from "../assets/tutorial/05.svg";
import manualButtonUsage from "../assets/tutorial/06.svg";

const useTutorialStore = create((set) => ({
  showTutorial: true,
  tutorials: [
    {
      image: blockDescription,
      content:
        "왼쪽의 회색 블록에는 사용자가 원하는 값을 입력할 수 있습니다.오른쪽의 남색 블록으로 사용자가 원하는 동작을 선택할 수 있습니다.",
    },
    {
      image: blockDragInfo,
      content: "Block Dashboard로 블록을 드래그할 수 있습니다.",
    },
    {
      image: lineBlockRule,
      content:
        "하나의 라인 블록에는 최소 하나의 남색 블록이 포함되어야 합니다.",
    },
    {
      image: resetButtonUsage,
      content: "reset 버튼을 누르면 블록이 초기화됩니다.",
    },
    {
      image: createButtonUsage,
      content: "create 버튼을 누르면 테스트 코드가 생성됩니다.",
    },
    {
      image: manualButtonUsage,
      content:
        "만약 tutorial이 다시 필요하다면 오른쪽 상단 Manual 버튼을 활용하시면 됩니다.",
    },
  ],
  currentIndex: 0,
  isStart: false,

  setCurrentIndex: (index) => set(() => ({ currentIndex: index })),
  setShowTutorial: (value) => set(() => ({ showTutorial: value })),
  resetTutorial: () =>
    set({
      currentIndex: 0,
      isStart: false,
    }),
  handleShowTutorial: () =>
    set((state) => {
      if (!state.isStart) {
        return {
          isStart: true,
          currentIndex: 0,
          showTutorial: true,
        };
      } else {
        return {
          showTutorial: !state.showTutorial,
        };
      }
    }),
}));

export default useTutorialStore;
