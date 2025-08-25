const filename = "./answer.ts";
let answer;

describe("challenge part-1_hard-1", () => {
  it("should load the function from answer.ts file", async () => {
    answer = (await import(filename)).default;
    expect(answer.default).toBeDefined();
  });
  it("should load image and return byte array", async () => {
    const bytes = await answer.default("./challenges/A1/6pixels.png");
    const expectedBytes = [
      255, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 0, 0, 255, 255, 0, 0,
    ];
    expect(bytes).toEqual(expectedBytes);
  });
});
