const userResolvers = require("./userResolvers");

describe("Verify User Resolver...", () => {
  test("Exported queries and mutations", () => {
    expect(
      Object.keys(userResolvers).includes("queries") &&
        Object.keys(userResolvers).includes("mutations")
    ).toBe(true);
  });
});
