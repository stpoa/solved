export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0)
export const isNumber = (n: any): boolean =>
  !isNaN(parseFloat(n)) && isFinite(n)
