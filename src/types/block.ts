interface Block {
  id: string;
  type?: string;
  actions?: string[];
}

export type BlockType<T> = Block & T;

export interface InputBlockType {
  _id?: null | undefined;
  id: string;
  parameter: string;
  value: string;
}

export interface MethodBlockType {
  _id?: null | undefined;
  id: string;
  method: string;
}

export interface LineBlockType<T> {
  id?: string;
  blocks: BlockType<T>[];
}
