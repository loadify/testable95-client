import { ButtonContainer } from "../../style/ButtonStyle";

const Button = ({ type, className, text, isDisabled, handleClick }) => {
  return (
    <ButtonContainer
      type={type}
      className={className}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
