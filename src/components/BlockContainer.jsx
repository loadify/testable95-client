import InputBlock from "./common/InputBlock";
import MethodBlock from "./common/MethodBlock";
import TextBox from "./common/TextBox";

import {
  BlockList,
  InputBlockList,
  MethodBlockList,
} from "../style/BlockContainerStyle";
import { Header, Section, Content } from "../style/CommonStyle";

const BlockContainer = ({ handleDragStart }) => {
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
            />
            <InputBlock parameter="url" saveBlockData={handleDragStart} />
            <InputBlock parameter="selector" saveBlockData={handleDragStart} />
            <InputBlock parameter="value" saveBlockData={handleDragStart} />
          </InputBlockList>
          <MethodBlockList>
            <MethodBlock method="이동합니다." saveBlockData={handleDragStart} />
            <MethodBlock method="클릭합니다." saveBlockData={handleDragStart} />
            <MethodBlock method="입력합니다." saveBlockData={handleDragStart} />
            <MethodBlock
              method="로그인합니다."
              saveBlockData={handleDragStart}
            />
            <MethodBlock method="오픈합니다." saveBlockData={handleDragStart} />
          </MethodBlockList>
        </BlockList>
        <TextBox title="Text Box" />
      </Content>
    </Section>
  );
};

export default BlockContainer;
