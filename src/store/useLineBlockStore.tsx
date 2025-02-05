import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import type { LineBlockState } from "../types/store";
import type { InputBlockType, MethodBlockType } from "../types/block";

const useLineBlockStore = create<
	LineBlockState<InputBlockType | MethodBlockType>
>((set) => ({
	lineBlocks: [{ id: uuidv4(), blocks: [] }],

	setLineBlocks: (lineBlocks) => set({ lineBlocks }),

	handleCreateLineBlock: () =>
		set((state) => ({
			lineBlocks: [...state.lineBlocks, { id: uuidv4(), blocks: [] }],
		})),

	handleResetLineBlocks: () =>
		set({ lineBlocks: [{ id: uuidv4(), blocks: [] }] }),

	cleanUpEmptyLineBlock: (lineBlocks) => {
		const filledLineBlocks = lineBlocks.filter(
			(lineBlock) => lineBlock.blocks.length > 0,
		);

		if (filledLineBlocks.length === 0) {
			return [{ id: uuidv4(), blocks: [] }];
		}

		return filledLineBlocks;
	},
}));

export default useLineBlockStore;
