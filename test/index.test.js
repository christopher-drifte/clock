import { date } from "../src/index.js";

test("date export matches today's date", () => {
  const today = `Today is ${new Date().toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  )}`;
  expect(date).toBe(today);
});
