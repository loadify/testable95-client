import { useState, useEffect } from "react";

import useTestCodeStore from "../store/useTestCodeStore";
import useButtonStore from "../store/useButtonStore";
import useAudioStore from "../store/useAudioStore";

const useLoading = () => {
  const [content, setContent] = useState("Loading");
  const [isLoading, setIsLoading] = useState(false);
  const [showCodeBox, setShowCodeBox] = useState(false);
  const { testCodes } = useTestCodeStore();
  const { isCreateClicked } = useButtonStore();
  const { createAudio } = useAudioStore();

  useEffect(() => {
    if (testCodes) {
      setIsLoading(true);

      const loadingInterval = setInterval(() => {
        setContent((currentContent) =>
          currentContent === "Loading" + "..."
            ? "Loading"
            : currentContent + ".",
        );
      }, 200);

      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowCodeBox(true);
        createAudio.play();

        clearInterval(loadingInterval);
      }, 1000);

      return () => {
        clearInterval(loadingInterval);
        clearTimeout(timer);
      };
    }
  }, [testCodes, isCreateClicked]);

  return {
    content,
    isLoading,
    showCodeBox,
    testCodes,
  };
};

export default useLoading;
