import InputBlock from "./InputBlock";
import MethodBlock from "./MethodBlock";

import { LineBlockContainer } from "../../style/BlockStyle";

const LineBlock = ({ number, blocks }) => {
  return (
    <LineBlockContainer>
      {number}
      {blocks.map((block) => {
        switch (block.type) {
          case "input":
            return (
              <InputBlock
                key={block.id}
                parameter={block.parameter}
                draggedValue={block.value}
              />
            );
          case "method":
            return <MethodBlock key={block.id} method={block.method} />;
          default:
            return;
        }
      })}
    </LineBlockContainer>
  );
};

export default LineBlock;
