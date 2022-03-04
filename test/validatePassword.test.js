const validatePassword = require("./validatePassword");

test("return false for empty password", () => {
  expect(validatePassword("")).toBe(false);
});

test("return false for password's length < 8", () => {
  expect(validatePassword("abc123489")).toBe(false);
});

test("return false for password without numbers", () => {
  expect(validatePassword("abcjsdjdhdh")).toBe(false);
});

test("return false for password without letters", () => {
  expect(validatePassword("2134567865")).toBe(false);
});

test("returns true for password with numbers, letters, >= 8 characters", () => {
  expect(validatePassword("12512ajskdhgk")).toBe(true);
});

test("returns false for password with numbers, letters, < 8 characters", () => {
  expect(validatePassword("a1")).toBe(false);
});

test("returns true for password with numbers, uppercase letters, and >= 8 characters", () => {
  expect(validatePassword("12512ASDFA")).toBe(true);
});

test("returns true for password with numbers, uppercase and lowercase letters, and >= 8 characters", () => {
  expect(validatePassword("12512ASDasdfasd")).toBe(true);
});
