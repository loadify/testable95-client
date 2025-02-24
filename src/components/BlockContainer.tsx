import { useEffect } from "react";

import useDragStore from "../store/useDragStore";
import useBlockStore from "../store/useBlockStore";

import InputBlock from "./common/InputBlock";
import MethodBlock from "./common/MethodBlock";

import { fetchBlocks } from "../services/blocks";

import {
	Tab,
	TabList,
	BlockList,
	InputBlockList,
	MethodBlockList,
} from "../style/BlockContainerStyle";
import { Header, Section, Content } from "../style/CommonStyle";
import type {
	BlockType,
	InputBlockType,
	MethodBlockType,
} from "../types/block";

const BlockContainer = () => {
	const { handleBlockDragStart, handleBlockDragOver } = useDragStore();
	const {
		inputBlocks,
		setInputBlocks,
		methodBlocks,
		setMethodBlocks,
		activeTab,
		setActiveTab,
		actions,
		setActions,
		handleDragDelete,
	} = useBlockStore();

	useEffect(() => {
		const renderBlocks = async () => {
			try {
				const blocks = await fetchBlocks();

				setInputBlocks(blocks.inputBlocks);
				setMethodBlocks(blocks.methodBlocks);

				const allActions = new Set(["All"]);

				const updateAction = (
					allBlocks: BlockType<InputBlockType | MethodBlockType>[],
				) => {
					for (const block of allBlocks) {
						if (block.actions) {
							for (const action of block.actions) {
								allActions.add(action);
							}
						}
					}
				};

				[blocks.inputBlocks, blocks.methodBlocks].forEach(updateAction);

				setActions([...allActions]);
			} catch (error) {
				setInputBlocks([]);
				setMethodBlocks([]);
				setActions(["All"]);
				console.error("Fetch Error");
			}
		};
		renderBlocks();
	}, []);

	const filterBlocksByAction = (
		blocks: BlockType<InputBlockType | MethodBlockType>[],
		action: string,
	): BlockType<InputBlockType | MethodBlockType>[] => {
		return blocks.filter((block) => block.actions?.includes(action));
	};

	const filterBlocks = (action: string) => {
		if (action === "All") {
			return {
				inputBlocks: inputBlocks || [],
				methodBlocks: methodBlocks || [],
			};
		}

		return {
			inputBlocks: filterBlocksByAction(inputBlocks || [], action),
			methodBlocks: filterBlocksByAction(methodBlocks || [], action),
		};
	};

	const {
		inputBlocks: filteredInputBlocks,
		methodBlocks: filteredMethodBlocks,
	} = filterBlocks(activeTab);

	const getTabName = (action: string) => {
		switch (action) {
			case "All":
				return "전체";
			case "login":
				return "로그인";
			case "payment":
				return "결제";
			case "signup":
				return "회원가입";
			case "search":
				return "검색";
		}
	};

	return (
		<Section onDragOver={handleBlockDragOver} onDrop={handleDragDelete}>
			<Header>
				<h2>블록 저장소</h2>
			</Header>
			<Content>
				<TabList>
					{actions.map((action) => (
						<Tab
							key={action}
							data-active={activeTab === action}
							onClick={() => setActiveTab(action)}
						>
							{getTabName(action)}
						</Tab>
					))}
				</TabList>
				<BlockList>
					<InputBlockList>
						{filteredInputBlocks.map((inputBlock) => (
							<InputBlock
								key={inputBlock._id}
								parameter={(inputBlock as BlockType<InputBlockType>).parameter}
								saveBlockData={handleBlockDragStart as () => void}
							/>
						))}
					</InputBlockList>
					<MethodBlockList>
						{filteredMethodBlocks.map((methodBlock) => (
							<MethodBlock
								key={methodBlock._id}
								method={(methodBlock as BlockType<MethodBlockType>).method}
								saveBlockData={handleBlockDragStart as () => void}
							/>
						))}
					</MethodBlockList>
				</BlockList>
			</Content>
		</Section>
	);
};

export default BlockContainer;
