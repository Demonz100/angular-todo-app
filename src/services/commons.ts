export const splitStringByComma = (string: any): string[] => {
  return string.replaceAll(/\s/g,'').split(',')
}