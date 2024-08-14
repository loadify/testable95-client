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

const BlockDashboard = () => {
  return (
    <Section>
      <Header>
        <h2>Block Dashboard</h2>
      </Header>
      <Content>
        <NextButtonContainer>
          <Button type="text" text="next" />
        </NextButtonContainer>
        <LineBlockList>
          <LineBlock number="1" />
          <LineBlock number="2" />
          <LineBlock number="3" />
          <LineBlock number="4" />
          <LineBlock number="5" />
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
