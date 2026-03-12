import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const json = JSON.parse(readFileSync(join(__dirname, "..", "data", "date.json"), "utf8"));

// Format a date in the format: 1st of January, 2026
export const formatDate = (date) => {
  return `Today is ${new Date(date).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  )}`;
};

export const date = formatDate(json.date);
