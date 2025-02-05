import useBlockStore from "../../store/useBlockStore";

import { MethodBlockContainer } from "../../style/BlockStyle";
import type { MethodBlockType } from "../../types/block";
import type { MethodBlockProps } from "../../types/components";

const MethodBlock = ({
	method,
	saveBlockData,
	methodBlockId,
}: MethodBlockProps) => {
	const { setSelectedBlockId } = useBlockStore();

	const handleDragStart = (event: React.DragEvent) => {
		event.stopPropagation();

		const draggedBlock = {
			id: methodBlockId,
			type: "method",
			method: method,
		};

		saveBlockData(draggedBlock as MethodBlockType);
	};

	const handleClickBlock = () => {
		setSelectedBlockId(methodBlockId as string);
	};

	return (
		<MethodBlockContainer
			draggable="true"
			onDragStart={handleDragStart}
			onClick={handleClickBlock}
		>
			<p className="method-block-name" id={methodBlockId}>
				{method}
			</p>
		</MethodBlockContainer>
	);
};

export default MethodBlock;
