import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useTemplateStore = create(() => ({
  templates: {
    login: [
      {
        id: uuidv4(),
        blocks: [
          {
            id: uuidv4(),
            parameter: "url",
            type: "input",
            value: "http://localhost:3000",
          },
          {
            id: uuidv4(),
            method: "이동합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          {
            id: uuidv4(),
            parameter: "id (#)",
            type: "input",
            value: "usernameInput",
          },
          {
            id: uuidv4(),
            parameter: "anything",
            type: "input",
            value: "your_username",
          },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          {
            id: uuidv4(),
            parameter: "id (#)",
            type: "input",
            value: "passwordInput",
          },
          {
            id: uuidv4(),
            parameter: "anything",
            type: "input",
            value: "your_password",
          },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          {
            id: uuidv4(),
            parameter: "class (.)",
            type: "input",
            value: "submit-button",
          },
          {
            id: uuidv4(),
            method: "클릭합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          {
            id: uuidv4(),
            parameter: "milliseconds",
            type: "input",
            value: "4000",
          },
          {
            id: uuidv4(),
            method: "(ms) 대기합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          {
            id: uuidv4(),
            parameter: "class (.)",
            type: "input",
            value: "modal-content",
          },
          {
            id: uuidv4(),
            method: "보이는지 확인합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          {
            id: uuidv4(),
            parameter: "url",
            type: "input",
            value: "http://localhost:3000",
          },
          {
            id: uuidv4(),
            method: "URL이 같은지 확인합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
    ],
    payment: [
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "url", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "이동합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "클릭합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "url", type: "input", value: "" },
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
          { id: uuidv4(), parameter: "url", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "이동합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "class (.)", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "대기합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
    ],
    signup: [
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "url", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "이동합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "클릭합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "url", type: "input", value: "" },
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
          {
            id: uuidv4(),
            method: "대기합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
    ],
    search: [
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "url", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "이동합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          { id: uuidv4(), parameter: "anything", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "입력합니다.",
            type: "method",
            value: undefined,
          },
        ],
      },
      {
        id: uuidv4(),
        blocks: [
          { id: uuidv4(), parameter: "id (#)", type: "input", value: "" },
          {
            id: uuidv4(),
            method: "클릭합니다.",
            type: "method",
            value: undefined,
          },
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
    ],
  },
}));

export default useTemplateStore;
