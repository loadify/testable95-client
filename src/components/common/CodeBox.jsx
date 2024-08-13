import { CodeBoxContainer, CodeBoxContent } from "../../style/CodeBoxStyle";

const CodeBox = ({ testCode }) => {
  return (
    <CodeBoxContainer>
      <CodeBoxContent>
        <p>{testCode}</p>
      </CodeBoxContent>
    </CodeBoxContainer>
  );
};

export default CodeBox;
