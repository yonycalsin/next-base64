import { decode, encode } from '../src';

describe('blah', () => {
  it('decode', () => {
    expect(decode('YWJj')).toBe('abc');
  });

  it('encode', () => {
    expect(encode('abc')).toBe('YWJj');
  });
});
