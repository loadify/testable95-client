import { CodeBoxContainer, CodeBoxContent } from "../../style/CodeBoxStyle";

const CodeBox = ({ testCode }) => {
  const startText = "const { chromium } = require('playwright'); {";
  const endText = "await browser.close(); }";
  return (
    <CodeBoxContainer>
      <CodeBoxContent>
        <pre>{startText}</pre>
        {testCode}
        <pre>{endText}</pre>
      </CodeBoxContent>
    </CodeBoxContainer>
  );
};

export default CodeBox;
