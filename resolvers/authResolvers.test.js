const authResolvers = require("./authResolvers");

describe("Verify Auth Resolver...", () => {
  test("Exported queries and mutations", () => {
    expect(
      Object.keys(authResolvers).includes("queries") &&
        Object.keys(authResolvers).includes("mutations")
    ).toBe(true);
  });
});
