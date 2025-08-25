const filename = "./answer.ts";
let answer;

describe("challenge part-1_hard-2", () => {
  it("should load the function from answer.ts file", async () => {
    answer = (await import(filename)).default;
    expect(answer.default).toBeDefined();
  });
  it("should convert these 18 bits into 2 bytes (117, 192, and the 2 last bits are lost)", async () => {
    const bits = answer.default([
      0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
    ]);
    expect(bits).toEqual([117, 192]);
  });
  it("should not find any byte (because there is not enough bits)", async () => {
    const bits = answer.default([0, 0, 0, 1, 1]);
    expect(bits).toEqual([]);
  });
  it("should convert these 32 bits into 4 bytes (255, 117, 192, 0)", async () => {
    const bits = answer.default([
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
    ]);
    expect(bits).toEqual([255, 117, 192, 0]);
  });
});
