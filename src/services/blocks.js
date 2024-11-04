import axiosInstance from "./instance";

const fetchBlocks = async () => {
  const response = await axiosInstance.get("/blocks");

  return response.data;
};

const handleBlocks = async (blockData) => {
  const response = await axiosInstance.post("/blocks/generate", { blockData });

  return response.data;
};

export { fetchBlocks, handleBlocks };
