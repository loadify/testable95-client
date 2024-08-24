import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useLineBlocksStore = create((set, get) => ({
  lineBlocks: [{ id: uuidv4(), blocks: [] }],

  setLineBlocks: (lineBlocks) => set({ lineBlocks }),

  handleCreateLineBlock: () =>
    set((state) => ({
      lineBlocks: [...state.lineBlocks, { id: uuidv4(), blocks: [] }],
    })),

  handleResetLineBlocks: () =>
    set({ lineBlocks: [{ id: uuidv4(), blocks: [] }] }),

  updateBlockValue: (blockId, newValue) =>
    set(() => {
      const lineBlocks = get().lineBlocks;
      const newLineBlocks = lineBlocks.map((lineBlock) => ({
        ...lineBlock,
        blocks: lineBlock.blocks.map((block) =>
          block.id === blockId ? { ...block, value: newValue } : block,
        ),
      }));
      return { lineBlocks: newLineBlocks };
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

const useStore = () => ({
  ...useLineBlocksStore(),
  ...useDragStore(),
  ...useSelectionStore(),
  ...useTestCodeStore(),
  ...useModalStore(),
  ...useButtonStore(),
});

export default useStore;
