import { ButtonContainer } from "../../style/ButtonStyle";

const Button = ({ type, text }) => {
  let className;

  switch (type) {
    case "text":
      className = "text-button";
      break;
    case "resize":
      className = "resize-button";
      break;
    default:
      className = "default-button";
  }

  return (
    <ButtonContainer>
      <button className={className}>{text}</button>
    </ButtonContainer>
  );
};

export default Button;
