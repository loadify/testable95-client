import { useEffect } from "react";
import useBlockStore from "../store/useBlockStore";
import useLineBlockStore from "../store/useLineBlockStore";

const useKeyboardEvent = () => {
  const { selectedBlockId, set } = useBlockStore();
  const { lineBlocks, setLineBlocks, cleanUpEmptyLineBlock } =
    useLineBlockStore();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Delete" || event.key === "Backspace") {
        if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) {
          return;
        }

        if (selectedBlockId !== null) {
          const newLineBlocks = lineBlocks.map((lineBlock) => ({
            ...lineBlock,
            blocks: lineBlock.blocks.filter(
              (block) => block.id !== selectedBlockId,
            ),
          }));

          setLineBlocks(cleanUpEmptyLineBlock(newLineBlocks));

          set({ selectedBlockId: null });
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBlockId, lineBlocks, setLineBlocks, cleanUpEmptyLineBlock, set]);

  return null;
};

export default useKeyboardEvent;
