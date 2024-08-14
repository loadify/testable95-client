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
        <p>블록을 오른쪽 컨테이너로 드래그하세요.</p>
        <p>
          블록을 삭제할 경우, 왼쪽컨테이너로 드래그하거나 del, backspace 키를
          활용하세요.
        </p>
        <p>블록을 초기화할 경우, reset 버튼을 누르세요.</p>
        <p>테스트 코드를 생성할 경우, create 버튼을 누르세요.</p>
      </TextBoxContent>
    </TextBoxContainer>
  );
};

export default TextBox;
