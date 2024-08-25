import { ButtonContainer } from "../../style/ButtonStyle";

const Button = ({ type, text, isDisabled, handleClick, isMinimized }) => {
  let buttonType;
  let buttonText = text;

  switch (type) {
    case "text":
      buttonType = "text-button";
      break;
    case "resize":
      buttonType = "resize-button";
      buttonText = isMinimized ? "ㅁ" : "_";
      break;
    default:
      buttonType = "default-button";
  }

  return (
    <ButtonContainer>
      {isDisabled ? (
        <button className={buttonType} onClick={handleClick} disabled>
          {buttonText}
        </button>
      ) : (
        <button className={buttonType} onClick={handleClick}>
          {buttonText}
        </button>
      )}
    </ButtonContainer>
  );
};

export default Button;
