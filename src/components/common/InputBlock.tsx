import { useState } from "react";

import useBlockStore from "../../store/useBlockStore";

import { InputBlockContainer } from "../../style/BlockStyle";
import type { InputBlockProps } from "../../types/components";
import type { InputBlockType } from "../../types/block";

const InputBlock = ({
	parameter,
	saveBlockData,
	draggedValue,
	inputBlockId,
}: InputBlockProps) => {
	const { setSelectedBlockId, updateBlockValue } = useBlockStore();
	const [inputValue, setInputValue] = useState(draggedValue || "");

	const handleDragStart = (event: React.DragEvent) => {
		event.stopPropagation();

		const draggedBlock = {
			id: inputBlockId,
			type: "input",
			parameter: parameter,
			value: inputValue,
		};

		if (!draggedBlock.id) {
			setInputValue("");
		}

		saveBlockData(draggedBlock as InputBlockType);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const targetValue = event.target.value;

		setInputValue(targetValue);
		updateBlockValue(inputBlockId as string, targetValue);
	};

	const handleClickBlock = () => {
		setSelectedBlockId(inputBlockId as string);
	};

	return (
		<InputBlockContainer
			draggable="true"
			onDragStart={handleDragStart}
			onClick={handleClickBlock}
			id={inputBlockId}
		>
			<p className="parameter">
				{inputBlockId && inputValue
					? parameter === "anything"
						? "value"
						: parameter
					: ""}
			</p>
			<input
				placeholder={parameter === "anything" ? "value" : parameter}
				onChange={handleInputChange}
				value={inputValue}
			/>
		</InputBlockContainer>
	);
};

export default InputBlock;
