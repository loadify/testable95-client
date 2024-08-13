import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalButtonContainer,
} from "../../style/ModalStyle";

import Button from "./Button";

const Modal = ({ title, content }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <Button type="resize" text="x"></Button>
        </ModalHeader>
        <ModalContent>
          <p>{content}</p>
          <ModalButtonContainer>
            <Button type="text" text="no" />
            <Button type="text" text="yes" />
          </ModalButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
