import axiosInstance from "./instance";

const fetchBlocks = async () => {
  const response = await axiosInstance.get("/");

  return response.data;
};

export { fetchBlocks };
