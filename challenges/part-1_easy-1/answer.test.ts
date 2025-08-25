const filename = "./answer.ts";
let answer;

describe("challenge part-1_easy-1", () => {
  it("should load the function from answer.ts file", async () => {
    answer = (await import(filename)).default;
    expect(answer.default).toBeDefined();
  });
  it("should convert 2 bytes (117, 192) into a string", async () => {
    const string = answer.default([117, 192]);
    expect(string).toEqual("uÀ");
  });
  it("should convert 10 bytes into a string", async () => {
    const string = answer.default([
      87, 101, 108, 108, 32, 100, 111, 110, 101, 33,
    ]);
    expect(string).toEqual("Well done!");
  });
});
