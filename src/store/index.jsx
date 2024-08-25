import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import firstStep from "../assets/tutorial/01.svg";
import secondStep from "../assets/tutorial/02.svg";
import thirdStep from "../assets/tutorial/03.svg";
import fourthStep from "../assets/tutorial/04.svg";
import fifthStep from "../assets/tutorial/05.svg";
import sixthStep from "../assets/tutorial/06.svg";

import startSound from "../assets/sounds/start.mp3";
import resetSound from "../assets/sounds/reset.wav";
import createSound from "../assets/sounds/create.mp3";
import copySound from "../assets/sounds/copy.wav";

const useLineBlocksStore = create((set) => ({
  lineBlocks: [{ id: uuidv4(), blocks: [] }],

  setLineBlocks: (lineBlocks) => set({ lineBlocks }),

  handleCreateLineBlock: () =>
    set((state) => ({
      lineBlocks: [...state.lineBlocks, { id: uuidv4(), blocks: [] }],
    })),

  handleResetLineBlocks: () =>
    set({ lineBlocks: [{ id: uuidv4(), blocks: [] }] }),

  updateBlockValue: (blockId, newValue) =>
    set((state) => {
      const { lineBlocks } = state;

      const updateNewValue = (block) =>
        block.id === blockId && block.value !== newValue
          ? { ...block, value: newValue }
          : block;

      const hasUpdatedBlock = (blocks) =>
        blocks.some(
          (block) => block.id === blockId && block.value === newValue,
        );

      const newLineBlocks = lineBlocks.reduce((result, lineBlock) => {
        const newBlocks = lineBlock.blocks.map(updateNewValue);

        result.push(
          hasUpdatedBlock(newBlocks)
            ? { ...lineBlock, blocks: newBlocks }
            : lineBlock,
        );

        return result;
      }, []);

      const lineBlocksUpdated = newLineBlocks.length === lineBlocks.length;

      return lineBlocksUpdated ? { lineBlocks: newLineBlocks } : state;
    }),
}));

const useDragStore = create((set, get) => ({
  draggedBlock: null,
  draggedLineIndex: null,

  handleBlockDragStart: (block, lineIndex) =>
    set({
      draggedBlock: block,
      draggedLineIndex: lineIndex,
    }),

  handleBlockDrop: (
    targetLineIndex,
    draggedBlockId = null,
    targetBlockId = null,
  ) => {
    const { draggedBlock, draggedLineIndex } = get();
    const { lineBlocks, setLineBlocks } = useLineBlocksStore.getState();

    const isSameLine = draggedLineIndex === targetLineIndex;

    if (draggedBlock !== null) {
      const newLineBlocks = lineBlocks.map((lineBlock, index) => {
        const isTargetLine = index === targetLineIndex;
        const isDraggedLine = index === draggedLineIndex;
        const hasDraggedBlockId = draggedBlockId !== null;

        const newBlocks = [...lineBlock.blocks];

        const targetBlockIndex = newBlocks.findIndex(
          (block) => block.id === targetBlockId,
        );
        const draggedBlockIndex = newBlocks.findIndex(
          (block) => block.id === draggedBlock.id,
        );

        if (isTargetLine) {
          if (hasDraggedBlockId) {
            if (isSameLine) {
              newBlocks.splice(draggedBlockIndex, 1);
              newBlocks.splice(targetBlockIndex, 0, {
                ...draggedBlock,
                value: draggedBlock.value,
              });
            } else {
              if (!targetBlockId) {
                newBlocks.push({
                  ...draggedBlock,
                  id: draggedBlock.id || uuidv4(),
                  value: draggedBlock.value,
                });
              } else {
                newBlocks.splice(targetBlockIndex, 0, {
                  ...draggedBlock,
                  id: draggedBlock.id || uuidv4(),
                  value: draggedBlock.value,
                });
              }
            }
          } else {
            if (!targetBlockId) {
              newBlocks.push({
                ...draggedBlock,
                id: draggedBlock.id || uuidv4(),
                value: draggedBlock.value,
              });
            } else {
              newBlocks.splice(targetBlockIndex, 0, {
                ...draggedBlock,
                id: draggedBlock.id || uuidv4(),
                value: draggedBlock.value,
              });
            }
          }
        }

        return {
          ...lineBlock,
          blocks:
            isDraggedLine && !isSameLine
              ? newBlocks.filter((block) => block.id !== draggedBlock.id)
              : newBlocks,
        };
      });

      setLineBlocks(newLineBlocks);

      set({ draggedBlock: null, draggedLineIndex: null });
    }
  },

  handleBlockDragOver: (event) => {
    event.preventDefault();
  },

  handleLineBlockDragStart: (index) => {
    set({ draggedLineIndex: index });
  },

  handleLineBlockDrop: (targetIndex) => {
    const { draggedLineIndex } = get();
    const { lineBlocks, setLineBlocks } = useLineBlocksStore.getState();

    const isOtherLine =
      draggedLineIndex !== null && draggedLineIndex !== targetIndex;

    if (isOtherLine) {
      const newLineBlocks = [...lineBlocks];
      const [draggedLineBlock] = newLineBlocks.splice(draggedLineIndex, 1);

      newLineBlocks.splice(targetIndex, 0, draggedLineBlock);

      setLineBlocks(newLineBlocks);

      set({ draggedLineIndex: null });
    }
  },
}));

