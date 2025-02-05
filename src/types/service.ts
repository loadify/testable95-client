import type { BlockType, MethodBlockType, InputBlockType } from "./block";

export interface FetchBlocksReturn {
  methodBlocks: BlockType<MethodBlockType>[];
  inputBlocks: BlockType<InputBlockType>[];
}

export interface HandleBlocksReturn {
  formattedTestCodes: string;
}
