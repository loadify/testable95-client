import { useEffect, useState } from "react";

const useButtonState = (lineBlocks) => {
  const [isTextButtonDisabled, setIsTextButtonDisabled] = useState({
    next: false,
    reset: false,
    create: false,
  });

  useEffect(() => {
    const hasBlock = lineBlocks.some(
      (lineBlock) => lineBlock.blocks.length > 0,
    );
    setIsTextButtonDisabled((prevStates) => ({
      ...prevStates,
      reset: !hasBlock,
    }));
  }, [lineBlocks]);

  useEffect(() => {
    const hasMethodBlock = lineBlocks.every((lineBlock) =>
      lineBlock.blocks.some((block) => block.type === "method"),
    );
    setIsTextButtonDisabled((prevStates) => ({
      ...prevStates,
      next: !hasMethodBlock,
      create: !hasMethodBlock,
    }));
  }, [lineBlocks]);

  return isTextButtonDisabled;
};

export default useButtonState;