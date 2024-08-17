import Button from "./Button";

import {
  ModalBackground,
  ModalContainer,
  ModalContent,
} from "../../style/ModalStyle";
import { Header, ButtonContainer } from "../../style/CommonStyle";

const Modal = ({ title, content, handleCancel, handleConfirm }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <Header>
          <h2>{title}</h2>
        </Header>
        <ModalContent>
          <p className="modal-content">{content}</p>
          <ButtonContainer>
            <Button type="text" text="no" handleClick={handleCancel} />
            <Button type="text" text="yes" handleClick={handleConfirm} />
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
