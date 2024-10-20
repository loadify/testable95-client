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
      case "Template":
        return (
          <>
            <p className="template-modal-content">{content}</p>
            <FormContainer onSubmit={handleSubmit}>
              <SelectBox name="template">
                <option value="login">login</option>
                <option value="payment">payment</option>
                <option value="signup">signup</option>
                <option value="search">search</option>
              </SelectBox>
              <ButtonContainer className="form-button-container">
                <Button
                  className="under-form"
                  type="button"
                  text="back"
                  handleClick={closeTemplateModal}
                />
                <Button className="under-form" type="submit" text="confirm" />
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
      case "Copy":
      case "Error":
      case "Manual":
        return (
          <Button className="text" text="back" handleClick={handleConfirm} />
        );
      case "Template":
        return null;
      default:
        return (
          <>
            <Button className="text" text="no" handleClick={handleCancel} />
            <Button className="text" text="yes" handleClick={handleConfirm} />
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
          className={title === "Template" ? "template-content" : ""}
        >
          {handleTitle(title)}
          <ButtonContainer>{handleButton(title)}</ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
