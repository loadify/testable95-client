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
          {title === "Manual" ? (
            <img src={content} />
          ) : (
            <p className="modal-content">{content}</p>
          )}
          <ButtonContainer>
            {title === "Copy" || title === "Error" || title === "Manual" ? (
              <Button type="text" text="back" handleClick={handleConfirm} />
            ) : (
              <>
                <Button type="text" text="no" handleClick={handleCancel} />
                <Button type="text" text="yes" handleClick={handleConfirm} />
              </>
            )}
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
