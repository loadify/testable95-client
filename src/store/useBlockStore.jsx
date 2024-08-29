import { create } from "zustand";

import useDragStore from "./useDragStore";
import useLineBlocksStore from "./useLineBlockStore";

const useBlockStore = create((set, get) => ({
  selectedBlockId: null,
  inputBlocks: [],
  methodBlocks: [],
  activeTab: "All",
  actions: ["All"],

  setSelectedBlockId: (selectedBlockId) => set({ selectedBlockId }),
  setInputBlocks: (inputBlocks) => set({ inputBlocks }),
  setMethodBlocks: (methodBlocks) => set({ methodBlocks }),
  setActiveTab: (activeTab) => set({ activeTab }),
  setActions: (actions) => set({ actions }),

  handleDragDelete: () => {
    const { draggedBlock } = useDragStore.getState();

    const { lineBlocks, setLineBlocks, cleanUpEmptyLineBlock } =
      useLineBlocksStore.getState();

    const isDraggedBlock = draggedBlock !== null;

    if (isDraggedBlock) {
      const newLineBlocks = lineBlocks.map((lineBlock) => ({
        ...lineBlock,
        blocks: lineBlock.blocks.filter(
          (block) => block.id !== draggedBlock.id,
        ),
      }));

      setLineBlocks(cleanUpEmptyLineBlock(newLineBlocks));

      useDragStore.setState({ draggedBlock: null, draggedLineIndex: null });
    }
  },

  handleKeyboardDelete: (event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      const { selectedBlockId } = get();
      const { lineBlocks, setLineBlocks, cleanUpEmptyLineBlock } =
        useLineBlocksStore.getState();

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

        setLineBlocks(cleanUpEmptyLineBlock(newLineBlocks));

        set({ selectedBlockId: null });
      }
    }
  },

  updateBlockValue: (blockId, newValue) =>
    set((state) => {
      const { lineBlocks, setLineBlocks, cleanUpEmptyLineBlock } =
        useLineBlocksStore.getState();

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

      setLineBlocks(cleanUpEmptyLineBlock(newLineBlocks));

      const lineBlocksUpdated = newLineBlocks.length === lineBlocks.length;

      return lineBlocksUpdated ? { lineBlocks: newLineBlocks } : state;
    }),
}));

export default useBlockStore;
