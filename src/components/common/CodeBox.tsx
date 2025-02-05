import { CodeBoxContainer, CodeBoxContent } from "../../style/CodeBoxStyle";

import type { CodeBoxProps } from "../../types/components";

const CodeBox = ({ testCode }: CodeBoxProps) => {
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
