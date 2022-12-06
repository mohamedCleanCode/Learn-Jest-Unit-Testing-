const sum = require("../sum");

test("Return 0", () => {
  expect(sum()).toBe(0);
});
test("Return number1", () => {
  expect(sum(5)).toBe(5);
});
test("Return number1 + number 2", () => {
  expect(sum(5, 5)).toBe(10);
});
test("Return number1 + number 2 + number3", () => {
  expect(sum(5, 5, 5)).toBe(15);
});
test("Return result of sum all numbers", () => {
  expect(sum(5, 5, 5, 5)).toBe(20);
});
