import { create } from "zustand";

import startSound from "../assets/sounds/start.mp3";
import resetSound from "../assets/sounds/reset.wav";
import createSound from "../assets/sounds/create.mp3";
import copySound from "../assets/sounds/copy.wav";

const useAudioStore = create(() => ({
  startAudio: new Audio(startSound),
  copyAudio: new Audio(copySound),
  resetAudio: new Audio(resetSound),
  createAudio: new Audio(createSound),
}));

export default useAudioStore;
