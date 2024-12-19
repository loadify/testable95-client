import { useState, useEffect } from "react";
import { FallbackText } from "../../style/FallbackStyle";

const Fallback = ({ text }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setContent((currentContent) =>
        currentContent === `${text}` + "..." ? `${text}` : currentContent + ".",
      );
    }, 200);

    const timerId = setTimeout(() => {
      clearInterval(loadingInterval);
    }, 1000);

    return () => {
      clearInterval(loadingInterval);
      clearTimeout(timerId);
    };
  }, []);

  return <FallbackText>{content}</FallbackText>;
};

export default Fallback;
