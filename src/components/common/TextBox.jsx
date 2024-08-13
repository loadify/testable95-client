import {
  TextBoxContainer,
  TextBoxTitle,
  TextBoxHeader,
  TextBoxContent,
} from "../../style/TextBoxStyle";

import Button from "./Button";

const TextBox = ({ title }) => {
  return (
    <TextBoxContainer>
      <TextBoxHeader>
        <TextBoxTitle>{title}</TextBoxTitle>
        <Button type="resize" text="_" />
      </TextBoxHeader>
      <TextBoxContent>
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
