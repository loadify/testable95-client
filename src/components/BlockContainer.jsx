import InputBlock from "./common/InputBlock";
import MethodBlock from "./common/MethodBlock";
import TextBox from "./common/TextBox";

import {
  BlockList,
  InputBlockList,
  MethodBlockList,
} from "../style/BlockContainerStyle";
import { Header, Section, Content } from "../style/CommonStyle";

const BlockContainer = ({ handleDragStart, setSelectedBlockId }) => {
  return (
    <Section>
      <Header>
        <h2>Block Container</h2>
      </Header>
      <Content>
        <BlockList>
          <InputBlockList>
            <InputBlock
              parameter="https://www.google.com"
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
            <InputBlock
              parameter="url"
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
            <InputBlock
              parameter="selector"
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
            <InputBlock
              parameter="value"
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
          </InputBlockList>
          <MethodBlockList>
            <MethodBlock
              method="이동합니다."
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
            <MethodBlock
              method="클릭합니다."
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
            <MethodBlock
              method="입력합니다."
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
            <MethodBlock
              method="로그인합니다."
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
            <MethodBlock
              method="오픈합니다."
              saveBlockData={handleDragStart}
              setSelectedBlockId={setSelectedBlockId}
            />
          </MethodBlockList>
        </BlockList>
        <TextBox title="Text Box" />
      </Content>
    </Section>
  );
};

export default BlockContainer;
