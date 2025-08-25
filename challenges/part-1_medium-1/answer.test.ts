const filename = "./answer.ts";
let answer;

describe("challenge part-1_medium-1", () => {
  it("should load the function from answer.ts file", async () => {
    answer = (await import(filename)).default;
    expect(answer.default).toBeDefined();
  });
  it("should convert a byte (255) to its corresponding 8 bits (11111111)", async () => {
    const bits = answer.default(255);
    expect(bits).toEqual([1, 1, 1, 1, 1, 1, 1, 1]);
  });
  it("should convert a byte (0) to its corresponding 8 bits (00000000)", async () => {
    const bits = answer.default(0);
    expect(bits).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });
  it("should convert a byte (192) to its corresponding 8 bits (11000000)", async () => {
    const bits = answer.default(192);
    expect(bits).toEqual([1, 1, 0, 0, 0, 0, 0, 0]);
  });
  it("should convert a byte (117) to its corresponding 8 bits (01110101)", async () => {
    const bits = answer.default(117);
    expect(bits).toEqual([0, 1, 1, 1, 0, 1, 0, 1]);
  });
});
