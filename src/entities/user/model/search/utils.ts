const getNextCharacter = (string: string): string =>
  String.fromCodePoint(string.codePointAt(string.length - 1)! + 1)

export const getEndStringForPrefix = (prefix: string): string =>
  prefix.slice(0, -1) + getNextCharacter(prefix.slice(-1))
