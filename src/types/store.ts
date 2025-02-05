import type {
  BlockType,
  InputBlockType,
  LineBlockType,
  MethodBlockType,
} from "./block";

export interface BlockState {
  selectedBlockId: string | null;
  inputBlocks: InputBlockType[];
  methodBlocks: MethodBlockType[];
  activeTab: string;
  actions: string[];

  setSelectedBlockId: (selectedBlockId: string) => void;
  setInputBlocks: (inputBlocks: InputBlockType[]) => void;
  setMethodBlocks: (methodBlocks: MethodBlockType[]) => void;
  setActiveTab: (activeTab: string) => void;
  setActions: (actions: string[]) => void;
  handleDragDelete: () => void;
  updateBlockValue: (blockId: string, newValue: string) => void;
}

export interface DragState<T> {
  draggedBlock: BlockType<T> | null;
  draggedLineIndex: number | null;
  handleBlockDragStart: (block: BlockType<T>, lineIndex: number) => void;
  handleBlockDrop: (
    targetLineIndex: number,
    draggedBlockId: string | null,
    targetBlockId: string | null
  ) => void;
  handleBlockDragOver: (event: React.DragEvent) => void;
  handleLineBlockDragStart: (index: number) => void;
  handleLineBlockDrop: (targetIndex: number) => void;
}

export interface LineBlockState<T> {
  lineBlocks: LineBlockType<T>[];
  setLineBlocks: (lineBlocks: LineBlockType<T>[]) => void;
  handleCreateLineBlock: (lineBlocks: LineBlockType<T>[]) => void;
  handleResetLineBlocks: () => void;
  cleanUpEmptyLineBlock: (lineBlocks: LineBlockType<T>[]) => LineBlockType<T>[];
}

export interface ModalState {
  selectedTemplate: string | null;
  showTemplateModal: boolean;
  showResetModal: boolean;
  showCreateModal: boolean;
  showCopyModal: boolean;
  showErrorModal: boolean;

  setSelectedTemplate: (value: string) => void;
  openTemplateModal: () => void;
  closeTemplateModal: () => void;
  openResetModal: () => void;
  closeResetModal: () => void;
  openCreateModal: () => void;
  closeCreateModal: () => void;
  openCopyModal: () => void;
  closeCopyModal: () => void;
  openErrorModal: () => void;
  closeErrorModal: () => void;
}

export interface TsetCodeState {
  testCodes: string;
  setTestCodes: (testCodes: string) => void;
}
