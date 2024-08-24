import { useState, useEffect } from "react";
import useStore from "../store";
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
  const { handleBlockDragStart, handleBlockDragOver, handleDeleteBlock } =
    useStore();
  const [inputBlocks, setInputBlocks] = useState([]);
  const [methodBlocks, setMethodBlocks] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [actions, setActions] = useState(["All"]);

  useEffect(() => {
    const renderBlocks = async () => {
      try {
        const blocks = await fetchBlocks();
        setInputBlocks(blocks.inputBlocks);
        setMethodBlocks(blocks.methodBlocks);

        const allActions = new Set(["All"]);
        blocks.inputBlocks.forEach((block) =>
          block.actions.forEach((action) => allActions.add(action)),
        );
        blocks.methodBlocks.forEach((block) =>
          block.actions.forEach((action) => allActions.add(action)),
        );

        setActions([...allActions]);
      } catch (error) {
        console.error("Fetch Error");
      }
    };
    renderBlocks();
  }, []);

  const filterBlocks = (action) => {
    if (action === "All") {
      return { inputBlocks, methodBlocks };
    }

    return {
      inputBlocks: inputBlocks.filter((block) =>
        block.actions.includes(action),
      ),

      methodBlocks: methodBlocks.filter((block) =>
        block.actions.includes(action),
      ),
    };
  };

  const {
    inputBlocks: filteredInputBlocks,
    methodBlocks: filteredMethodBlocks,
  } = filterBlocks(activeTab);

  return (
    <Section onDragOver={handleBlockDragOver} onDrop={handleDeleteBlock}>
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
