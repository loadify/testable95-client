import axiosInstance from "./instance";

const fetchBlocks = async () => {
  const response = await axiosInstance.get("/");

  return response.data;
};

const handleBlocks = async (blockData) => {
  const response = await axiosInstance.post("/", { blockData });

  return response.data;
};

export { fetchBlocks, handleBlocks };
