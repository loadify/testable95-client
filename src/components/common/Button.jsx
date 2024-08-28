import { ButtonContainer } from "../../style/ButtonStyle";

const Button = ({ type, className, text, isDisabled, handleClick }) => {
  return (
    <>
      {isDisabled ? (
        <ButtonContainer
          type={type}
          className={className}
          onClick={handleClick}
          disabled
        >
          {text}
        </ButtonContainer>
      ) : (
        <ButtonContainer
          type={type}
          className={className}
          onClick={handleClick}
        >
          {text}
        </ButtonContainer>
      )}
    </>
  );
};

export default Button;
