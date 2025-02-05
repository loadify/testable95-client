import type { BlockType, InputBlockType, MethodBlockType } from "./block";

interface BlockProps {
  _id?: string;
  draggable?: boolean;
  onDragStart?: (event: React.DragEvent) => void;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  text: string;
  isDisabled?: boolean;
  handleClick?: () => void | Promise<void>;
}

export interface ModalProps {
  title: string;
  content: string;
  handleCancel: () => void;
  handleConfirm: (value?: string) => void | Promise<void>;
}

export interface CodeBoxProps {
  testCode: string;
}

export interface FallbackProps {
  text: string;
}

export interface InputBlockProps extends BlockProps {
  inputBlockId?: string;
  parameter: string;
  saveBlockData: (block: BlockType<InputBlockType>, lineIndex?: number) => void;
  draggedValue?: string;
}

export interface MethodBlockProps extends BlockProps {
  methodBlockId?: string;
  method: string;
  saveBlockData: (
    block: BlockType<MethodBlockType>,
    lineIndex?: number
  ) => void;
}

export interface LineBlockProps<T> {
  index: number;
  blocks: BlockType<T>[];
  handleBlockDragStart: (block: BlockType<T>, lineBlockIndex: number) => void;
  handleBlockDrop: (
    draggedBlock: BlockType<T>,
    targetBlock: HTMLElement | null
  ) => void;
  handleLineBlockDragStart: (index: number) => void;
  handleLineBlockDrop: (index: number) => void;
}

export interface BlockDashboardProps {
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
}

export interface TestCodeDashboardProps {
  isLoading: boolean;
  isError: boolean;
}
