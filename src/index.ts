import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import { formatDate } from "./utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface DateData {
  date: string;
}

const json: DateData = JSON.parse(
  readFileSync(join(__dirname, "..", "data", "date.json"), "utf8")
);

export const date = formatDate(json.date);
