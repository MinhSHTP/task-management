const taskResolvers = require("./taskResolvers");

describe("Verify Task Resolver...", () => {
  test("Exported queries and mutations", () => {
    expect(
      Object.keys(taskResolvers).includes("queries") &&
        Object.keys(taskResolvers).includes("mutations")
    ).toBe(true);
  });
});
