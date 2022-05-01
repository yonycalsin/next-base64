export function encode(value: string) {
  return Buffer.from(value, 'utf-8').toString('base64');
}

export function decode(value: string) {
  return Buffer.from(value, 'base64').toString('utf-8');
}
