import { create } from "zustand";

const useStore = create((set, get) => ({
  lineBlocks: [{ id: Date.now(), blocks: [] }],
  draggedBlock: null,
  draggedLineIndex: null,
  selectedBlockId: null,

  setLineBlocks: (lineBlocks) => set({ lineBlocks }),
  setSelectedBlockId: (selectedBlockId) => set({ selectedBlockId }),

  handleBlockDragStart: (block, lineIndex) =>
    set({
      draggedBlock: block,
      draggedLineIndex: lineIndex,
    }),

  handleBlockDrop: (targetLineIndex, targetBlockId = null) => {
    const { draggedBlock, draggedLineIndex } = get();
    if (draggedBlock !== null) {
      set((state) => ({
        lineBlocks: state.lineBlocks.map((lineBlock, index) => {
          const isDraggedLine = index === draggedLineIndex;
          const isTargetLine = index === targetLineIndex;
          let newBlocks = [...lineBlock.blocks];

          if (isDraggedLine) {
            newBlocks = newBlocks.filter(
              (block) => block.id !== draggedBlock.id,
            );
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
        }),
        draggedBlock: null,
        draggedLineIndex: null,
      }));
    }
  },

  handleDragOver: (event) => {
    event.preventDefault();
  },

  handleLineBlockDragStart: (index) => {
    set({ draggedLineIndex: index });
  },

  handleLineBlockDrop: (targetIndex) => {
    const { lineBlocks, draggedLineIndex } = get();
    if (draggedLineIndex !== null && draggedLineIndex !== targetIndex) {
      const newLineBlocks = [...lineBlocks];
      const [draggedLineBlock] = newLineBlocks.splice(draggedLineIndex, 1);

      newLineBlocks.splice(targetIndex, 0, draggedLineBlock);
      set({ lineBlocks: newLineBlocks, draggedLineIndex: null });
    }
  },

  handleCreateLineBlock: () =>
    set((state) => ({
      lineBlocks: [...state.lineBlocks, { id: Date.now(), blocks: [] }],
    })),

  handleDeleteBlock: () => {
    const { draggedBlock } = get();
    if (draggedBlock !== null) {
      set((state) => ({
        lineBlocks: state.lineBlocks.map((lineBlock) => ({
          ...lineBlock,
          blocks: lineBlock.blocks.filter(
            (block) => block.id !== draggedBlock.id,
          ),
        })),
        draggedBlock: null,
        draggedLineIndex: null,
      }));
    }
  },

  handleKeyDown: (event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      const { selectedBlockId } = get();
      if (selectedBlockId !== null) {
        set((state) => ({
          lineBlocks: state.lineBlocks.map((lineBlock) => ({
            ...lineBlock,
            blocks: lineBlock.blocks.filter(
              (block) => block.id !== selectedBlockId,
            ),
          })),
          selectedBlockId: null,
        }));
      }
    }
  },
}));

export default useStore;
