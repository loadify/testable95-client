import InputBlock from "./common/InputBlock";
import MethodBlock from "./common/MethodBlock";
import TextBox from "./common/TextBox";

import {
  BlockList,
  InputBlockList,
  MethodBlockList,
} from "../style/BlockContainerStyle";
import { Header, Section, Content } from "../style/CommonStyle";

const BlockContainer = () => {
  return (
    <Section>
      <Header>
        <h2>Block Container</h2>
      </Header>
      <Content>
        <BlockList>
          <InputBlockList>
            <InputBlock parameter="https://www.google.com" />
            <InputBlock parameter="url" />
            <InputBlock parameter="selector" />
            <InputBlock parameter="value" />
          </InputBlockList>
          <MethodBlockList>
            <MethodBlock method="이동합니다." />
            <MethodBlock method="클릭합니다." />
            <MethodBlock method="입력합니다." />
            <MethodBlock method="로그인합니다." />
            <MethodBlock method="오픈합니다." />
          </MethodBlockList>
        </BlockList>
        <TextBox title="Text Box" />
      </Content>
    </Section>
  );
};

export default BlockContainer;
