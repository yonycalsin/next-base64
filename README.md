# next-base64

`next-base64` is a library for `client-side` and `server-side` base64 encoding and decoding

[![CI](https://github.com/yonycalsin/next-base64/actions/workflows/main.yml/badge.svg)](https://github.com/yonycalsin/next-base64/actions/workflows/main.yml)
<a href="https://github.com/yonycalsin/next-base64"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/next-base64" target="_blank">
<img src="https://img.shields.io/npm/v/next-base64" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/next-base64" target="_blank">
<img src="https://img.shields.io/npm/l/next-base64" alt="Package License" /></a>
<a href="https://www.npmjs.com/next-base64" target="_blank">
<img src="https://img.shields.io/npm/dm/next-base64" alt="NPM Downloads" /></a>
<a href="https://github.com/yonycalsin/next-base64"><img src="https://img.shields.io/badge/Github%20Page-next.base64-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonycalsin"><img src="https://img.shields.io/badge/Author-Yony%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>

## Installation

```bash
# Using npm
npm install --save next-base64@latest

# Using yarn
yarn add next-base64@latest
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

`next-base64` under [License.](LICENSE)
