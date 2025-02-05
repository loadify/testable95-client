import { ButtonContainer } from "../../style/ButtonStyle";

import type { ButtonProps } from "../../types/components";

const Button = ({
	type,
	className,
	text,
	isDisabled,
	handleClick,
}: ButtonProps) => {
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
