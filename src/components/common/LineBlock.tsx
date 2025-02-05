import { useState } from "react";

import useDragStore from "../../store/useDragStore";

import InputBlock from "./InputBlock";
import MethodBlock from "./MethodBlock";

import {
	BlockListContainer,
	LineBlockContainer,
	OrderNumber,
} from "../../style/BlockStyle";
import type { LineBlockProps } from "../../types/components";
import type {
	BlockType,
	InputBlockType,
	MethodBlockType,
} from "../../types/block";

const LineBlock = ({
	index,
	blocks,
	handleBlockDragStart,
	handleBlockDrop,
	handleLineBlockDragStart,
	handleLineBlockDrop,
}: LineBlockProps<InputBlockType | MethodBlockType>) => {
	const { draggedBlock, handleBlockDragOver } = useDragStore();
	const [targetBlock, setTargetBlock] = useState<HTMLElement | null>(null);

	const handleDragStart = (event: React.DragEvent) => {
		event.dataTransfer.setData("text/plain", "lineblock");

		handleLineBlockDragStart(index);
	};

	const updateDrop = (event: React.DragEvent) => {
		event.preventDefault();
		const data = event.dataTransfer.getData("text/plain");

		if (data === "lineblock") {
			handleLineBlockDrop(index);
		} else {
			handleBlockDrop(
				draggedBlock as BlockType<InputBlockType | MethodBlockType>,
				targetBlock,
			);
			(targetBlock as HTMLElement).classList.remove("border");
		}
	};

	const handleDragEnter = (event: React.BaseSyntheticEvent) => {
		setTargetBlock(event.target);

		const hasDroppedPosition =
			event.target &&
			event.target !== targetBlock &&
			(event.target as HTMLElement).tagName !== "INPUT";

		if (hasDroppedPosition) {
			(event.target as HTMLElement).classList.add("border");
		}

		if (targetBlock) {
			targetBlock.classList.remove("border");
		}
	};

	const handleDragEnd = (event: React.DragEvent) => {
		(event.target as HTMLElement).classList.remove("border");
	};

	return (
		<LineBlockContainer
			draggable
			onDragStart={handleDragStart}
			onDragOver={handleBlockDragOver}
			onDrop={updateDrop}
			onDragEnter={handleDragEnter}
			onDragEnd={handleDragEnd}
		>
			<BlockListContainer>
				<OrderNumber>{index}</OrderNumber>
				{blocks.map((block) => {
					switch (block.type) {
						case "input":
							return (
								<InputBlock
									key={block.id}
									parameter={(block as InputBlockType).parameter}
									saveBlockData={handleBlockDragStart as () => void}
									draggedValue={(block as InputBlockType).value}
									inputBlockId={block.id}
									draggable
									onDragStart={(event) => {
										event.stopPropagation();
										handleBlockDragStart(block, index);
									}}
								/>
							);
						case "method":
							return (
								<MethodBlock
									key={block.id}
									method={(block as MethodBlockType).method}
									saveBlockData={handleBlockDragStart as () => void}
									methodBlockId={block.id}
									draggable
									onDragStart={(event) => {
										event.stopPropagation();
										handleBlockDragStart(block, index);
									}}
								/>
							);
						default:
							return null;
					}
				})}
			</BlockListContainer>
		</LineBlockContainer>
	);
};

export default LineBlock;
