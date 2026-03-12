import { formatDate } from "./utils.js";
import dateData from "../data/date.json" with { type: "json" };

export const date = formatDate(dateData.date);
