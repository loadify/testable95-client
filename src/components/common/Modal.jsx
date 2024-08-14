import {
  ModalBackground,
  ModalContainer,
  ModalContent,
} from "../../style/ModalStyle";

import { Header, ButtonContainer } from "../../style/CommonStyle";

import Button from "./Button";

const Modal = ({ title, content }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <Header>
          <h2>{title}</h2>
          <Button type="resize" text="x"></Button>
        </Header>
        <ModalContent>
          <p className="modal-content">{content}</p>
          <ButtonContainer>
            <Button type="text" text="no" />
            <Button type="text" text="yes" />
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
