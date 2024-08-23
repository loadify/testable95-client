import { useState } from "react";

import Button from "./Button";

import { Header } from "../../style/CommonStyle";
import { TextBoxContainer, TextBoxContent } from "../../style/TextBoxStyle";

const TextBox = ({ title }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <TextBoxContainer>
      <Header>
        <h2>{title}</h2>
        <Button
          type="resize"
          handleClick={handleMinimized}
          isMinimized={isMinimized}
        />
      </Header>
      <TextBoxContent className={isMinimized ? "hidden" : ""}>
        <p>1. Block Container에는 두 가지 블록이 있습니다.</p>
        <p>
          2. 회색 블록에는 사용자가 원하는 <strong>값</strong>을 입력할 수
          있습니다.
        </p>
        <p>
          3. 남색 블록으로 사용자가 원하는 <strong>동작</strong>을 선택할 수
          있습니다.
        </p>
        <p>
          4. Block Container에서 Block Dashboard로 <strong>드래그</strong>할 수
          있습니다.
        </p>
        <p>5. Block Dashboard에는 라인 블록이 있습니다.</p>
        <p>
          6. 하나의 라인 블록에는 최소 하나의 남색 블록이 포함되어야 합니다.
        </p>
        <p>
          7. 6번 기준을 충족해야 <strong>next</strong> 버튼을 통해 라인 블록이
          생성됩니다.
        </p>
        <p>
          8. <strong>reset</strong> 버튼을 누르면 Block Dashboard의 상태가
          초기화됩니다.
        </p>
        <p>
          9. <strong>create</strong> 버튼을 누르면 Block Dashboard의 블록들로
          코드를 생성합니다.
        </p>
        <p>10. Test Code Dashboard에서 생성된 코드를 확인할 수 있습니다.</p>
        <p>
          11. <strong>copy</strong> 버튼을 누르면 생성된 전체 코드를 복사할 수
          있습니다.
        </p>
      </TextBoxContent>
    </TextBoxContainer>
  );
};

export default TextBox;
