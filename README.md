[![CI](https://github.com/andriikasparevych/string-to-number/actions/workflows/ci.yml/badge.svg)](https://github.com/andriikasparevych/string-to-number/actions/workflows/ci.yml)

# string-to-number NPM Package

The **string-to-number** package is a simple yet powerful utility for converting strings to numbers in TypeScript. This package aims to provide an effortless way to handle string-to-number conversions, catering to scenarios where data parsing and transformation are a common requirement.

## Features

- **Effortless Conversion:** Convert strings containing numerical values into their corresponding number representations with a single function call.
- **TypeScript Support:** Built using TypeScript, the package ensures type safety and enhances development productivity by offering clear type definitions.
- **Versatile Usage:** Whether you're working with user input, API responses, or any other string-based numeric data, this package simplifies the conversion process.

## Installation

You can easily install the package via NPM using the following command:

```bash
npm install ts-string-to-number
```

## Usage

Using the **ts-string-to-number** package is straightforward. Import the package and call the `convertToNumber` function with your desired string input:

```typescript
import { convertToNumber } from 'ts-string-to-number';

const stringNumber = '42';
const numericValue = convertToNumber(stringNumber);

console.log(numericValue); // Outputs: 42 (number)
```

## Example Scenarios

- **Form Data Processing:** Convert user-provided string-based numerical inputs into usable numeric data for calculations and analysis.
- **API Response Parsing:** Parse API responses containing string-encoded numbers into the appropriate numeric format for further manipulation.

## Contribution

Contributions to the **ts-string-to-number** package are welcome! Feel free to open issues for suggestions, bug reports, or feature requests. Pull requests are encouraged for those who want to directly contribute to the project's development.

## License

This project is licensed under the MIT License.
