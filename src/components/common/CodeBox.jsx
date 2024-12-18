import { CodeBoxContainer, CodeBoxContent } from "../../style/CodeBoxStyle";

const CodeBox = ({ testCode }) => {
  return (
    <CodeBoxContainer>
      <CodeBoxContent>
        {testCode
          ? testCode.split(";").join(";\n")
          : "블록을 조합하여 테스트 코드를 생성해주세요."}
      </CodeBoxContent>
    </CodeBoxContainer>
  );
};

export default CodeBox;
