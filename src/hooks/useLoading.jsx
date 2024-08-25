import { useState, useEffect } from "react";

import useStore from "../store";

const useLoading = () => {
  const [content, setContent] = useState("Loading");
  const [isLoading, setIsLoading] = useState(false);
  const [showCodeBox, setShowCodeBox] = useState(false);
  const { testCodes, isCreateClicked, createAudio } = useStore();

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
