import { useEffect, useState } from "react";

const useButtonState = (lineBlocks, showCodeBox) => {
  const [isTextButtonDisabled, setIsTextButtonDisabled] = useState({
    next: false,
    reset: false,
    create: false,
    copy: true,
  });

  useEffect(() => {
    const hasBlock = lineBlocks.some(
      (lineBlock) => lineBlock.blocks.length > 0,
    );
    const hasMethodBlock = lineBlocks.every((lineBlock) =>
      lineBlock.blocks.some((block) => block.type === "method"),
    );

    setIsTextButtonDisabled({
      reset: !hasBlock,
      next: !hasMethodBlock,
      create: !hasMethodBlock,
      copy: !showCodeBox,
    });
  }, [lineBlocks, showCodeBox]);

  return isTextButtonDisabled;
};

export default useButtonState;
