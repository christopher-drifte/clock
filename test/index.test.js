import { date, formatDate } from "../src/index.js";

test("date export matches today's date", () => {
  const today = formatDate(new Date());
  expect(date).toBe(today);
});
