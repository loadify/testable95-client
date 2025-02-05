import useModalStore from "../store/useModalStore";
import useTestCodeStore from "../store/useTestCodeStore";

import CodeBox from "./common/CodeBox";
import Button from "./common/Button";
import Modal from "./common/Modal";
import Fallback from "./common/Fallback";

import { hasTestCodes } from "../utils/validators";

import { Section, Header, Content } from "../style/CommonStyle";
import type { TestCodeDashboardProps } from "../types/components";

const TestCodeDashboard = ({ isLoading, isError }: TestCodeDashboardProps) => {
	const {
		showCopyModal,
		openCopyModal,
		closeCopyModal,
		showErrorModal,
		openErrorModal,
		closeErrorModal,
	} = useModalStore();
	const { testCodes } = useTestCodeStore();

	const updateCopy = () => {
		openCopyModal();
	};

	const handleCopyConfirm = async () => {
		try {
			await navigator.clipboard.writeText(testCodes);
		} catch (error) {
			closeCopyModal();
			openErrorModal();
		}
		closeCopyModal();
	};

	return (
		<Section>
			<Header>
				<h2>테스트 코드</h2>
			</Header>
			<Content className="testcode-dashboard-content">
				{isError ? (
					<Fallback text="Error" />
				) : isLoading ? (
					<Fallback text="Loading" />
				) : (
					<CodeBox testCode={testCodes} />
				)}
				<Button
					className="text-button copy"
					text="복사"
					isDisabled={!hasTestCodes(testCodes)}
					handleClick={updateCopy}
				/>
			</Content>
			{showCopyModal && (
				<Modal
					title="복사 성공"
					content="복사가 완료되었습니다."
					handleConfirm={handleCopyConfirm}
					handleCancel={closeCopyModal}
				/>
			)}
			{showErrorModal && (
				<Modal
					title="에러"
					content="관리자에게 문의하시오."
					handleConfirm={closeErrorModal}
					handleCancel={closeErrorModal}
				/>
			)}
		</Section>
	);
};

export default TestCodeDashboard;
