import { describe, it, expect } from "vitest";
import { hasBlock, hasMethodBlock, hasTestCodes } from "./validators";

describe("hasBlock 함수", () => {
  it("라인 블록에 최소한 하나의 블록이 포함한다면, true를 반환합니다.", () => {
    const lineBlocks = [{ blocks: [] }, { blocks: [{ type: "input" }] }];

    expect(hasBlock(lineBlocks)).toBe(true);
  });

  it("모든 라인 블록에 블록이 없다면, false를 반환합니다.", () => {
    const lineBlocks = [{ blocks: [] }, { blocks: [] }];

    expect(hasBlock(lineBlocks)).toBe(false);
  });
});

describe("hasMethodBlock 함수", () => {
  it("모든 라인 블록에 최소한 하나의 메서드 블록을 포함한다면, true를 반환합니다.", () => {
    const lineBlocks = [
      { blocks: [{ type: "method" }, { type: "input" }] },
      { blocks: [{ type: "method" }] },
    ];

    expect(hasMethodBlock(lineBlocks)).toBe(true);
  });

  it("메서드 블록이 없는 라인 블록이 존재한다면, false를 반환합니다.", () => {
    const lineBlocks = [
      { blocks: [{ type: "input" }] },
      { blocks: [{ type: "method" }] },
    ];

    expect(hasMethodBlock(lineBlocks)).toBe(false);

    const lineBlocks2 = [{ blocks: [{ type: "input" }] }];

    expect(hasMethodBlock(lineBlocks2)).toBe(false);
  });
});

describe("hasTestCodes 함수", () => {
  it("테스트 코드가 존재한다면 true를 반환합니다.", () => {
    const testCodes = "await page.waitForURL(`https://www.google.com`)";

    expect(hasTestCodes(testCodes)).toBe(true);
  });

  it("테스트 코드가 존재하지 않는다면 false를 반환합니다.", () => {
    const testCodes = "";

    expect(hasTestCodes(testCodes)).toBe(false);
  });
});
