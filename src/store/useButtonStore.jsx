import { create } from "zustand";

const useButtonStore = create((set) => ({
  isTextButtonDisabled: {
    template: true,
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

export default useButtonStore;
