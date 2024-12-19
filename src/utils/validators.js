const hasBlock = (lineBlocks) => {
  return lineBlocks.some((lineBlock) => lineBlock.blocks.length > 0);
};

const hasMethodBlock = (lineBlocks) => {
  return lineBlocks.every((lineBlock) =>
    lineBlock.blocks.some((block) => block.type === "method"),
  );
};

const hasTestCodes = (testCodes) => {
  return testCodes.length > 0;
};

export { hasBlock, hasMethodBlock, hasTestCodes };
