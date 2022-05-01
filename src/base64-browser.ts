export function encode(value: string) {
  return btoa(value);
}

export function decode(value: string) {
  return atob(value);
}