const useSelectionStore = create((set, get) => ({
  selectedBlockId: null,

  setSelectedBlockId: (selectedBlockId) => set({ selectedBlockId }),

  handleDeleteBlock: () => {
    const { draggedBlock } = useDragStore.getState();

    const { lineBlocks, setLineBlocks } = useLineBlocksStore.getState();

    const isDraggedBlock = draggedBlock !== null;

    if (isDraggedBlock) {
      const newLineBlocks = lineBlocks.map((lineBlock) => ({
        ...lineBlock,
        blocks: lineBlock.blocks.filter(
          (block) => block.id !== draggedBlock.id,
        ),
      }));

      setLineBlocks(newLineBlocks);

      useDragStore.setState({ draggedBlock: null, draggedLineIndex: null });
    }
  },

  handleKeyDown: (event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      const { selectedBlockId } = get();
      const { lineBlocks, setLineBlocks } = useLineBlocksStore.getState();

      const isSelectedBlockId = selectedBlockId !== null;
      const isTyping = ["INPUT"].includes(event.target.tagName);

      if (isTyping) {
        return;
      }

      if (isSelectedBlockId) {
        const newLineBlocks = lineBlocks.map((lineBlock) => ({
          ...lineBlock,
          blocks: lineBlock.blocks.filter(
            (block) => block.id !== selectedBlockId,
          ),
        }));

        setLineBlocks(newLineBlocks);

        set({ selectedBlockId: null });
      }
    }
  },
}));

const useTestCodeStore = create((set) => ({
  testCodes: "",
  setTestCodes: (testCodes) => set({ testCodes }),
}));

const useModalStore = create((set) => ({
  showResetModal: false,
  showCreateModal: false,
  showCopyModal: false,

  openResetModal: () => set({ showResetModal: true }),
  closeResetModal: () => set({ showResetModal: false }),

  openCreateModal: () => set({ showCreateModal: true }),
  closeCreateModal: () => set({ showCreateModal: false }),

  openCopyModal: () => set({ showCopyModal: true }),
  closeCopyModal: () => set({ showCopyModal: false }),

  openErrorModal: () => set({ showErrorModal: true }),
  closeErrorModal: () => set({ showErrorModal: false }),
}));

const useButtonStore = create((set) => ({
  isTextButtonDisabled: {
    next: false,
    reset: false,
    create: false,
    copy: true,
  },

  isCreateClicked: false,

  setIsCreateClicked: (value) => set({ isCreateClicked: value }),

  updateButtonState: (lineBlocks, showCodeBox) => {
    const hasBlock = lineBlocks.some(
      (lineBlock) => lineBlock.blocks.length > 0,
    );
    const hasMethodBlock = lineBlocks.every((lineBlock) =>
      lineBlock.blocks.some((block) => block.type === "method"),
    );

    set({
      isTextButtonDisabled: {
        reset: !hasBlock,
        next: !hasMethodBlock,
        create: !hasMethodBlock,
        copy: !showCodeBox,
      },
    });
  },
}));

const useAudioStore = create(() => ({
  startAudio: new Audio(startSound),
  copyAudio: new Audio(copySound),
  resetAudio: new Audio(resetSound),
  createAudio: new Audio(createSound),
}));

const useTutorialStore = create((set) => ({
  showTutorial: true,
  showManual: false,
  tutorials: [
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
    {
      image: sixthStep,
      content:
        "만약 tutorial이 다시 필요하다면 오른쪽 상단 Manual 버튼을 활용하시면 됩니다.",
    },
  ],

  setShowTutorial: (value) => set(() => ({ showTutorial: value })),
  setShowManual: (value) => set(() => ({ showManual: value })),
  handleShowTutorial: () => set((state) => ({ showManual: !state.showManual })),
}));

const useStore = () => ({
  ...useLineBlocksStore(),
  ...useDragStore(),
  ...useSelectionStore(),
  ...useTestCodeStore(),
  ...useModalStore(),
  ...useButtonStore(),
  ...useAudioStore(),
  ...useTutorialStore(),
});

export default useStore;
