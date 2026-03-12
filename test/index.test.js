import { date } from "../src/index.js";
import { formatDate } from "../src/utils.js";

test("date export matches today's date", () => {
  const today = formatDate(new Date());
  expect(date).toBe(today);
});
