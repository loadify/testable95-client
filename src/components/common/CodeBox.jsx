import { CodeBoxContainer, CodeBoxContent } from "../../style/CodeBoxStyle";

const CodeBox = ({ testCode }) => {
  return (
    <CodeBoxContainer>
      <CodeBoxContent>{testCode.split(";").join(";\n")}</CodeBoxContent>
    </CodeBoxContainer>
  );
};

export default CodeBox;
