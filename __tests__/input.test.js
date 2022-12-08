const filterName = require("../input");

describe("Check on neme.", () => {
  test("check if input is empty.", () => {
    expect(filterName()).toBe("Unkwon");
  });

  test("check if there are ane spaces.", () => {
    expect(filterName(" Mohamed ")).toBe("Mohamed");
  });
});
