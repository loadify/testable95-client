import axiosInstance from "./instance";

import type {
  InputBlockType,
  LineBlockType,
  MethodBlockType,
} from "../types/block";
import type { FetchBlocksReturn, HandleBlocksReturn } from "../types/service";

const fetchBlocks = async (): Promise<FetchBlocksReturn> => {
  const response = await axiosInstance.get("/blocks");

  return response.data;
};

const handleBlocks = async (
  blockData: LineBlockType<InputBlockType | MethodBlockType>[]
): Promise<HandleBlocksReturn> => {
  const response = await axiosInstance.post("/blocks/generate", { blockData });

  return response.data;
};

export { fetchBlocks, handleBlocks };
