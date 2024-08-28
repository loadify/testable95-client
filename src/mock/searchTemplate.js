// 서치 템플릿

import { v4 as uuidv4 } from "uuid";

const searchTemplate = [
  {
    id: uuidv4(),
    blocks: [
      { id: uuidv4(), parameter: "url", type: "input", value: "" },
      { id: uuidv4(), method: "이동합니다.", type: "method", value: undefined },
    ],
  },
  {
    id: uuidv4(),
    blocks: [
      { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
      { id: uuidv4(), parameter: "anything", type: "input", value: "" },
      { id: uuidv4(), method: "입력합니다.", type: "method", value: undefined },
    ],
  },
  {
    id: uuidv4(),
    blocks: [
      { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
      { id: uuidv4(), method: "클릭합니다.", type: "method", value: undefined },
    ],
  },
  {
    id: uuidv4(),
    blocks: [
      { id: uuidv4(), parameter: "class (.)", type: "input", value: "" },
      {
        id: uuidv4(),
        method: "이동을 대기합니다.",
        type: "method",
        value: undefined,
      },
    ],
  },
  {
    id: uuidv4(),
    blocks: [
      { id: uuidv4(), parameter: "class (.)", type: "input", value: "" },
      { id: uuidv4(), parameter: "count", type: "input", value: "" },
      {
        id: uuidv4(),
        method: "개수를 확인합니다.",
        type: "method",
        value: undefined,
      },
    ],
  },
];

export default searchTemplate;
