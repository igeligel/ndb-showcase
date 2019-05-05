const add = require("../index");

describe("add functionality", () => {
  it("should add numbers passed to the function", () => {
    const result = add(1, 2);
    debugger
    expect(result).toBe(3);
  });
});
