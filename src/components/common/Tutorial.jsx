import { useState } from "react";

import Button from "./Button";

import {
  ModalBackground,
  ModalContainer,
  ModalContent,
} from "../../style/ModalStyle";
import { Header, ButtonContainer } from "../../style/CommonStyle";
import { ImageContainer, ContentContainer } from "../../style/TutorialStyle";

const TutorialModal = ({ title, tutorials, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButton = () => {
    if (currentIndex < tutorials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose();
    }
  };

  const handlePreviousButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentTutorial = tutorials[currentIndex];

  return (
    <ModalBackground>
      <ModalContainer>
        <Header>
          <h2>{title}</h2>
        </Header>
        <ModalContent>
          <ImageContainer>
            <img
              src={currentTutorial.image}
              alt={`Tutorial step ${currentIndex + 1}`}
            />
          </ImageContainer>
          <ContentContainer>
            {currentTutorial.content.split(".").join(".\n")}
          </ContentContainer>
          <ButtonContainer>
            <Button
              type="text"
              text="prev"
              handleClick={handlePreviousButton}
              disabled={currentIndex === 0}
            />
            <Button
              type="text"
              text={currentIndex === tutorials.length - 1 ? "start" : "next"}
              handleClick={handleNextButton}
            />
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default TutorialModal;