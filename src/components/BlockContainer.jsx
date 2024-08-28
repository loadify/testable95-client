import { useEffect } from "react";

import useDragStore from "../store/useDragStore";
import useBlockStore from "../store/useBlockStore";

import InputBlock from "./common/InputBlock";
import MethodBlock from "./common/MethodBlock";

import { fetchBlocks } from "../services/blocks";

import {
  Content,
  Tab,
  TabList,
  BlockList,
  InputBlockList,
  MethodBlockList,
} from "../style/BlockContainerStyle";
import { Header, Section } from "../style/CommonStyle";

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

        const updateAction = (allBlocks) => {
          allBlocks.forEach((block) =>
            block.actions.forEach((action) => allActions.add(action)),
          );
        };

        [blocks.inputBlocks, blocks.methodBlocks].forEach(updateAction);

        setActions([...allActions]);
      } catch (error) {
        console.error("Fetch Error");
      }
    };
    renderBlocks();
  }, []);

  const filterBlocksByAction = (blocks, action) => {
    return blocks.filter((block) => block.actions.includes(action));
  };

  const filterBlocks = (action) => {
    if (action === "All") {
      return { inputBlocks, methodBlocks };
    }

    return {
      inputBlocks: filterBlocksByAction(inputBlocks, action),
      methodBlocks: filterBlocksByAction(methodBlocks, action),
    };
  };

  const {
    inputBlocks: filteredInputBlocks,
    methodBlocks: filteredMethodBlocks,
  } = filterBlocks(activeTab);

  return (
    <Section onDragOver={handleBlockDragOver} onDrop={handleDragDelete}>
      <Header>
        <h2>Block Container</h2>
      </Header>
      <Content>
        <TabList>
          {actions.map((action) => (
            <Tab
              key={action}
              data-active={activeTab === action}
              onClick={() => setActiveTab(action)}
            >
              {action}
            </Tab>
          ))}
        </TabList>
        <BlockList>
          <InputBlockList>
            {filteredInputBlocks.map((inputBlock) => (
              <InputBlock
                key={inputBlock._id}
                parameter={inputBlock.parameter}
                saveBlockData={handleBlockDragStart}
              />
            ))}
          </InputBlockList>
          <MethodBlockList>
            {filteredMethodBlocks.map((methodBlock) => (
              <MethodBlock
                key={methodBlock._id}
                method={methodBlock.method}
                saveBlockData={handleBlockDragStart}
              />
            ))}
          </MethodBlockList>
        </BlockList>
      </Content>
    </Section>
  );
};

export default BlockContainer;
