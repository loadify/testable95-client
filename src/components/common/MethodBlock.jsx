import { MethodBlockContainer } from "../../style/BlockStyle";

const MethodBlock = ({ method }) => {
  return (
    <MethodBlockContainer>
      <div>{method}</div>
    </MethodBlockContainer>
  );
};

export default MethodBlock;
