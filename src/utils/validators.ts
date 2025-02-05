import type {
  InputBlockType,
  LineBlockType,
  MethodBlockType,
} from "../types/block";

const hasBlock = (
  lineBlocks: LineBlockType<InputBlockType | MethodBlockType>[]
) => {
  return lineBlocks.some((lineBlock) => lineBlock.blocks.length > 0);
};

const hasMethodBlock = (
  lineBlocks: LineBlockType<InputBlockType | MethodBlockType>[]
) => {
  return lineBlocks.every((lineBlock) =>
    lineBlock.blocks.some((block) => block.type === "method")
  );
};

const hasTestCodes = (testCodes: string) => {
  return testCodes.length > 0;
};

export { hasBlock, hasMethodBlock, hasTestCodes };
