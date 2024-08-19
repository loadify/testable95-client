import { create } from "zustand";

const useLineBlocksStore = create((set) => ({
  lineBlocks: [{ id: Date.now(), blocks: [] }],

  setLineBlocks: (lineBlocks) => set({ lineBlocks }),

  handleCreateLineBlock: () =>
    set((state) => ({
      lineBlocks: [...state.lineBlocks, { id: Date.now(), blocks: [] }],
    })),

  handleResetLineBlocks: () =>
    set({ lineBlocks: [{ id: Date.now(), blocks: [] }] }),
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
              id: Date.now(),
            });
          } else {
            newBlocks.push({ ...draggedBlock, id: Date.now() });
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

const useStore = () => ({
  ...useLineBlocksStore(),
  ...useDragStore(),
  ...useSelectionStore(),
  ...useTestCodeStore(),
});

export default useStore;
