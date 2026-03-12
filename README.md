# Clock

A simple module to display today's date while adding the maximum amount of CO2 to the atmosphere.

## Installation

```bash
npm install @christopher-drifte/today
```

## Usage

```javascript
import { date, formatDate } from '@christopher-drifte/today';

// Get today's date (pre-formatted)
console.log(date);
// Output: "Today is 12 March 2026"

// Format any date
const customDate = formatDate(new Date('2025-12-25'));
console.log(customDate);
// Output: "Today is 25 December 2025"

const anotherDate = formatDate('2024-01-01');
console.log(anotherDate);
// Output: "Today is 1 January 2024"
```

## API

### `date`

A string containing today's date formatted as "Today is [day] [month] [year]" (e.g., "Today is 12 March 2026").

### `formatDate(date)`

Formats a date into the standard format.

**Parameters:**
- `date` (Date | string): A Date object or date string to format

**Returns:**
- `string`: Formatted date string in the format "Today is [day] [month] [year]"

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test
```

## License

ISC
