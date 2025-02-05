import { create } from "zustand";
import type { TsetCodeState } from "../types/store";

const useTestCodeStore = create<TsetCodeState>((set) => ({
	testCodes: "",
	setTestCodes: (testCodes) => set({ testCodes }),
}));

export default useTestCodeStore;
