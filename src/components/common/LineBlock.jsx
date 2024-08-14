import InputBlock from "./InputBlock";
import MethodBlock from "./MethodBlock";

import { LineBlockContainer } from "../../style/BlockStyle";

const LineBlock = ({ number, blocks }) => {
  return (
    <LineBlockContainer>
      {number}
      {blocks.map((block) => {
        if (block.type === "input") {
          return <InputBlock key={block.id} parameter={block.parameter} />;
        }
        if (block.type === "method") {
          return <MethodBlock key={block.id} method={block.method} />;
        }
      })}
    </LineBlockContainer>
  );
};

export default LineBlock;
