import { MethodBlockContainer } from "../../style/BlockStyle";

const MethodBlock = ({ method }) => {
  return (
    <MethodBlockContainer>
      <p>{method}</p>
    </MethodBlockContainer>
  );
};

export default MethodBlock;
