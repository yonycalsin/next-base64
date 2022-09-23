import { decode, encode } from '../src';

describe('base64', () => {
  it('decode', () => {
    expect(decode('YWJj')).toBe('abc');
  });

  it('encode', () => {
    expect(encode('abc')).toBe('YWJj');
  });
});
