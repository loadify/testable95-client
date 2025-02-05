import Button from "./Button";

import useLineBlockStore from "../../store/useLineBlockStore";
import useModalStore from "../../store/useModalStore";
import useTemplateStore from "../../store/useTemplateStore";

import {
	ModalBackground,
	ModalContainer,
	ModalContent,
} from "../../style/ModalStyle";
import { Header, ButtonContainer } from "../../style/CommonStyle";
import { FormContainer, SelectBox } from "../../style/SelectBoxStyle";
import type { ModalProps } from "../../types/components";

const Modal = ({ title, content, handleCancel, handleConfirm }: ModalProps) => {
	const { setLineBlocks } = useLineBlockStore();
	const { closeTemplateModal } = useModalStore();
	const { templates } = useTemplateStore();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const selectedValue = (event.target as HTMLFormElement).template.value;
		const selectedTemplate = templates[selectedValue as keyof typeof templates];

		setLineBlocks(selectedTemplate);
		closeTemplateModal();
	};

	const handleTitle = (title: string) => {
		if (title === "템플릿 선택") {
			return (
				<>
					<p className="template-modal-content">{content}</p>
					<FormContainer onSubmit={handleSubmit}>
						<SelectBox name="template">
							<option value="login">로그인</option>
							<option value="payment">결제</option>
							<option value="signup">회원가입</option>
							<option value="search">검색</option>
						</SelectBox>
						<ButtonContainer className="form-button-container">
							<Button
								className="under-form"
								type="button"
								text="뒤로"
								handleClick={closeTemplateModal}
							/>
							<Button className="under-form" type="submit" text="확인" />
						</ButtonContainer>
					</FormContainer>
				</>
			);
		}
		return <p className="modal-content">{content}</p>;
	};

	const handleButton = (title: string) => {
		switch (title) {
			case "템플릿 선택":
				return null;
			case "복사 성공":
			case "에러":
				return (
					<Button className="text" text="뒤로" handleClick={handleConfirm} />
				);
			default:
				return (
					<>
						<Button className="text" text="아니오" handleClick={handleCancel} />
						<Button className="text" text="예" handleClick={handleConfirm} />
					</>
				);
		}
	};

	return (
		<ModalBackground onClick={handleCancel}>
			<ModalContainer onClick={(event) => event.stopPropagation()}>
				<Header>
					<h2>{title}</h2>
				</Header>
				<ModalContent
					className={title === "템플릿 선택" ? "template-content" : ""}
				>
					{handleTitle(title)}
					<ButtonContainer>{handleButton(title)}</ButtonContainer>
				</ModalContent>
			</ModalContainer>
		</ModalBackground>
	);
};

export default Modal;
