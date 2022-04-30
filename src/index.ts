import * as browser from './base64-browser';
import * as server from './base64-server';

const nextBase64 = typeof window === 'undefined' ? server : browser;

const decode = nextBase64.decode;

const encode = nextBase64.encode;

export { decode, encode };

export default nextBase64;
