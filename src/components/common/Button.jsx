import ButtonContainer from "../../style/ButtonStyle";

const Button = ({ type, text, handleClick, isMinimized }) => {
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
      <button onClick={handleClick} className={buttonType}>
        {buttonText}
      </button>
    </ButtonContainer>
  );
};

export default Button;
