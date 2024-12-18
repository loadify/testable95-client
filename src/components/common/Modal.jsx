import Button from "./Button";

import useLineBlockStore from "../../store/useLineBlockStore";
import useModalStore from "../../store/useModalStore";

import {
  ModalBackground,
  ModalContainer,
  ModalContent,
} from "../../style/ModalStyle";
import { Header, ButtonContainer } from "../../style/CommonStyle";
import { FormContainer, SelectBox } from "../../style/SelectBoxStyle";
import useTemplateStore from "../../store/useTemplateStore";

const Modal = ({ title, content, handleCancel, handleConfirm }) => {
  const { setLineBlocks } = useLineBlockStore();
  const { closeTemplateModal } = useModalStore();
  const { templates } = useTemplateStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedValue = event.target.template.value;
    const selectedTemplate = templates[selectedValue];

    setLineBlocks(selectedTemplate);
    closeTemplateModal();
  };

  const handleTitle = (title) => {
    switch (title) {
      case "Manual":
        return <img className="manual-content" src={content} />;
      case "템플릿 선택":
        return (
          <>
            <p className="template-modal-content">{content}</p>
            <FormContainer onSubmit={handleSubmit}>
              <SelectBox name="template">
                <option value="login">로그인</option>
                <option value="payment">결제</option>
                <option value="signup">회원가입</option>
                <option value="search">검색</option>
              </SelectBox>
              <ButtonContainer className="form-button-container">
                <Button
                  className="under-form"
                  type="button"
                  text="뒤로"
                  handleClick={closeTemplateModal}
                />
                <Button className="under-form" type="submit" text="확인" />
              </ButtonContainer>
            </FormContainer>
          </>
        );
      default:
        return <p className="modal-content">{content}</p>;
    }
  };

  const handleButton = (title) => {
    switch (title) {
      case "복사":
      case "Error":
        return (
          <Button className="text" text="뒤로" handleClick={handleConfirm} />
        );
      case "템플릿 선택":
        return null;
      default:
        return (
          <>
            <Button className="text" text="아니오" handleClick={handleCancel} />
            <Button className="text" text="예" handleClick={handleConfirm} />
          </>
        );
    }
  };

  return (
    <ModalBackground onClick={handleCancel}>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <Header>
          <h2>{title}</h2>
        </Header>
        <ModalContent
          className={title === "템플릿 선택" ? "template-content" : ""}
        >
          {handleTitle(title)}
          <ButtonContainer>{handleButton(title)}</ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
