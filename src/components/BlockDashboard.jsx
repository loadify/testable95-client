import Button from "./common/Button";
import LineBlock from "./common/LineBlock";

import {
  NextButtonContainer,
  LineBlockList,
} from "../style/BlockDashboardStyle";
import {
  Section,
  Header,
  Content,
  ButtonContainer,
} from "../style/CommonStyle";

const BlockDashboard = ({ blocks, onDrop }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Section onDragOver={handleDragOver} onDrop={onDrop}>
      <Header>
        <h2>Block Dashboard</h2>
      </Header>
      <Content>
        <NextButtonContainer>
          <Button type="text" text="next" />
        </NextButtonContainer>
        <LineBlockList>
          <LineBlock number="1" blocks={blocks}></LineBlock>
        </LineBlockList>
        <ButtonContainer>
          <Button type="text" text="reset" />
          <Button type="text" text="create" />
        </ButtonContainer>
      </Content>
    </Section>
  );
};

export default BlockDashboard;
