import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import useLineBlocksStore from "./useLineBlockStore";
import type { DragState } from "../types/store";
import type { InputBlockType, MethodBlockType } from "../types/block";

const useDragStore = create<DragState<InputBlockType | MethodBlockType>>(
	(set, get) => ({
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
			const { lineBlocks, setLineBlocks, cleanUpEmptyLineBlock } =
				useLineBlocksStore.getState();

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
								if (!targetBlockId) {
									newBlocks.splice(draggedBlockIndex, 1);
									newBlocks.push({
										...draggedBlock,
										id: draggedBlock.id || uuidv4(),
										value: (draggedBlock as InputBlockType).value,
									});
								} else {
									newBlocks.splice(draggedBlockIndex, 1);
									newBlocks.splice(targetBlockIndex, 0, {
										...draggedBlock,
										value: (draggedBlock as InputBlockType).value,
									});
								}
							} else {
								if (!targetBlockId) {
									newBlocks.push({
										...draggedBlock,
										id: draggedBlock.id || uuidv4(),
										value: (draggedBlock as InputBlockType).value,
									});
								} else {
									newBlocks.splice(targetBlockIndex, 0, {
										...draggedBlock,
										id: draggedBlock.id || uuidv4(),
										value: (draggedBlock as InputBlockType).value,
									});
								}
							}
						} else {
							if (!targetBlockId) {
								newBlocks.push({
									...draggedBlock,
									id: draggedBlock.id || uuidv4(),
									value: (draggedBlock as InputBlockType).value,
								});
							} else {
								newBlocks.splice(targetBlockIndex, 0, {
									...draggedBlock,
									id: draggedBlock.id || uuidv4(),
									value: (draggedBlock as InputBlockType).value,
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

				setLineBlocks(cleanUpEmptyLineBlock(newLineBlocks));

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
			const { lineBlocks, setLineBlocks, cleanUpEmptyLineBlock } =
				useLineBlocksStore.getState();

			const isOtherLine =
				draggedLineIndex !== null && draggedLineIndex !== targetIndex;

			if (isOtherLine) {
				const newLineBlocks = [...lineBlocks];
				const [draggedLineBlock] = newLineBlocks.splice(draggedLineIndex, 1);

				newLineBlocks.splice(targetIndex, 0, draggedLineBlock);

				setLineBlocks(cleanUpEmptyLineBlock(newLineBlocks));

				set({ draggedLineIndex: null });
			}
		},
	}),
);

export default useDragStore;
