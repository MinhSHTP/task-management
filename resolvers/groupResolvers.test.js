const groupResolvers = require("./groupResolvers");

describe("Verify Group Resolver...", () => {
  test("Exported queries and mutations", () => {
    expect(
      Object.keys(groupResolvers).includes("queries") &&
        Object.keys(groupResolvers).includes("mutations")
    ).toBe(true);
  });
});
