import { leadingZero } from "../src/timer";

test("should have 0", () => {
  expect(leadingZero(1)).toBe("01");
});