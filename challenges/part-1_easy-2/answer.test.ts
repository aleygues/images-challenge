const filename = "./answer.ts";
let answer;

describe("challenge part-1_easy-2", () => {
  it("should load the function from answer.ts file", async () => {
    answer = (await import(filename)).default;
    expect(answer.default).toBeDefined();
  });
  it("should extract the very last bit of each 8-bits array", async () => {
    const bits = answer.default(
      [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1],
      ],
      1
    );
    expect(bits).toEqual([0, 1]);
  });
  it("should extract the 4 last bits of each 8-bits array", async () => {
    const bits = answer.default(
      [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1],
      ],
      4
    );
    expect(bits).toEqual([0, 0, 0, 0, 0, 1, 0, 1]);
  });
  it("should extract all bits of each 8-bits array (act like a concat) even if number of bits to extract is greater than 8", async () => {
    const bits = answer.default(
      [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1],
      ],
      12
    );
    expect(bits).toEqual([1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1]);
  });
});
