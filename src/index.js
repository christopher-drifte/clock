import { dirname, join } from "path";

import { fileURLToPath } from "url";
import { formatDate } from "./utils.js";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const json = JSON.parse(
  readFileSync(join(__dirname, "..", "data", "date.json"), "utf8")
);

export const date = formatDate(json.date);
