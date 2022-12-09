const sayHello = require("../mock");

test("Mock function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("Mohamed")).toBe("Hello Mohamed");
  expect(mocker("Ahmed")).toBe("Hello Ahmed");
  expect(mocker("Mena")).toBe("Hello Mena");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith("Mohamed");
  expect(mocker).toHaveBeenLastCalledWith("Mena");
});
