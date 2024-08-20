import { useState, useEffect } from "react";

import useStore from "../store";

import InputBlock from "./common/InputBlock";
import MethodBlock from "./common/MethodBlock";

import { fetchBlocks } from "../services/blocks";

import {
  BlockList,
  InputBlockList,
  MethodBlockList,
} from "../style/BlockContainerStyle";
import { Header, Section, Content } from "../style/CommonStyle";

const BlockContainer = () => {
  const { handleBlockDragStart, handleBlockDragOver, handleDeleteBlock } =
    useStore();
  const [inputBlocks, setInputBlocks] = useState([]);
  const [methodBlocks, setMethodBlocks] = useState([]);

  useEffect(() => {
    const renderBlocks = async () => {
      try {
        const blocks = await fetchBlocks();
        setInputBlocks(blocks.inputBlocks);
        setMethodBlocks(blocks.methodBlocks);
      } catch (error) {
        console.error("Fetch Error");
      }
    };
    renderBlocks();
  }, []);

  return (
    <Section onDragOver={handleBlockDragOver} onDrop={handleDeleteBlock}>
      <Header>
        <h2>Block Container</h2>
      </Header>
      <Content>
        <BlockList>
          <InputBlockList>
            {inputBlocks.map((inputBlock) => (
              <InputBlock
                key={inputBlock._id}
                parameter={inputBlock.parameter}
                saveBlockData={handleBlockDragStart}
              />
            ))}
          </InputBlockList>
          <MethodBlockList>
            {methodBlocks.map((methodBlock) => (
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
