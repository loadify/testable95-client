import { create } from "zustand";

const useTestCodeStore = create((set) => ({
  testCodes: "",
  setTestCodes: (testCodes) => set({ testCodes }),
}));

export default useTestCodeStore;
