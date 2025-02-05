import { create } from "zustand";

import useDragStore from "./useDragStore";
import useLineBlocksStore from "./useLineBlockStore";
import type { BlockState } from "../types/store";
import type {
	BlockType,
	InputBlockType,
	LineBlockType,
	MethodBlockType,
} from "../types/block";

const useBlockStore = create<BlockState>((set) => ({
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

	updateBlockValue: (blockId, newValue) => {
		const { lineBlocks, setLineBlocks, cleanUpEmptyLineBlock } =
			useLineBlocksStore.getState();

		const updateNewValue = (
			block: BlockType<InputBlockType | MethodBlockType>,
		) =>
			block.id === blockId && (block as InputBlockType).value !== newValue
				? { ...block, value: newValue }
				: block;

		const hasUpdatedBlock = (
			blocks: BlockType<InputBlockType | MethodBlockType>[],
		) =>
			blocks.some(
				(block) =>
					block.id === blockId && (block as InputBlockType).value === newValue,
			);

		const newLineBlocks = lineBlocks.reduce<
			LineBlockType<InputBlockType | MethodBlockType>[]
		>((result, lineBlock) => {
			const newBlocks = lineBlock.blocks.map(updateNewValue);

			result.push(
				hasUpdatedBlock(newBlocks)
					? { ...lineBlock, blocks: newBlocks }
					: lineBlock,
			);

			return result;
		}, []);

		setLineBlocks(cleanUpEmptyLineBlock(newLineBlocks));

		return {};
	},
}));

export default useBlockStore;
