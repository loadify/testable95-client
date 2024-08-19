import useLoading from "../hooks/useLoading";

import CodeBox from "./common/CodeBox";
import Button from "./common/Button";
import TextBox from "./common/TextBox";

import { Section, Header, Content } from "../style/CommonStyle";

const TestCodeDashboard = () => {
  const { content, isLoading, showCodeBox, testCodes } = useLoading();

  return (
    <Section>
      <Header>
        <h2>Test Code Dashboard</h2>
      </Header>
      <Content>
        {!isLoading && !showCodeBox && <TextBox title="Text Box" />}
        {isLoading && <h3 className="test-code-text">{content}</h3>}
        {showCodeBox && <CodeBox testCode={testCodes} />}
        <Button type="text" text="copy" />
      </Content>
    </Section>
  );
};

export default TestCodeDashboard;
