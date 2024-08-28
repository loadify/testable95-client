import Button from "./Button";

import loginTemplate from "../../mock/loginTemplate";
import paymentTemplate from "../../mock/paymentTemplate";
import signupTemplate from "../../mock/signUpTemplate";
import searchTemplate from "../../mock/searchTemplate";

import useStore from "../../store";

import {
  ModalBackground,
  ModalContainer,
  ModalContent,
} from "../../style/ModalStyle";
import { Header, ButtonContainer } from "../../style/CommonStyle";
import { FormContainer, SelectBox } from "../../style/SelectBoxStyle";

const Modal = ({ title, content, handleCancel, handleConfirm }) => {
  const { closeTemplateModal, setLineBlocks } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedValue = event.target.template.value;
    switch (selectedValue) {
      case "login":
        setLineBlocks(loginTemplate);
        break;
      case "payment":
        setLineBlocks(paymentTemplate);
        break;
      case "signup":
        setLineBlocks(signupTemplate);
        break;
      case "search":
        setLineBlocks(searchTemplate);
        break;
      default:
        null;
    }
    closeTemplateModal();
  };

  const handleTitle = (title) => {
    switch (title) {
      case "Manual":
        return <img src={content} />;
      case "Template":
        return (
          <>
            <p className="template-content">{content}</p>
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
                <Button className="under-form" type="submit" text="create" />
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
    <ModalBackground>
      <ModalContainer>
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
