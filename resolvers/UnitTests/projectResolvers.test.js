const projectResolvers = require("../projectResolvers");

describe("Verify Project Resolver...", () => {
  test("Exported queries and mutations", () => {
    expect(
      Object.keys(projectResolvers).includes("queries") &&
        Object.keys(projectResolvers).includes("mutations")
    ).toBe(true);
  });
});
