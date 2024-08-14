import { MethodBlockContainer } from "../../style/BlockStyle";

const MethodBlock = ({ method }) => {
  return (
    <MethodBlockContainer>
      <p className="method-block-name">{method}</p>
    </MethodBlockContainer>
  );
};

export default MethodBlock;
