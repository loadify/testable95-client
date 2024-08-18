import { useState, useEffect } from "react";

import CodeBox from "./common/CodeBox";
import Button from "./common/Button";
import TextBox from "./common/TextBox";

import { Section, Header, Content } from "../style/CommonStyle";

const TestCodeDashboard = ({ text }) => {
  const [content, setContent] = useState(text);

  const testCode = "TestCode";

  useEffect(() => {
    const interval = window.setInterval(() => {
      setContent((content) =>
        content === text + "..." ? text : content + ".",
      );
    }, 300);

    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <Section>
      <Header>
        <h2>Test Code Dashboard</h2>
      </Header>
      <Content>
        <TextBox title="Text Box" />
        <h3 className="test-code-text">{content}</h3>
        <CodeBox testCode={testCode} />
        <Button type="text" text="copy" />
      </Content>
    </Section>
  );
};

export default TestCodeDashboard;
