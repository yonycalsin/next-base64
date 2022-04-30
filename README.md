# next-base64

Base64 encoding and decoding for both client-side and server-side code.

## Installation

```bash
# Using npm
npm install next-base64

# Using yarn
yarn add next-base64
```

## Usage

```ts
import nextBase64 from 'next-base64';

const base64Encoded = nextBase64.encode('Hello World');

const base64decoded = nextBase64.decode(base64Encoded);

// result
console.log(base64Encoded); // 'SGVsbG8gV29ybGQ='
console.log(base64decoded); // 'Hello World'
```

## License

MIT
