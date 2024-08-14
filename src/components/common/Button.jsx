import ButtonContainer from "../../style/ButtonStyle";

const Button = ({ type, text }) => {
  let buttonType;

  switch (type) {
    case "text":
      buttonType = "text-button";
      break;
    case "resize":
      buttonType = "resize-button";
      break;
    default:
      buttonType = "default-button";
  }

  return (
    <ButtonContainer>
      <button className={buttonType}>{text}</button>
    </ButtonContainer>
  );
};

export default Button;
