import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useLineBlocksStore = create((set) => ({
  lineBlocks: [{ id: uuidv4(), blocks: [] }],

  setLineBlocks: (lineBlocks) => set({ lineBlocks }),

  handleCreateLineBlock: () =>
    set((state) => ({
      lineBlocks: [...state.lineBlocks, { id: uuidv4(), blocks: [] }],
    })),

  handleResetLineBlocks: () =>
    set({ lineBlocks: [{ id: uuidv4(), blocks: [] }] }),
}));

const useDragStore = create((set, get) => ({
  draggedBlock: null,
  draggedLineIndex: null,

  handleBlockDragStart: (block, lineIndex) =>
    set({
      draggedBlock: block,
      draggedLineIndex: lineIndex,
    }),

  handleBlockDrop: (targetLineIndex, targetBlockId = null) => {
    console.log(targetBlockId);
    const { draggedBlock, draggedLineIndex } = get();
    const { lineBlocks, setLineBlocks } = useLineBlocksStore.getState();

    if (draggedBlock !== null) {
      const newLineBlocks = lineBlocks.map((lineBlock, index) => {
        const isDraggedLine = index === draggedLineIndex;
        const isTargetLine = index === targetLineIndex;
        let newBlocks = [...lineBlock.blocks];

        if (isDraggedLine) {
          newBlocks = newBlocks.filter((block) => block.id !== draggedBlock.id);
        }

        if (isTargetLine) {
          if (targetBlockId !== null) {
            const targetIndex = newBlocks.findIndex(
              (block) => block.id === targetBlockId,
            );
            newBlocks.splice(targetIndex, 0, {
              ...draggedBlock,
              id: uuidv4(),
            });
          } else {
            newBlocks.push({ ...draggedBlock, id: uuidv4() });
          }
        }

        return { ...lineBlock, blocks: newBlocks };
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

    if (draggedLineIndex !== null && draggedLineIndex !== targetIndex) {
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

    if (draggedBlock !== null) {
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

      if (selectedBlockId !== null) {
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
